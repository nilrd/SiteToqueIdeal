import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <p>R. Iout Bernarda Pinto, 383</p>
                  <p>São Paulo - SP</p>
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
              <a href="#home" className="block font-lato hover:text-teal-300 transition-colors">
                Home
              </a>
              <a href="#catalogo" className="block font-lato hover:text-teal-300 transition-colors">
                Catálogo
              </a>
              <a href="#sobre" className="block font-lato hover:text-teal-300 transition-colors">
                Sobre Nós
              </a>
              <a href="#eventos" className="block font-lato hover:text-teal-300 transition-colors">
                Feiras & Eventos
              </a>
              <a href="#contato" className="block font-lato hover:text-teal-300 transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-teal-700 p-3 rounded-full hover:bg-teal-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-teal-700 p-3 rounded-full hover:bg-teal-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-teal-700 p-3 rounded-full hover:bg-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-6">
              <p className="font-lato text-sm text-teal-200">
                Siga-nos para acompanhar nossas novidades, 
                tendências em decoração e participações em eventos.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src="/src/assets/logotoqueideal/logo toque ideal/retangular logo.png" 
                alt="Toque Ideal" 
                className="h-8 w-auto opacity-80"
              />
            </div>
            <div className="text-sm font-lato text-teal-200">
              <p>&copy; 2024 Toque Ideal. Todos os direitos reservados.</p>
              <p className="mt-1">
                Desenvolvido com ❤️ para transformar ambientes através do vidro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

