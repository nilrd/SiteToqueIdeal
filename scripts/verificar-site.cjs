// Verificação visual local. Use NODE_PATH para apontar para o Playwright disponível.
const { chromium } = require('playwright')
const assert = require('node:assert/strict')
const fs = require('node:fs/promises')
const path = require('node:path')

const base = process.env.TOQUE_TEST_URL || 'http://127.0.0.1:3010'
const destino = path.resolve('_contexto/revisao')
const tamanhos = [[1440, 900], [1280, 720], [1100, 850], [390, 844], [360, 740], [1333, 599], [1333, 480], [768, 1024], [820, 1180], [320, 568], [844, 390]]

async function conferir(page, largura) {
  const estado = await page.evaluate(() => {
    const rect = (selector) => {
      const r = document.querySelector(selector).getBoundingClientRect()
      return { x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom }
    }
    return {
      largura: innerWidth,
      documento: document.documentElement.scrollWidth,
      imagens: [...document.images].filter(img => !img.closest('dialog')).map(img => ({ src: img.getAttribute('src'), ok: img.complete && img.naturalWidth > 0 })),
      foto: rect('.banner-foto'),
      texto: rect('.banner-texto'),
      titulo: rect('h1'),
      cabecalho: rect('.cabecalho'),
      pagina: rect('.pagina'),
      rodape: rect('.rodape'),
      alturaTela: innerHeight,
      sociaisMenu: rect('.redes-menu'),
      linksMenu: [...document.querySelectorAll('.menu-desktop a')].map(el => { const r = el.getBoundingClientRect(); return { top: r.top, bottom: r.bottom } }),
      colecoes: [...document.querySelectorAll('.colecoes-lista h3')].map(el => el.textContent),
      ancorasInvalidas: [...document.querySelectorAll('a[href^="#"]')].map(a => a.getAttribute('href')).filter(href => !document.getElementById(href.slice(1))),
    }
  })
  assert(estado.documento <= largura, `Rolagem horizontal em ${largura}: ${estado.documento}`)
  assert(estado.imagens.every(img => img.ok), `Imagem ausente em ${largura}`)
  assert.equal(estado.ancorasInvalidas.length, 0)
  assert.equal(estado.colecoes.length, 4)
  assert(estado.titulo.right <= largura, `Título fora da tela em ${largura}`)
  if (largura >= 768) {
    assert(Math.abs(estado.foto.width / estado.foto.height - 1672 / 941) < .01, 'Proporção do banner alterada')
    assert(estado.texto.bottom <= estado.foto.bottom, 'Texto sai da foto')
    assert(estado.texto.right <= estado.foto.x + estado.foto.width * .5, 'Texto invade a área da peça')
  } else {
    assert(estado.texto.y >= estado.foto.bottom - 1, 'Texto sobre a imagem no celular')
    const titulo = await page.locator('.banner-titulo').boundingBox()
    assert(titulo.y + titulo.height < estado.foto.y + estado.foto.height * .59, 'Título invade a peça no celular')
    const faixa = page.locator('.colecoes-lista')
    assert(await faixa.evaluate(el => el.scrollWidth > el.clientWidth), 'Faixa de coleções não desliza')
    await page.locator('.colecoes-lista li').last().scrollIntoViewIfNeeded()
    assert(await faixa.evaluate(el => el.scrollLeft > 0), 'Última coleção inacessível')
    await faixa.evaluate(el => { el.scrollLeft = 0 })
    await page.evaluate(() => window.scrollTo(0, 0))
  }
  if (largura >= 1280) {
    assert.equal(estado.pagina.x, 132)
    assert(estado.sociaisMenu.bottom <= estado.alturaTela - 8, `Ícones cortados em ${largura}x${estado.alturaTela}`)
    assert(estado.linksMenu.every(link => link.top >= 0 && link.bottom <= estado.alturaTela), 'Links cortados na coluna lateral')
  }
  else assert.equal(estado.pagina.x, 0)
  assert(estado.rodape.height < (largura >= 1024 ? 300 : 430), 'Rodapé excessivamente alto')
  if (largura < 1024) {
    const menu = page.getByRole('button', { name: 'Abrir menu', exact: true })
    assert(await menu.isVisible(), `Menu ausente em ${largura}`)
    const caixa = await menu.boundingBox()
    assert(caixa.x >= 0 && caixa.x + caixa.width <= largura && caixa.y >= 0 && caixa.height >= 44, 'Botão do menu cortado ou pequeno')
  }
  const fotosPrincipais = await page.locator('main img').evaluateAll(imgs => imgs.map(img => new URL(img.src).searchParams.get('url')))
  assert.equal(new Set(fotosPrincipais).size, fotosPrincipais.length, 'Foto repetida na página')
  assert.equal(await page.locator('.ambientes-fotos img').count(), 2)
  assert.equal(await page.locator('.historia-numeros').innerText(), '15+\nAnos de mercado\n100+\nModelos diferentes')
  const whatsapp = await page.locator('.botao-catalogo').getAttribute('href')
  assert(whatsapp.startsWith('https://wa.me/5511965786357?text='))
  assert(decodeURIComponent(whatsapp).includes('Tenho uma loja'))
  return estado
}

async function main() {
  await fs.mkdir(destino, { recursive: true })
  const browser = await chromium.launch({ headless: true, channel: process.env.TOQUE_BROWSER_CHANNEL || 'chrome' })
  const erros = []
  const resultados = []
  try {
    for (const [width, height] of tamanhos) {
      const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce', deviceScaleFactor: 1, isMobile: width < 1024, hasTouch: width < 1024 })
      const page = await context.newPage()
      page.on('pageerror', error => erros.push(error.message))
      page.on('console', message => { if (message.type() === 'error') erros.push(message.text()) })
      const response = await page.goto(base, { waitUntil: 'networkidle' })
      assert.equal(response.status(), 200)
      assert(await page.locator('link[rel="icon"][href="/favicon.svg"]').count(), 'Favicon novo ausente')
      await page.evaluate(() => document.fonts.ready)
      for (const img of await page.locator('main img, footer img').all()) {
        await img.scrollIntoViewIfNeeded()
        await img.evaluate(el => el.decode())
      }
      await page.evaluate(() => { document.querySelector('.colecoes-lista').scrollLeft = 0 })
      await page.evaluate(() => window.scrollTo(0, 0))
      resultados.push({ tela: `${width}x${height}`, ...(await conferir(page, width)) })
      await page.screenshot({ path: path.join(destino, `pagina-${width}x${height}.png`), fullPage: true })
      await page.screenshot({ path: path.join(destino, `topo-${width}x${height}.png`) })
      await page.locator('footer').screenshot({ path: path.join(destino, `rodape-${width}x${height}.png`) })
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
      await page.screenshot({ path: path.join(destino, `final-${width}x${height}.png`) })
      await page.evaluate(() => window.scrollTo(0, 0))
      if (width < 1024) {
        const abrir = page.getByRole('button', { name: 'Abrir menu', exact: true })
        await abrir.tap()
        assert.equal(await abrir.getAttribute('aria-expanded'), 'true')
        assert(await page.locator('dialog').evaluate(el => el.open))
        for (let i = 0; i < 12; i++) {
          await page.keyboard.press('Tab')
          assert(await page.evaluate(() => document.querySelector('dialog').contains(document.activeElement)), 'Foco saiu do menu')
        }
        await page.screenshot({ path: path.join(destino, `menu-${width}x${height}.png`) })
        await page.keyboard.press('Escape')
        await page.waitForFunction(() => !document.querySelector('dialog').open && document.body.style.overflow !== 'hidden')
        assert(await abrir.evaluate(el => el === document.activeElement), 'Foco não voltou ao botão')
        await abrir.click()
        await page.locator('dialog nav a[href="#colecoes"]').click()
        await page.waitForFunction(() => location.hash === '#colecoes' && !document.querySelector('dialog').open)
        const topoColecoes = await page.locator('#colecoes').evaluate(el => el.getBoundingClientRect().top)
        assert(topoColecoes >= (width < 768 ? 68 : 72) && topoColecoes < height, 'Navegação encoberta pelo cabeçalho')
        await page.evaluate(() => window.scrollTo(0, 0))
        await abrir.click()
        await page.setViewportSize({ width: 1024, height: 720 })
        await page.waitForFunction(() => !document.querySelector('dialog').open && document.body.style.overflow !== 'hidden')
      } else {
        await page.locator('.menu-desktop a[href="#colecoes"]').click()
        await page.waitForFunction(() => location.hash === '#colecoes')
        const topoColecoes = await page.locator('#colecoes').evaluate(el => el.getBoundingClientRect().top)
        assert(topoColecoes >= (width >= 1280 ? 0 : 72) && topoColecoes < height)
      }
      await context.close()
    }
    assert.deepEqual(erros, [], 'Erros no navegador')
    await fs.writeFile(path.join(destino, 'verificacao.json'), JSON.stringify({ url: base, erros, resultados }, null, 2))
    console.log(`Verificado: ${tamanhos.length} telas, imagens, banner, rolagem horizontal, rodapé compacto, coluna lateral em janelas baixas, menu por toque e teclado.`)
  } finally { await browser.close() }
}

main().catch(error => { console.error(error); process.exitCode = 1 })
