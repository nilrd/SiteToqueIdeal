import { X, MapPin, Navigation, Zap } from 'lucide-react'
import { useState } from 'react'

const MapModal = ({ isOpen, onClose }) => {
  const [selectedMap, setSelectedMap] = useState('completo')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
            <h3 className="text-lg sm:text-2xl font-montserrat font-bold">
              Localização do Estande
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-20"
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-80px)]">
          {/* Informações do Estande */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-teal-200">
            <div className="flex items-center mb-4">
              <div className="bg-teal-600 text-white p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <MapPin className="h-4 w-4 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-montserrat font-bold text-gray-900">
                  Estande 1643 - Toque Ideal
                </h4>
                <p className="text-sm sm:text-base text-gray-600 font-lato">
                  Rua 16 • Em frente ao Credenciamento
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center text-gray-700">
                <Navigation className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-teal-600 flex-shrink-0" />
                <span className="font-lato">Localização estratégica de fácil acesso</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-teal-600 flex-shrink-0" />
                <span className="font-lato">Próximo à entrada principal</span>
              </div>
            </div>
          </div>

          {/* Seletor de Mapa */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-6">
            <button
              onClick={() => setSelectedMap('completo')}
              className={`px-4 py-2 rounded-lg font-montserrat font-semibold transition-all text-sm sm:text-base ${
                selectedMap === 'completo'
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Mapa Completo da Feira
            </button>
            <button
              onClick={() => setSelectedMap('detalhado')}
              className={`px-4 py-2 rounded-lg font-montserrat font-semibold transition-all text-sm sm:text-base ${
                selectedMap === 'detalhado'
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Área do Estande (Detalhado)
            </button>
          </div>

          {/* Mapa da Feira */}
          <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4 sm:mb-6">
            <div className="relative">
              <img 
                src={selectedMap === 'completo' ? '/mapa-feira-completo.png' : '/mapa-feira-detalhado.png'}
                alt={`Mapa da ABCasa Fair 2025 - ${selectedMap === 'completo' ? 'Visão Completa' : 'Área do Estande'}`}
                className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain"
                style={{ minHeight: '300px' }}
              />
              
              {/* Marcador do Estande - apenas no mapa completo */}
              {selectedMap === 'completo' && (
                <div className="absolute top-[42%] left-[15%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Pulso animado */}
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75 w-4 h-4 sm:w-6 sm:h-6"></div>
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-50 w-4 h-4 sm:w-6 sm:h-6"></div>
                    
                    {/* Marcador principal */}
                    <div className="relative bg-red-600 text-white p-1 sm:p-2 rounded-full shadow-lg border-2 sm:border-4 border-white w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center">
                      <MapPin className="h-2 w-2 sm:h-3 sm:w-3" />
                    </div>
                    
                    {/* Label do estande */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 sm:mt-2 bg-red-600 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-montserrat font-semibold whitespace-nowrap shadow-lg">
                      Estande 1643
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 sm:border-l-4 sm:border-r-4 sm:border-b-4 border-transparent border-b-red-600"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Instruções de Como Chegar */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
            <h5 className="text-base sm:text-lg font-montserrat font-semibold text-gray-900 mb-3 sm:mb-4">
              Como Chegar ao Nosso Estande
            </h5>
            <div className="space-y-3 sm:space-y-4 text-gray-700 font-lato text-sm sm:text-base">
              <div className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                <p>A estação de metrô mais próxima do Expo Center Norte é a <strong>Portuguesa-Tietê (Linha 1-Azul)</strong></p>
              </div>
              <div className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                <p>Para chegar ao Expo Center Norte a partir da estação, você pode <strong>caminhar cerca de 850 metros</strong></p>
              </div>
              <div className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                <p>Ou pegar um ônibus na <strong>Avenida Cruzeiro do Sul, 1701</strong>, que te deixará em frente ao local na <strong>Rua José Bernardo Pinto, 333</strong></p>
              </div>
              <div className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                <p>Nosso <strong>estande 1643</strong> fica na <strong>Rua 16</strong>, em frente ao credenciamento - fácil de encontrar!</p>
              </div>
            </div>
            
            {/* Informação adicional */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-teal-50 border border-teal-200 rounded-lg">
              <div className="flex items-start">
                <Navigation className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-teal-800">
                  <p className="font-semibold mb-1">Dica importante:</p>
                  <p>Chegue cedo para aproveitar melhor a feira e evitar multidões. O evento acontece de <strong>13 a 16 de Agosto de 2025</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapModal

