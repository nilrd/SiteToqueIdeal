import { useState } from 'react'
import { Instagram, Heart, MessageCircle, Share, MapPin, Phone, Mail } from 'lucide-react'
import InstagramSection from '../components/InstagramSection'
import GallerySection from '../components/GallerySection'

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Sobre a Toque Ideal
          </h1>
          <p className="text-xl text-gray-600 font-lato leading-relaxed max-w-3xl mx-auto">
            Há mais de 5 anos criando peças únicas que vão além da decoração: 
            são expressões de estilo, personalidade e sofisticação.
          </p>
        </div>

        {/* Nossa História */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-6">
              Nossa História
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-600 font-lato leading-relaxed mb-6">
                  A Toque Ideal nasceu da paixão por criar peças únicas em vidro que transformam 
                  ambientes e expressam personalidade. Com mais de 5 anos de experiência no mercado, 
                  nos especializamos em decoração em vidro de alta qualidade.
                </p>
                <p className="text-lg text-gray-600 font-lato leading-relaxed mb-6">
                  Cada peça é cuidadosamente desenvolvida para atender às necessidades específicas 
                  de nossos clientes, combinando funcionalidade, beleza e durabilidade.
                </p>
                <p className="text-lg text-gray-600 font-lato leading-relaxed">
                  Participamos das principais feiras de decoração do país, sempre apresentando 
                  nossas mais recentes criações e inovações.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/fotosinstagram/post_insta_2.jpg" 
                  alt="Produtos Toque Ideal"
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fundador */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-8 text-center">
              Nosso Fundador
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                  Devid Bomfim
                </h3>
                <p className="text-gray-600 font-lato mb-4 leading-relaxed">
                  Fundador e CEO da Toque Ideal, Devid Bomfim é um empreendedor 
                  visionário com mais de 5 anos de experiência no setor de decoração 
                  em vidro.
                </p>
                <p className="text-gray-600 font-lato mb-4 leading-relaxed">
                  Sua paixão por design e qualidade levou à criação de uma empresa 
                  que se destaca pela inovação e excelência em cada produto 
                  desenvolvido.
                </p>
                <p className="text-gray-600 font-lato leading-relaxed">
                  Sob sua liderança, a Toque Ideal se tornou referência no mercado de 
                  decoração em vidro, participando das principais feiras do setor.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/devid-bomfim.jpg" 
                  alt="Devid Bomfim - Fundador da Toque Ideal"
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>  </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img 
                  src="/image.png" 
                  alt="Devid Bomfim - Fundador da Toque Ideal"
                  className="w-80 h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4">
                Missão
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                Criar peças únicas em vidro que transformem ambientes e expressem 
                a personalidade de nossos clientes com qualidade e sofisticação.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4">
                Visão
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                Ser reconhecida como a principal referência em decoração em vidro 
                no Brasil, expandindo nossa presença nacional.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4">
                Valores
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                Qualidade, inovação, sustentabilidade e compromisso com a 
                satisfação total de nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <InstagramSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Contato */}
        <section className="mt-16">
          <div className="bg-primary text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Quer conhecer mais sobre nossos produtos ou tem alguma dúvida? 
              Estamos aqui para ajudar!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6" />
                <span className="font-lato">(11) 99999-9999</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6" />
                <span className="font-lato">contato@toqueideal.com.br</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Instagram className="h-6 w-6" />
                <a 
                  href="https://www.instagram.com/toque.ideal?igsh=cnhzZGNzeGIya2F5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-lato hover:underline"
                >
                  @toque.ideal
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SobreNos

