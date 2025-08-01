import { X, MapPin, Star, Wifi, Car, Coffee, Dumbbell, Utensils, Waves, Briefcase } from 'lucide-react'
import { useEffect } from 'react'

const HotelsModal = ({ isOpen, onClose }) => {
  const nearbyHotels = [
    {
      name: "Hotel Ibis São Paulo Expo",
      distance: "2.5 km do evento",
      rating: 4.2,
      description: "Hotel moderno com excelente localização próximo ao centro de exposições.",
      amenities: ["Wi-Fi Gratuito", "Café da manhã", "Estacionamento"]
    },
    {
      name: "Comfort Hotel Expo Center Norte",
      distance: "3.1 km do evento", 
      rating: 4.0,
      description: "Conforto e praticidade para sua estadia durante o evento.",
      amenities: ["Wi-Fi Gratuito", "Academia", "Business Center"]
    },
    {
      name: "Hotel Deville Prime São Paulo",
      distance: "4.2 km do evento",
      rating: 4.5,
      description: "Hotel premium com serviços de alta qualidade e comodidades completas.",
      amenities: ["Wi-Fi Gratuito", "Piscina", "Restaurante"]
    },
    {
      name: "Mercure São Paulo Vila Olimpia",
      distance: "5.8 km do evento",
      rating: 4.3,
      description: "Elegância e sofisticação em um dos bairros mais nobres de São Paulo.",
      amenities: ["Wi-Fi Gratuito", "Academia", "Room Service"]
    },
    {
      name: "Holiday Inn Express São Paulo",
      distance: "3.8 km do evento",
      rating: 4.1,
      description: "Praticidade e conforto com ótimo custo-benefício.",
      amenities: ["Wi-Fi Gratuito", "Café da manhã", "Estacionamento"]
    },
    {
      name: "Novotel São Paulo Center Norte",
      distance: "2.8 km do evento",
      rating: 4.4,
      description: "Hotel internacional com padrão de excelência e localização privilegiada.",
      amenities: ["Wi-Fi Gratuito", "Piscina", "Academia", "Restaurante"]
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
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100">
          
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-gray-900">
                Dicas de Hotéis
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
              
              {/* Hotels List */}
              <div className="space-y-6">
                {nearbyHotels.map((hotel, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-montserrat font-bold text-gray-900">
                            {hotel.name}
                          </h3>
                          <div className="flex items-center bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-lg">
                            <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                            <span className="text-yellow-700 text-sm font-semibold">{hotel.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-teal-600 mb-3">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="font-lato font-semibold">{hotel.distance}</span>
                        </div>
                        
                        <p className="text-gray-600 font-lato mb-4 leading-relaxed">
                          {hotel.description}
                        </p>
                        
                        {/* Amenities */}
                        <div>
                          <h4 className="text-sm font-montserrat font-semibold text-gray-900 mb-2">
                            Comodidades:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {hotel.amenities.map((amenity, idx) => (
                              <span 
                                key={idx} 
                                className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-lato border border-teal-200"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
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
                      🚗 Transporte
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

