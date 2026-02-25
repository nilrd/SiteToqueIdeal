import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'background 0.35s ease, box-shadow 0.35s ease',
      background: scrolled ? '#ffffff' : 'transparent',
      boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.08)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <img
            src={scrolled ? '/LOGO_AZUL.png' : '/LOGO_BRANCA.png'}
            alt="Toque Ideal"
            style={{ height: '36px', width: 'auto', transition: 'opacity 0.3s' }}
          />
        </a>

        <nav className="header-nav-desktop" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
        }}>
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '500',
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: scrolled ? '#1a1a1a' : 'rgba(255,255,255,0.92)',
                transition: 'color 0.2s',
                padding: '0.25rem 0',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#006d67'}
              onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#1a1a1a' : 'rgba(255,255,255,0.92)'}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contato')}
            style={{
              background: '#006d67',
              color: '#ffffff',
              border: 'none',
              padding: '0.6rem 1.5rem',
              borderRadius: '2px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#005450'}
            onMouseLeave={e => e.currentTarget.style.background = '#006d67'}
          >
            Orcamento
          </button>
        </nav>

        <button
          className="header-nav-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: scrolled ? '#1a1a1a' : '#ffffff',
            padding: '0.25rem',
            display: 'none',
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid #e5e4e0',
          padding: '1.5rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '500',
                fontSize: '0.9rem',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                textAlign: 'left',
                padding: '0.5rem 0',
                borderBottom: '1px solid #f0efec',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contato')}
            style={{
              background: '#006d67',
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '2px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              marginTop: '0.5rem',
              width: 'fit-content',
            }}
          >
            Orcamento
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .header-nav-desktop { display: none !important; }
          .header-nav-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

export default Header
