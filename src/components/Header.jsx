import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useQuote } from '../context/QuoteContext'
import { Button } from '@/components/ui/button'
import { Menu, X, Search, ShoppingCart, MessageCircle } from 'lucide-react'

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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/logo-toque-ideal-novo.png" 
                alt="Toque Ideal" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.src = 
'/retangularlogo.png'
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 font-montserrat font-medium ${
                    isActive(item.href) 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white font-montserrat font-semibold"
              size="sm"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              ORÇAMENTO
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 font-montserrat font-medium ${
                    isActive(item.href) 
                      ? 'text-primary bg-teal-50' 
                      : 'text-gray-700 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 hover:bg-green-700 text-white w-full font-montserrat font-semibold"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  ORÇAMENTO
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
