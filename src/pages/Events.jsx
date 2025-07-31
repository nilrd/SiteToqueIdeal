import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, Car, Hotel, ExternalLink, X } from 'lucide-react'

const Events = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)
  const [isHotelsModalOpen, setIsHotelsModalOpen] = useState(false)

  const nextEvent = {
    name: "ABCasa Fair 2025",
    date: "09 a 12 de Fevereiro de 2025",
    location: "R. José Bernardo Pinto, 333 - Vila Guilherme, São Paulo/SP",
    stand: "Estande 1643 (10x4m = 40,00m²)",
    description: "A maior feira de decoração da América Latina. Venha conhecer nossas novidades!"
  }

  const nearbyHotels = [
    {
      name: "Hotel Ibis São Paulo Expo",
      distance: "2.5 km",
      rating: 4.2,
      amenities: ["Wi-Fi", "Café da manhã", "Estacionamento"]
    },
    {
      name: "Comfort Hotel Expo Center Norte",
      distance: "3.1 km", 
      rating: 4.0,
      amenities: ["Wi-Fi", "Academia", "Business Center"]
    },
    {
      name: "Hotel Deville Prime São Paulo",
      distance: "4.2 km",
      rating: 4.5,
      amenities: ["Wi-Fi", "Piscina", "Spa", "Restaurante"]
    },
    {
      name: "Mercure São Paulo Vila Olimpia",
      distance: "5.8 km",
      rating: 4.3,
      amenities: ["Wi-Fi", "Academia", "Bar", "Room Service"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Feiras & Eventos
          </h1>
          <p className="text-xl text-gray-600 font-lato leading-relaxed max-w-3xl mx-auto">
            Participe dos principais eventos do setor de decoração e conheça de perto 
            nossas últimas criações e inovações.
          </p>
        </div>

        {/* Próximo Evento - Destaque */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white bg-opacity-10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 mr-3" />
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold">
                  Próximo Evento
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
                    {nextEvent.name}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-teal-200" />
                      <span className="font-lato text-lg">{nextEvent.date}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-teal-200 mt-1" />
                      <span className="font-lato text-lg">{nextEvent.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-teal-200" />
                      <span className="font-lato text-lg">{nextEvent.stand}</span>
                    </div>
                  </div>
                  <p className="text-lg font-lato mb-6 opacity-90">
                    {nextEvent.description}
                  </p>
                  <button 
                    onClick={() => setIsMapModalOpen(true)}
                    className="bg-white text-teal-600 px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-gray-100 transition-colors duration-300 mr-4"
                  >
                    Ver no Mapa
                  </button>
                  <button 
                    onClick={() => setIsHotelsModalOpen(true)}
                    className="bg-white text-teal-600 px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-gray-100 transition-colors duration-300 mr-4"
                  >
                    Hotéis Próximos
                  </button>
                  <a 
                    href="https://abcasafair.com.br/transporte-gratuito/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-300"
                  >
                    <Car className="h-5 w-5 mr-2" />
                    Transporte Gratuito
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
                
                <div className="relative">
                  <img 
                    src="/convite-feira.jpg" 
                    alt="ABCasa Fair 2025 - Convite"
                    className="w-full h-80 object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Informações Importantes */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-8 text-center">
            Informações Importantes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">
                Localização
              </h3>
              <p className="text-gray-600 font-lato">
                Estande 1643 na ABCasa Fair, localizado na Avenida H, Rua 13. 
                Fácil acesso e estacionamento disponível.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">
                Atendimento
              </h3>
              <p className="text-gray-600 font-lato">
                Nossa equipe estará presente para atendê-lo, tirar dúvidas e 
                apresentar nossos produtos. Compras diretas no estande.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">
                Transporte
              </h3>
              <p className="text-gray-600 font-lato">
                Transporte gratuito disponível. Consulte horários e pontos de 
                embarque no site oficial da ABCasa Fair.
              </p>
            </div>
          </div>
        </section>

        {/* Hotéis Próximos */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-8 text-center">
            Hotéis Recomendados
          </h2>
          <p className="text-center text-gray-600 font-lato mb-8 max-w-2xl mx-auto">
            Selecionamos os melhores hotéis próximos ao evento para sua comodidade.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyHotels.map((hotel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-montserrat font-semibold text-gray-900 leading-tight">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                      <span className="text-yellow-600 text-sm font-semibold">★ {hotel.rating}</span>
                    </div>
                  </div>
                  
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm font-lato">{hotel.distance} do evento</span>
                    </div>
                  
                  <div className="space-y-1">
                    {hotel.amenities.map((amenity, idx) => (
                      <span key={idx} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Você é Nosso Convidado!
            </h2>
            <p className="text-lg text-gray-600 font-lato mb-8 max-w-2xl mx-auto">
              Venha conhecer de perto nossas criações, conversar com nossa equipe e 
              descobrir as últimas tendências em decoração em vidro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsMapModalOpen(true)}
                className="bg-teal-600 text-white px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-teal-700 transition-colors duration-300"
              >
                Como Chegar
              </button>
              <a 
                href="https://www.instagram.com/toque.ideal?igsh=cnhzZGNzeGIya2F5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-teal-600 hover:text-white transition-colors duration-300"
              >
                Seguir no Instagram
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Modal do Mapa */}
      {isMapModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-montserrat font-bold text-gray-900">
                Localização do Evento
              </h3>
              <button 
                onClick={() => setIsMapModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-montserrat font-semibold text-gray-900 mb-4">
                    ABCasa Fair 2025
                  </h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-teal-600 mt-1" />
                      <div>
                        <p className="font-lato text-gray-900">R. José Bernardo Pinto, 333</p>
                        <p className="font-lato text-gray-600">Vila Guilherme, São Paulo - SP</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-teal-600" />
                      <span className="font-lato text-gray-900">Estande 1643 - Avenida H, Rua 13</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-teal-600" />
                      <span className="font-lato text-gray-900">09 a 12 de Fevereiro de 2025</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h5 className="font-montserrat font-semibold text-gray-900 mb-2">Como Chegar:</h5>
                    <ul className="text-sm font-lato text-gray-700 space-y-1">
                      <li>• Metrô: Estação Vila Guilherme (Linha 1-Azul)</li>
                      <li>• Ônibus: Várias linhas passam pela região</li>
                      <li>• Carro: Estacionamento disponível no local</li>
                      <li>• Transporte gratuito: Consulte pontos de embarque</li>
                    </ul>
                  </div>
                  
                  <a 
                    href="https://abcasafair.com.br/transporte-gratuito/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-teal-700 transition-colors duration-300"
                  >
                    <Car className="h-5 w-5 mr-2" />
                    Transporte Gratuito
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
                
                <div>
                  <img 
                    src="/mapa-feira.jpg" 
                    alt="Mapa da ABCasa Fair - Localização Toque Ideal"
                    className="w-full h-80 object-cover rounded-lg shadow-md mb-4"
                  />
                  <img 
                    src="/mapa-abcasa.png" 
                    alt="Planta do evento - Estande Toque Ideal"
                    className="w-full h-60 object-contain rounded-lg border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Hotéis */}
      {isHotelsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-montserrat font-bold text-gray-900">
                Hotéis Recomendados
              </h3>
              <button 
                onClick={() => setIsHotelsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <p className="text-center text-gray-600 font-lato mb-8 max-w-2xl mx-auto">
                Selecionamos os melhores hotéis próximos ao evento para sua comodidade.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyHotels.map((hotel, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-montserrat font-semibold text-gray-900 leading-tight">
                          {hotel.name}
                        </h3>
                        <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                          <span className="text-yellow-600 text-sm font-semibold">★ {hotel.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm font-lato">{hotel.distance} do evento</span>
                      </div>
                      
                      <div className="space-y-1">
                        {hotel.amenities.map((amenity, idx) => (
                          <span key={idx} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Events

