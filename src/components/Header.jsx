import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useQuote } from '../context/QuoteContext'
import { Button } from '@/components/ui/button'
import { Menu, X, Search, MessageCircle } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems } = useQuote()
  const location = useLocation()

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Sobre Nós', href: '/sobre-nos' },
    { name: 'Feiras & Eventos', href: '/eventos' },
    { name: 'Contato', href: '/contato' }
  ]

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname === href
  }

  const handleWhatsAppContact = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para produtos do catálogo Toque Ideal.`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511967767364&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsMenuOpen(false)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
    // Scroll para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Fechar menu ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <header 
        style={{
          backgroundColor: '#214567',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        {/* Logo - Responsivo */}
        <div style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
          <Link 
            to="/" 
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/LOGO_BRANCA.png" 
              alt="Toque Ideal Logo" 
              style={{ 
                height: '32px', 
                width: 'auto', 
                marginRight: '8px'
              }}
              onError={(e) => {
                e.target.src = '/retangularlogo.png'
              }}
            />
            <span style={{ 
              fontSize: '1.125rem', 
              fontWeight: 'bold', 
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap'
            }}>
              TOQUE IDEAL
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Centralizado */}
        <nav style={{ 
          display: 'flex', 
          flex: 1, 
          justifyContent: 'center'
        }} className="hidden md:flex">
          <div style={{ display: 'flex', gap: '2rem' }}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  color: isActive(item.href) ? '#ffffff' : '#cccccc',
                  textDecoration: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  padding: '0.5rem 0',
                  borderBottom: isActive(item.href) ? '2px solid white' : '2px solid transparent',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onMouseEnter={(e) => {
                  if (!isActive(item.href)) {
                    e.target.style.color = '#ffffff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.href)) {
                    e.target.style.color = '#cccccc'
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Desktop Actions - Direita */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          flex: '0 0 auto'
        }} className="hidden md:flex">
          <Search 
            style={{ 
              width: '20px', 
              height: '20px', 
              color: '#cccccc', 
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#ffffff'}
            onMouseLeave={(e) => e.target.style.color = '#cccccc'}
          />
          <Button
            onClick={handleWhatsAppContact}
            style={{
              background: '#006d67',
              color: 'white',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              border: 'none',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#005a55'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#006d67'}
          >
            <MessageCircle style={{ width: '14px', height: '14px' }} />
            ORÇAMENTO
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden" style={{ flex: '0 0 auto' }}>
          <Button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isMenuOpen ? (
              <X style={{ width: '24px', height: '24px' }} />
            ) : (
              <Menu style={{ width: '24px', height: '24px' }} />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div 
        className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}
        style={{
          position: 'fixed',
          top: '0',
          right: isMenuOpen ? '0' : '-300px',
          width: '280px',
          height: '100vh',
          backgroundColor: '#214567',
          padding: '5rem 1.5rem 2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          zIndex: 999,
          boxShadow: '-4px 0 8px rgba(0,0,0,0.1)',
          overflowY: 'auto',
          transition: 'right 0.3s ease-in-out'
        }}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            style={{
              color: isActive(item.href) ? '#ffffff' : '#cccccc',
              textDecoration: 'none',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              fontSize: '1rem',
              padding: '0.75rem 0',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              transition: 'color 0.3s ease'
            }}
            onClick={handleMenuItemClick}
            onMouseEnter={(e) => e.target.style.color = '#ffffff'}
            onMouseLeave={(e) => {
              if (!isActive(item.href)) {
                e.target.style.color = '#cccccc'
              }
            }}
          >
            {item.name}
          </Link>
        ))}
        
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Button
            onClick={handleWhatsAppContact}
            style={{
              background: '#006d67',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '0.9rem',
              cursor: 'pointer',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#005a55'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#006d67'}
          >
            <MessageCircle style={{ width: '16px', height: '16px' }} />
            ORÇAMENTO
          </Button>
        </div>
      </div>

      {/* CSS para responsividade */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hidden {
            display: none !important;
          }
          
          .md\\:hidden {
            display: block !important;
          }
          
          .md\\:flex {
            display: none !important;
          }
          
          header {
            padding: 0.75rem 1rem !important;
          }
          
          header img {
            height: 28px !important;
            margin-right: 6px !important;
          }
          
          header span {
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          header {
            padding: 0.5rem 0.75rem !important;
          }
          
          header img {
            height: 24px !important;
            margin-right: 4px !important;
          }
          
          header span {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Header

