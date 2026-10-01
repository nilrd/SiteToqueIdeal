'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { MENU, TOQUE, linkWhatsApp } from '@/config/toque'
import { IconeInstagram, IconeWhatsApp } from './Icones'

export function Cabecalho() {
  const [aberto, setAberto] = useState(false)
  const [ativo, setAtivo] = useState('#inicio')
  const dialogo = useRef<HTMLDialogElement>(null)
  const botaoMenu = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setAtivo(`#${entry.target.id}`)
      }
    }, { rootMargin: '-10% 0px -45% 0px' })
    MENU.forEach(({ href }) => {
      const secao = document.getElementById(href.slice(1))
      if (secao) observer.observe(secao)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!aberto) return
    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const media = window.matchMedia('(min-width: 1024px)')
    const fecharNoDesktop = () => { if (media.matches) dialogo.current?.close() }
    media.addEventListener('change', fecharNoDesktop)
    return () => {
      document.body.style.overflow = overflowAnterior
      media.removeEventListener('change', fecharNoDesktop)
    }
  }, [aberto])

  function abrirMenu() { dialogo.current?.showModal(); setAberto(true) }
  function fecharMenu() { dialogo.current?.close() }

  return (
    <>
      <header className="cabecalho">
        <a href="#inicio" className="marca-menu" aria-label="Toque Ideal, início"><Image src="/simbolo.png" alt="" width={160} height={160} priority /><span>Toque Ideal</span></a>
        <nav aria-label="Seções" className="menu-desktop">
          {MENU.map((item) => <a key={item.href} href={item.href} aria-current={ativo === item.href ? 'location' : undefined}>{item.rotulo}</a>)}
        </nav>
        <div className="redes-sociais redes-menu">
          <a href={TOQUE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Toque Ideal"><IconeInstagram /></a>
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Toque Ideal"><IconeWhatsApp /></a>
        </div>
        <button ref={botaoMenu} type="button" onClick={abrirMenu} aria-label="Abrir menu" aria-expanded={aberto} aria-controls="menu-celular" className="botao-menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span>Menu</span>
        </button>
      </header>

      <dialog ref={dialogo} id="menu-celular" className="menu-celular" aria-label="Menu de navegação"
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return
          const elementos = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([tabindex="-1"])'))
          const primeiro = elementos[0]
          const ultimo = elementos[elementos.length - 1]
          if (event.shiftKey && document.activeElement === primeiro) {
            event.preventDefault()
            ultimo?.focus()
          } else if (!event.shiftKey && document.activeElement === ultimo) {
            event.preventDefault()
            primeiro?.focus()
          }
        }}
        onClose={() => { setAberto(false); if (window.innerWidth < 1024) botaoMenu.current?.focus() }}>
        <button type="button" tabIndex={-1} className="menu-fundo" aria-label="Fechar menu" onClick={fecharMenu} />
        <div className="menu-gaveta">
          <div className="menu-gaveta-topo"><span className="nome-gaveta">Toque Ideal</span><button type="button" autoFocus className="fechar-menu" aria-label="Fechar menu" onClick={fecharMenu}>×</button></div>
          <nav aria-label="Seções no celular">
            {MENU.map((item) => <a key={item.href} href={item.href} onClick={fecharMenu} aria-current={ativo === item.href ? 'location' : undefined}>{item.rotulo}</a>)}
          </nav>
          <div className="menu-gaveta-contato">
            <p>{TOQUE.assinatura}</p>
            <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" onClick={fecharMenu}><IconeWhatsApp />{TOQUE.whatsappDisplay}</a>
            <a href={TOQUE.instagram} target="_blank" rel="noopener noreferrer" onClick={fecharMenu}><IconeInstagram />{TOQUE.instagramHandle}</a>
          </div>
        </div>
      </dialog>
    </>
  )
}
