import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-montserrat font-bold text-white">
                TOQUE IDEAL
              </h3>
            </div>
            <p className="text-sm text-teal-300 font-lato leading-relaxed">
              Há mais de 5 anos criando peças únicas em vidro que transformam ambientes 
              e expressam personalidade com qualidade e sofisticação.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-300" />
                <span className="font-lato">(11) 98999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-300" />
                <span className="font-lato">contato@toqueideal.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-300 mt-1" />
                <div className="font-lato">
                  <p>R. José Bernardo Pinto, 333</p>
                  <p>Vila Guilherme, São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">
              Links Rápidos
            </h3>
            <div className="space-y-2">
              <Link to="/" className="block font-lato hover:text-teal-300 transition-colors">
                Home
              </Link>
              <Link to="/catalogo" className="block font-lato hover:text-teal-300 transition-colors">
                Catálogo
              </Link>
              <Link to="/sobre-nos" className="block font-lato hover:text-teal-300 transition-colors">
                Sobre Nós
              </Link>
              <Link to="/eventos" className="block font-lato hover:text-teal-300 transition-colors">
                Feiras & Eventos
              </Link>
              <Link to="/blog" className="block font-lato hover:text-teal-300 transition-colors">
                Blog
              </Link>
              <Link to="/trabalhe-conosco" className="block font-lato hover:text-teal-300 transition-colors">
                Trabalhe Conosco
              </Link>
              <Link to="/contato" className="block font-lato hover:text-teal-300 transition-colors">
                Contato
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/toque.ideal?igsh=cnhzZGNzeGIya2F5" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-teal-300 font-lato">
              Siga-nos <a 
                href="https://www.instagram.com/toque.ideal?igsh=cnhzZGNzeGIya2F5" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                @toque.ideal
              </a> para acompanhar nossas novidades e participações em eventos.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="font-montserrat font-semibold text-xl">TOQUE IDEAL</span>
            </div>
            
            <div className="text-sm text-teal-300 font-lato">
              <p>&copy; 2024 Toque Ideal. Todos os direitos reservados.</p>
              <p className="mt-1">
                Desenvolvido com <span className="text-red-400">❤️</span> para transformar ambientes através do vidro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

