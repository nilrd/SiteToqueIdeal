import { X, MapPin, Star, Wifi, Car, Coffee, Dumbbell, Utensils, Waves, Briefcase } from 'lucide-react'
import { useEffect } from 'react'

const HotelsModal = ({ isOpen, onClose }) => {
  const nearbyHotels = [
    {
      name: "Hotel Ibis São Paulo Expo",
      distance: "2.5 km",
      rating: 4.2,
      description: "Hotel moderno com excelente localização próximo ao centro de exposições.",
      amenities: [
        { icon: Wifi, label: "Wi-Fi Gratuito" },
        { icon: Coffee, label: "Café da manhã" },
        { icon: Car, label: "Estacionamento" }
      ],
      image: "/hotel-ibis.jpg"
    },
    {
      name: "Comfort Hotel Expo Center Norte",
      distance: "3.1 km", 
      rating: 4.0,
      description: "Conforto e praticidade para sua estadia durante o evento.",
      amenities: [
        { icon: Wifi, label: "Wi-Fi Gratuito" },
        { icon: Dumbbell, label: "Academia" },
        { icon: Briefcase, label: "Business Center" }
      ],
      image: "/hotel-comfort.jpg"
    },
    {
      name: "Hotel Deville Prime São Paulo",
      distance: "4.2 km",
      rating: 4.5,
      description: "Hotel premium com serviços de alta qualidade e comodidades completas.",
      amenities: [
        { icon: Wifi, label: "Wi-Fi Gratuito" },
        { icon: Waves, label: "Piscina" },
        { icon: Utensils, label: "Restaurante" }
      ],
      image: "/hotel-deville.jpg"
    },
    {
      name: "Mercure São Paulo Vila Olimpia",
      distance: "5.8 km",
      rating: 4.3,
      description: "Elegância e sofisticação em um dos bairros mais nobres de São Paulo.",
      amenities: [
        { icon: Wifi, label: "Wi-Fi Gratuito" },
        { icon: Dumbbell, label: "Academia" },
        { icon: Utensils, label: "Room Service" }
      ],
      image: "/hotel-mercure.jpg"
    },
    {
      name: "Holiday Inn Express São Paulo",
      distance: "3.8 km",
      rating: 4.1,
      description: "Praticidade e conforto com ótimo custo-benefício.",
      amenities: [
        { icon: Wifi, label: "Wi-Fi Gratuito" },
        { icon: Coffee, label: "Café da manhã" },
        { icon: Car, label: "Estacionamento" }
      ],
      image: "/hotel-holiday.jpg"
    },
    {
      name: "Novotel São Paulo Center Norte",
      distance: "2.8 km",
      rating: 4.4,
      description: "Hotel internacional com padrão de excelência e localização privilegiada.",
      amenities: [
        { icon: Wifi, label: "Wi-Fi Gratuito" },
        { icon: Waves, label: "Piscina" },
        { icon: Dumbbell, label: "Academia" },
        { icon: Utensils, label: "Restaurante" }
      ],
      image: "/hotel-novotel.jpg"
    }
  ]

  // Previne scroll do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Fecha modal ao pressionar ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100">
          
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-gray-900">
                Hotéis Recomendados
              </h2>
              <p className="text-gray-600 font-lato mt-1">
                Próximos à ABCasa Fair 2025
              </p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
              aria-label="Fechar modal"
            >
              <X className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
            <div className="p-6">
              <p className="text-center text-gray-600 font-lato mb-8 max-w-3xl mx-auto text-lg">
                Selecionamos cuidadosamente os melhores hotéis próximos ao evento para garantir 
                sua comodidade e facilitar seu acesso à ABCasa Fair.
              </p>
              
              {/* Hotels Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {nearbyHotels.map((hotel, index) => (
                  <div 
                    key={index} 
                    className="group bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Hotel Image */}
                    <div className="relative h-48 bg-gradient-to-br from-teal-100 to-blue-100 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-2">
                            <MapPin className="h-8 w-8 text-teal-600" />
                          </div>
                          <p className="text-white font-montserrat font-semibold text-sm bg-black/20 px-3 py-1 rounded-full">
                            {hotel.distance} do evento
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hotel Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-montserrat font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition-colors">
                          {hotel.name}
                        </h3>
                        <div className="flex items-center bg-yellow-50 border border-yellow-200 px-2 py-1 rounded-lg">
                          <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-yellow-700 text-sm font-semibold">{hotel.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 font-lato text-sm mb-4 leading-relaxed">
                        {hotel.description}
                      </p>
                      
                      {/* Amenities */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-montserrat font-semibold text-gray-900 mb-2">
                          Comodidades:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {hotel.amenities.map((amenity, idx) => (
                            <div key={idx} className="flex items-center text-gray-600">
                              <amenity.icon className="h-4 w-4 mr-2 text-teal-600" />
                              <span className="text-sm font-lato">{amenity.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-4 rounded-lg font-montserrat font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                        Ver Disponibilidade
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100">
                <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4 text-center">
                  Dicas Importantes
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-900 mb-2">
                      📅 Reserve com Antecedência
                    </h4>
                    <p className="text-gray-600 font-lato text-sm">
                      Durante a ABCasa Fair, a demanda por hotéis aumenta significativamente. 
                      Recomendamos fazer sua reserva o quanto antes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-900 mb-2">
                      🚗 Transporte Gratuito
                    </h4>
                    <p className="text-gray-600 font-lato text-sm">
                      Alguns hotéis oferecem transporte gratuito para o evento. 
                      Consulte diretamente com o hotel ao fazer sua reserva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelsModal

