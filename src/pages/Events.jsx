import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, Car, Hotel, ExternalLink, X, Navigation, Info } from 'lucide-react'
import HotelsModal from '../components/HotelsModal'
import MapModal from '../components/MapModal'

const Events = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)
  const [isHotelsModalOpen, setIsHotelsModalOpen] = useState(false)

  const nextEvent = {
    name: "ABCasa Fair 2025",
    date: "13 a 16 de Agosto de 2025",
    location: "R. José Bernardo Pinto, 333 - Vila Guilherme, São Paulo/SP",
    stand: "Estande 1643 (10x4m = 40,00m²)",
    description: "A maior feira de decoração da América Latina. Venha conhecer nossas novidades!"
  }

  const eventInfo = [
    {
      icon: MapPin,
      title: "Localização",
      description: "Estande 1643 na ABCasa Fair, localizado na Rua 16. Fácil acesso e estacionamento disponível."
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Nossa equipe estará presente para atendê-lo, tirar dúvidas e apresentar nossos produtos. Compras diretas no estande."
    },
    {
      icon: Car,
      title: "Transporte",
      description: "Transporte gratuito disponível. Consulte horários e pontos de embarque no site oficial da ABCasa Fair."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-gray-900 mb-6">
            Feiras & Eventos
          </h1>
          <p className="text-xl text-gray-600 font-lato leading-relaxed max-w-3xl mx-auto">
            Participe dos principais eventos do setor de decoração e conheça de perto 
            nossas últimas criações e inovações.
          </p>
        </div>

        {/* Próximo Evento - Destaque */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              </div>
              
              <div className="relative z-10 p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white">
                    Próximo Evento
                  </h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
                      {nextEvent.name}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center text-white">
                        <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <span className="font-lato text-lg">{nextEvent.date}</span>
                      </div>
                      <div className="flex items-start text-white">
                        <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4 mt-1">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <span className="font-lato text-lg">{nextEvent.location}</span>
                      </div>
                      <div className="flex items-center text-white">
                        <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                          <Users className="h-5 w-5" />
                        </div>
                        <span className="font-lato text-lg">{nextEvent.stand}</span>
                      </div>
                    </div>
                    
                    <p className="text-xl font-lato text-white opacity-90 leading-relaxed">
                      {nextEvent.description}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button 
                        onClick={() => setIsMapModalOpen(true)}
                        className="flex flex-col items-center justify-center bg-white text-teal-700 px-8 py-4 rounded-xl font-montserrat hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <span className="font-semibold text-lg">Ver no Mapa</span>
                        <span className="text-sm text-gray-600 mt-1">Localização do estande na feira</span>
                      </button>
                      
                      <button 
                        onClick={() => setIsHotelsModalOpen(true)}
                        className="flex flex-col items-center justify-center bg-white text-teal-700 px-8 py-4 rounded-xl font-montserrat hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <span className="font-semibold text-lg">Hotéis Próximos</span>
                        <span className="text-sm text-gray-600 mt-1">Dicas de hospedagem</span>
                      </button>
                      
                      <a 
                        href="https://abcasafair.com.br/transporte-gratuito/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-montserrat hover:bg-white hover:text-teal-700 transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="font-semibold text-lg">Transporte Gratuito</span>
                        <span className="text-sm opacity-80 mt-1">Consulte horários e pontos</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Event Image */}
                  <div className="relative">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                      <img 
                        src="/convite-feira.png" 
                        alt="ABCasa Fair 2025 - 13 a 16 de Agosto"
                        className="w-full h-80 object-contain rounded-xl shadow-2xl bg-white"
                        onError={(e) => {
                          e.target.src = '/placeholder-event.jpg'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Informações Importantes */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Informações Importantes
            </h2>
            <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
              Tudo que você precisa saber para aproveitar ao máximo sua visita ao nosso estande.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {eventInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-4 rounded-full mr-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-gray-900">
                    {info.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-lato leading-relaxed">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Você é Nosso Convidado!
              </h2>
              <p className="text-xl font-lato leading-relaxed max-w-3xl mx-auto mb-8 opacity-90">
                Venha conhecer de perto nossas criações, conversar com nossa equipe e descobrir 
                as últimas tendências em decoração em vidro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsMapModalOpen(true)}
                  className="flex items-center justify-center bg-teal-600 text-white px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Navigation className="h-5 w-5 mr-2" />
                  Como Chegar
                </button>
                <a 
                  href="https://www.instagram.com/toque.ideal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Seguir no Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modals */}
      <MapModal 
        isOpen={isMapModalOpen} 
        onClose={() => setIsMapModalOpen(false)} 
      />
      
      <HotelsModal 
        isOpen={isHotelsModalOpen} 
        onClose={() => setIsHotelsModalOpen(false)} 
      />
    </div>
  )
}

export default Events

