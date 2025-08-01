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
            Há mais de 5 anos no mercado, a Toque Ideal é um projeto fruto da parceria entre Devid Bomfim e Luana Andrade, que uniram suas experiências para oferecer ao setor de decoração uma linha completa de produtos da mais alta qualidade.
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
                  É com grande satisfação que apresentamos nossas coleções, desenvolvidas com um padrão único de modernidade, qualidade e design. Buscamos constantemente evoluir na arte de moldar vidros, criando peças que vão muito além da decoração: são expressões de estilo, personalidade e sofisticação.
                </p>
                <p className="text-lg text-gray-600 font-lato leading-relaxed mb-6">
                  Nossa trajetória é marcada pela atenção aos detalhes e pelo compromisso com a excelência. Cada produto é tratado como único e exclusivo, para atender às expectativas dos clientes mais exigentes e transformar ambientes com beleza, elegância e funcionalidade.
                </p>
                <p className="text-lg text-gray-600 font-lato leading-relaxed">
                  A Toque Ideal está presente nas principais feiras e eventos do setor, como a ABCasa Fair, levando ao público e parceiros as últimas tendências em design e decoração. Nosso propósito é claro: inovar sempre, criando produtos que encantam e transformam.
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

        {/* Fundadores */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-8 text-center">
              Nossos Fundadores
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Deivid Bomfim */}
              <div className="text-center">
                <div className="relative mb-6">
                  <img 
                    src="/devid-bomfim.jpg" 
                    alt="Deivid Bomfim - Fundador da Toque Ideal"
                    className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                  Deivid Bomfim
                </h3>
                <p className="text-teal-600 font-lato font-semibold mb-4">
                  Fundador e CEO
                </p>
                <p className="text-gray-600 font-lato mb-4 leading-relaxed">
                  Empreendedor visionário com mais de 5 anos de experiência no setor de decoração 
                  em vidro. Sua paixão por design e qualidade levou à criação de uma empresa 
                  que se destaca pela inovação e excelência.
                </p>
                <p className="text-gray-600 font-lato leading-relaxed">
                  Sob sua liderança, a Toque Ideal se tornou referência no mercado, 
                  participando das principais feiras do setor.
                </p>
              </div>

              {/* Luana Andrade */}
              <div className="text-center">
                <div className="relative mb-6">
                  <img 
                    src="/luana-andrade.jpg" 
                    alt="Luana Andrade - Co-Fundadora da Toque Ideal"
                    className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                  Luana Andrade
                </h3>
                <p className="text-teal-600 font-lato font-semibold mb-4">
                  Co-Fundadora e Diretora Criativa
                </p>
                <p className="text-gray-600 font-lato mb-4 leading-relaxed">
                  A força criativa por trás de muitas de nossas coleções. Com um olhar apurado 
                  para as tendências e um talento inato para o design, Luana garante que cada 
                  peça seja uma obra de arte.
                </p>
                <p className="text-gray-600 font-lato leading-relaxed">
                  Sua dedicação à estética e à funcionalidade é o que nos permite oferecer 
                  produtos que realmente transformam ambientes.
                </p>
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

