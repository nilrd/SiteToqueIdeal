import { useState } from 'react'
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
  }

  return (
    <header 
      style={{
        backgroundColor: '#002b29',
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
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img 
            src="/LOGO_BRANCA.png" 
            alt="Toque Ideal Logo" 
            style={{ height: '40px', width: 'auto', marginRight: '12px' }}
            onError={(e) => {
              e.target.src = '/retangularlogo.png'
            }}
          />
          <span style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '1px'
          }}>
            TOQUE IDEAL
          </span>
        </Link>
      </div>

      {/* Desktop Navigation - Centralizado */}
      <nav style={{ display: 'flex', flex: 1, justifyContent: 'center' }} className="hidden md:flex">
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
                fontSize: '1rem',
                padding: '0.5rem 0',
                borderBottom: isActive(item.href) ? '2px solid white' : '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="hidden md:flex">
        <Search 
          style={{ 
            width: '24px', 
            height: '24px', 
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
            padding: '0.8rem 1.5rem',
            borderRadius: '6px',
            border: 'none',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#005a55'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#006d67'}
        >
          <MessageCircle style={{ width: '16px', height: '16px' }} />
          ORÇAMENTO
        </Button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          {isMenuOpen ? (
            <X style={{ width: '24px', height: '24px' }} />
          ) : (
            <Menu style={{ width: '24px', height: '24px' }} />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#002b29',
            borderTop: '1px solid #004d47',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
          className="md:hidden"
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
                borderBottom: '1px solid #004d47'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div style={{ paddingTop: '1rem' }}>
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
                gap: '0.5rem'
              }}
            >
              <MessageCircle style={{ width: '16px', height: '16px' }} />
              ORÇAMENTO
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

