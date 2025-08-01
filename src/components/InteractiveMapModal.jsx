import { X, MapPin, Navigation, Zap, ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react'
import { useState, useRef, useEffect, useCallback } from 'react'

const InteractiveMapModal = ({ isOpen, onClose }) => {
  const [selectedMap, setSelectedMap] = useState('completo')
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const mapRef = useRef(null)
  const containerRef = useRef(null)

  // Reset zoom e posição quando trocar de mapa
  useEffect(() => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }, [selectedMap])

  // Funções de zoom melhoradas
  const handleZoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev + 0.25, 4))
  }, [])

  const handleZoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev - 0.25, 0.5))
  }, [])

  const resetZoom = useCallback(() => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  // Funções de arrastar melhoradas
  const handleMouseDown = useCallback((e) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      })
      e.preventDefault()
    }
  }, [zoom, position])

  const handleMouseMove = useCallback((e) => {
    if (isDragging && zoom > 1) {
      const newX = e.clientX - dragStart.x
      const newY = e.clientY - dragStart.y
      
      // Limitar o movimento baseado no zoom
      const maxMoveX = (containerRef.current?.offsetWidth || 0) * (zoom - 1) / 2
      const maxMoveY = (containerRef.current?.offsetHeight || 0) * (zoom - 1) / 2
      
      setPosition({
        x: Math.max(-maxMoveX, Math.min(maxMoveX, newX)),
        y: Math.max(-maxMoveY, Math.min(maxMoveY, newY))
      })
    }
  }, [isDragging, dragStart, zoom])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Touch events para dispositivos móveis
  const handleTouchStart = useCallback((e) => {
    if (zoom > 1 && e.touches.length === 1) {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      })
      e.preventDefault()
    }
  }, [zoom, position])

  const handleTouchMove = useCallback((e) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      const newX = e.touches[0].clientX - dragStart.x
      const newY = e.touches[0].clientY - dragStart.y
      
      const maxMoveX = (containerRef.current?.offsetWidth || 0) * (zoom - 1) / 2
      const maxMoveY = (containerRef.current?.offsetHeight || 0) * (zoom - 1) / 2
      
      setPosition({
        x: Math.max(-maxMoveX, Math.min(maxMoveX, newX)),
        y: Math.max(-maxMoveY, Math.min(maxMoveY, newY))
      })
      e.preventDefault()
    }
  }, [isDragging, dragStart, zoom])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  // Zoom com scroll do mouse
  const handleWheel = useCallback((e) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }, [handleZoomIn, handleZoomOut])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
            <h3 className="text-lg sm:text-2xl font-montserrat font-bold">
              Localização do Estande - ABCasa Fair 2025
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
              <div className="bg-red-600 text-white p-2 sm:p-3 rounded-full mr-3 sm:mr-4 animate-pulse">
                <MapPin className="h-4 w-4 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-montserrat font-bold text-gray-900">
                  Estande 1643 - Toque Ideal
                </h4>
                <p className="text-sm sm:text-base text-gray-600 font-lato">
                  Rua 16 • Em frente ao Credenciamento
                </p>
                <p className="text-xs sm:text-sm text-teal-600 font-lato font-semibold">
                  13 a 16 de Agosto de 2025 • Expo Center Norte
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

          {/* Controles do Mapa */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4 sm:mb-6">
            {/* Seletor de Mapa */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={() => setSelectedMap('completo')}
                className={`px-4 py-2 rounded-lg font-montserrat font-semibold transition-all text-sm sm:text-base ${
                  selectedMap === 'completo'
                    ? 'bg-teal-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                📍 Mapa Completo da Feira
              </button>
              <button
                onClick={() => setSelectedMap('detalhado')}
                className={`px-4 py-2 rounded-lg font-montserrat font-semibold transition-all text-sm sm:text-base ${
                  selectedMap === 'detalhado'
                    ? 'bg-teal-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                🔍 Área do Estande (Detalhado)
              </button>
            </div>

            {/* Controles de Zoom */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 0.5}
                className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-110"
                title="Diminuir zoom"
              >
                <ZoomOut className="h-4 w-4 text-gray-600" />
              </button>
              
              <span className="text-sm font-montserrat font-semibold text-gray-700 min-w-[60px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 4}
                className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-110"
                title="Aumentar zoom"
              >
                <ZoomIn className="h-4 w-4 text-gray-600" />
              </button>

              <button
                onClick={resetZoom}
                className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-all hover:scale-110 ml-2"
                title="Resetar zoom"
              >
                <RotateCcw className="h-4 w-4 text-gray-600" />
              </button>
              
              {zoom > 1 && (
                <div className="flex items-center ml-2 text-xs text-gray-500">
                  <Move className="h-3 w-3 mr-1" />
                  <span>Arraste</span>
                </div>
              )}
            </div>
          </div>

          {/* Mapa da Feira */}
          <div 
            ref={containerRef}
            className="relative bg-gray-100 rounded-xl overflow-hidden mb-4 sm:mb-6 border-2 border-gray-200 shadow-inner"
            style={{ height: '70vh', minHeight: '500px' }}
            onWheel={handleWheel}
          >
            <div 
              ref={mapRef}
              className={`relative w-full h-full flex items-center justify-center select-none ${
                zoom > 1 ? 'cursor-grab' : 'cursor-default'
              } ${isDragging ? 'cursor-grabbing' : ''}`}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transformOrigin: 'center center'
              }}
            >
              <img 
                src={selectedMap === 'completo' ? '/mapa-feira-completo.png' : '/mapa-feira-detalhado.png'}
                alt={`Mapa da ABCasa Fair 2025 - ${selectedMap === 'completo' ? 'Visão Completa' : 'Área do Estande'}`}
                className="max-w-full max-h-full object-contain select-none"
                draggable={false}
                style={{ 
                  width: 'auto', 
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
              />
              
              {/* Marcador do Estande - posição corrigida para Rua 16 (canto superior direito) */}
              {selectedMap === 'completo' && (
                <div className="absolute top-[15%] right-[8%] transform translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Pulso animado maior */}
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75 w-8 h-8 -m-1"></div>
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-50 w-8 h-8 -m-1"></div>
                    
                    {/* Marcador principal maior */}
                    <div className="relative bg-red-600 text-white p-2 rounded-full shadow-lg border-4 border-white w-6 h-6 flex items-center justify-center z-10">
                      <MapPin className="h-4 w-4" />
                    </div>
                    
                    {/* Label do estande */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-montserrat font-bold whitespace-nowrap shadow-xl border-2 border-white">
                      🎯 Estande 1643 - Rua 16
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-red-600"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Marcador para o mapa detalhado */}
              {selectedMap === 'detalhado' && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75 w-8 h-8 -m-1"></div>
                    <div className="relative bg-red-600 text-white p-2 rounded-full shadow-lg border-4 border-white w-6 h-6 flex items-center justify-center z-10">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-montserrat font-bold whitespace-nowrap shadow-xl border-2 border-white">
                      🎯 Você está aqui!
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-red-600"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Instruções de uso */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded-lg text-xs">
              💡 Use scroll do mouse ou botões para zoom • Arraste para navegar
            </div>
          </div>

          {/* Instruções de Como Chegar */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
            <h5 className="text-base sm:text-lg font-montserrat font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Navigation className="h-5 w-5 mr-2 text-teal-600" />
              Como Chegar ao Nosso Estande
            </h5>
            <div className="space-y-3 sm:space-y-4 text-gray-700 font-lato text-sm sm:text-base">
              <div className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                <p>A estação de metrô mais próxima do Expo Center Norte é a <strong>Portuguesa-Tietê (Linha 1-Azul)</strong></p>
              </div>
              <div className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                <p>Para chegar ao Expo Center Norte a partir da estação, você pode <strong>caminhar cerca de 850 metros</strong></p>
              </div>
              <div className="flex items-start">
                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                <p>Ou pegar um ônibus na <strong>Avenida Cruzeiro do Sul, 1701</strong>, que te deixará em frente ao local na <strong>Rua José Bernardo Pinto, 333</strong></p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                <p>Nosso <strong>estande 1643</strong> fica na <strong>Rua 16</strong>, em frente ao credenciamento - fácil de encontrar! 🎯</p>
              </div>
            </div>
            
            {/* Informação adicional */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-teal-50 border border-teal-200 rounded-lg">
              <div className="flex items-start">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-teal-800">
                  <p className="font-semibold mb-1">💡 Dicas importantes:</p>
                  <p>• Use zoom até 400% para ver detalhes • Arraste o mapa para navegar • Chegue cedo para aproveitar melhor • O evento acontece de <strong>13 a 16 de Agosto de 2025</strong> • Estacionamento disponível no local</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InteractiveMapModal

