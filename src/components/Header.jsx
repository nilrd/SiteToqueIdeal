import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useQuote } from '../context/QuoteContext'
import { Button } from '@/components/ui/button'
import { Menu, X, Search, ShoppingCart } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems } = useQuote()
  const location = useLocation()

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Sobre Nós', href: '/sobre-nos' },
    { name: 'Feiras & Eventos', href: '/eventos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
    { name: 'Contato', href: '/contato' }
  ]

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname === href
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mr-12">
            <Link to="/">
              <img 
                src="/logo-toque-ideal-novo.png" 
                alt="Toque Ideal" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.src = '/retangularlogo.png'
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
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
          </nav>

          {/* Search and CTA Button */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/orcamento">
              <Button className="btn-primary font-montserrat font-semibold relative">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Monte seu Orçamento
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
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
                <Link to="/orcamento">
                  <Button className="btn-primary w-full font-montserrat font-semibold relative">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Monte seu Orçamento
                    {getTotalItems() > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {getTotalItems()}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

