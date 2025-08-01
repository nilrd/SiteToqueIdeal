import { X, MapPin, Navigation } from 'lucide-react'

const MapModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="flex items-center">
            <MapPin className="h-6 w-6 mr-3" />
            <h3 className="text-2xl font-montserrat font-bold">
              Localização do Estande
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-20"
            aria-label="Fechar modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {/* Informações do Estande */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 mb-6 border border-teal-200">
            <div className="flex items-center mb-4">
              <div className="bg-teal-600 text-white p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-montserrat font-bold text-gray-900">
                  Estande 1643 - Toque Ideal
                </h4>
                <p className="text-gray-600 font-lato">
                  Rua 16 • Em frente ao Credenciamento
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-700">
                <Navigation className="h-4 w-4 mr-2 text-teal-600" />
                <span className="font-lato">Localização estratégica de fácil acesso</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="h-4 w-4 mr-2 text-teal-600" />
                <span className="font-lato">Próximo à entrada principal</span>
              </div>
            </div>
          </div>

          {/* Mapa da Feira */}
          <div className="relative bg-gray-100 rounded-xl overflow-hidden">
            <img 
              src="/mapa-feira-novo.png" 
              alt="ABCasa Fair 2025 - 13 a 16 de Agosto"
              className="w-full h-auto"
            />
            
            {/* Marcador do Estande */}
            <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Pulso animado */}
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-50"></div>
                
                {/* Marcador principal */}
                <div className="relative bg-red-600 text-white p-3 rounded-full shadow-lg border-4 border-white">
                  <MapPin className="h-6 w-6" />
                </div>
                
                {/* Label do estande */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-montserrat font-semibold whitespace-nowrap shadow-lg">
                  Estande 1643 - Rua 16
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-red-600"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Instruções */}
          <div className="mt-6 bg-gray-50 rounded-xl p-6">
            <h5 className="text-lg font-montserrat font-semibold text-gray-900 mb-3">
              Como Chegar ao Nosso Estande
            </h5>
            <div className="space-y-2 text-gray-700 font-lato">
              <p className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                A estação de metrô mais próxima do Expo Center Norte é a Portuguesa-Tietê (Linha 1-Azul)
              </p>
              <p className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                Para chegar ao Expo Center Norte a partir da estação, você pode caminhar cerca de 850 metros
              </p>
              <p className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                Ou pegar um ônibus na Avenida Cruzeiro do Sul, 1701, que te deixará em frente ao local
              </p>
              <p className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                Nosso estande 1643 fica na Rua 16, em frente ao credenciamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapModal

