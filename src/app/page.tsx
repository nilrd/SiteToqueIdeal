import Image from 'next/image'
import { COLECOES, FOTOS, MENU, TOQUE, linkWhatsApp } from '@/config/toque'
import { Cabecalho } from '@/components/Cabecalho'
import { IconeDiamante, IconeFolha, IconeInstagram, IconeLoja, IconeWhatsApp } from '@/components/Icones'

function jsonLd() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: TOQUE.nome,
    url: TOQUE.url,
    logo: `${TOQUE.url}/logo.png`,
    slogan: TOQUE.assinatura,
    description: 'Peças decorativas em vidro com borda dourada, vendidas no atacado para lojas de decoração e presentes.',
    email: TOQUE.email,
    sameAs: [TOQUE.instagram],
    contactPoint: { '@type': 'ContactPoint', telephone: `+${TOQUE.whatsapp}`, contactType: 'sales', areaServed: 'BR', availableLanguage: 'Portuguese' },
  }).replace(/</g, '\\u003c')
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />
      <a className="pular-conteudo" href="#conteudo">Pular para o conteúdo</a>
      <Cabecalho />
      <div className="pagina">
        <main id="conteudo" tabIndex={-1}>
          <section id="inicio" className="banner" aria-labelledby="titulo-inicio">
            <div className="banner-foto">
              <Image src={FOTOS.banner.src} alt={FOTOS.banner.alt} width={FOTOS.banner.w} height={FOTOS.banner.h} priority sizes="(min-width: 1280px) calc(100vw - 132px), (min-width: 768px) 100vw, 142vw" />
            </div>
            <div className="banner-texto">
              <div className="banner-titulo">
                <p className="assinatura-banner">Vidro artesanal</p>
                <h1 id="titulo-inicio"><span>Forma,</span>{' '}<span>luz e</span>{' '}<span>equilíbrio.</span></h1>
              </div>
              <p className="descricao-banner">Peças que traduzem a beleza do essencial e criam atmosferas únicas.</p>
              <a className="link-editorial" href="#colecoes">Explorar coleções</a>
            </div>
          </section>

          <section className="diferenciais" aria-label="Diferenciais da Toque Ideal">
            <ul className="conteiner diferenciais-lista">
              {[
                { Icone: IconeFolha, titulo: 'Vidro artesanal', texto: 'Formas e texturas que tornam cada ambiente único.' },
                { Icone: IconeDiamante, titulo: 'Acabamento dourado', texto: 'O brilho da borda valoriza cada contorno do vidro.' },
                { Icone: IconeLoja, titulo: 'Atacado para lojistas', texto: 'Peças para a sua loja. Catálogo pelo WhatsApp.' },
              ].map(({ Icone, titulo, texto }) => (
                <li key={titulo}>
                  <Icone className="icone-diferencial" />
                  <div><h2>{titulo}</h2><p>{texto}</p></div>
                </li>
              ))}
            </ul>
          </section>

          <section id="sobre" className="conteiner historia" aria-labelledby="titulo-sobre">
            <div className="historia-foto">
              <Image src={FOTOS.essencia.src} alt={FOTOS.essencia.alt} width={FOTOS.essencia.w} height={FOTOS.essencia.h} sizes="(min-width: 1280px) 46vw, (min-width: 768px) 48vw, 100vw" />
            </div>
            <div className="historia-texto">
              <p className="historia-assunto">Quem somos</p>
              <h2 id="titulo-sobre">Arte em vidro.<br />Design com propósito.</h2>
              <span className="linha-ouro" aria-hidden="true" />
              <p>A Toque Ideal é uma fabricante de peças decorativas em vidro. Nossas coleções unem modernidade, qualidade e design, com peças pensadas para levar beleza, elegância e funcionalidade aos ambientes.</p>
              <p>Com mais de 15 anos de mercado e presença em feiras como a ABCasa Fair, levamos novas coleções e tendências a lojas de decoração de todo o Brasil.</p>
              <dl className="historia-numeros">
                <div><dt>15+</dt><dd>Anos de mercado</dd></div>
                <div><dt>100+</dt><dd>Modelos diferentes</dd></div>
              </dl>
              <a className="link-editorial" href="#colecoes">Conheça nossas coleções</a>
            </div>
          </section>

          <section id="colecoes" className="conteiner colecoes" aria-labelledby="titulo-colecoes">
            <div className="colecoes-cabecalho"><h2 id="titulo-colecoes">Coleções em destaque</h2><p>Beleza em diferentes formas.</p></div>
            <ul className="colecoes-lista">
              {COLECOES.map((colecao) => (
                <li key={colecao.nome}>
                  <a href={linkWhatsApp(`Olá! Tenho uma loja e quero conhecer a coleção de ${colecao.nome.toLowerCase()} da Toque Ideal.`)} target="_blank" rel="noopener noreferrer">
                    <div className="colecao-foto"><Image src={colecao.img.src} alt={colecao.img.alt} width={colecao.img.w} height={colecao.img.h} sizes="(min-width: 1280px) 23vw, (min-width: 768px) 23vw, 46vw" /></div>
                    <h3>{colecao.nome}</h3>
                    <span className="colecao-link">Conhecer a coleção</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="orientacao-colecoes">Deslize para conhecer as coleções.</p>
          </section>
          <section className="ambientes" aria-labelledby="titulo-ambientes">
            <div className="conteiner ambientes-layout">
              <div className="ambientes-texto">
                <h2 id="titulo-ambientes">Novos tons para cada ambiente.</h2>
                <span className="linha-ouro" aria-hidden="true" />
                <p>O vidro encontra a luz e revela outras possibilidades. A leveza do fumê e os reflexos do bronze valorizam cada forma e textura.</p>
                <p>Composições para inspirar a sua vitrine e transformar os espaços de quem leva um toque ideal para a casa.</p>
                <a className="botao-catalogo" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer"><IconeWhatsApp />Receber catálogo</a>
              </div>
              <div className="ambientes-fotos">
                <figure>
                  <Image src={FOTOS.expressao.src} alt={FOTOS.expressao.alt} width={FOTOS.expressao.w} height={FOTOS.expressao.h} sizes="(min-width: 1280px) 34vw, (min-width: 768px) 30vw, 100vw" />
                  <figcaption>A leveza do fumê.</figcaption>
                </figure>
                <figure className="ambiente-detalhe">
                  <Image src={FOTOS.bronze.src} alt={FOTOS.bronze.alt} width={FOTOS.bronze.w} height={FOTOS.bronze.h} sizes="(min-width: 768px) 25vw, 70vw" />
                  <figcaption>Texturas em bronze.</figcaption>
                </figure>
              </div>
            </div>
          </section>
        </main>

        <footer id="contato" className="rodape">
          <div className="conteiner">
            <div className="rodape-principal">
              <div>
                <a href="#inicio" className="marca-rodape" aria-label="Toque Ideal, início"><Image src="/simbolo.png" alt="" width={160} height={160} /><span>Toque Ideal</span></a>
                <p className="frase-marca">{TOQUE.assinatura}</p>
              </div>
              <nav aria-label="Rodapé" className="rodape-menu">{MENU.map((item) => <a key={item.href} href={item.href}>{item.rotulo}</a>)}</nav>
              <div className="redes-sociais">
                <a href={TOQUE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Toque Ideal"><IconeInstagram /></a>
                <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Toque Ideal"><IconeWhatsApp /></a>
              </div>
            </div>
            <address className="rodape-contatos">
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer"><IconeWhatsApp />{TOQUE.whatsappDisplay}</a>
              <a href={TOQUE.instagram} target="_blank" rel="noopener noreferrer"><IconeInstagram />{TOQUE.instagramHandle}</a>
              <a href={`mailto:${TOQUE.email}`}>{TOQUE.email}</a>
            </address>
            <div className="rodape-creditos">
              <p>© {new Date().getFullYear()} Toque Ideal. Venda no atacado para lojistas.</p>
              <a href="https://www.agenciajn.com.br" target="_blank" rel="noopener noreferrer" className="credito-agencia"><span>Site por</span><Image src="/agencia-jn.png" alt="Agência JN" width={360} height={81} /></a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
