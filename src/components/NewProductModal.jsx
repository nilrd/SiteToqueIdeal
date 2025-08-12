import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const NewProductModal = ({ product, isOpen, onClose }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)

  if (!isOpen || !product) return null

  const currentColor = product.colors[selectedColorIndex]

  const handlePrevColor = () => {
    setSelectedColorIndex((prev) => 
      prev === 0 ? product.colors.length - 1 : prev - 1
    )
  }

  const handleNextColor = () => {
    setSelectedColorIndex((prev) => 
      prev === product.colors.length - 1 ? 0 : prev + 1
    )
  }

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para o produto ${product.code} - ${product.name} na cor ${currentColor.name}.`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511967767364&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            {product.code} - {product.name}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Galeria de Imagens */}
            <div className="space-y-4">
              {/* Imagem Principal */}
              <div className="relative bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={currentColor.image}
                  alt={`${product.name} - ${currentColor.name}`}
                  className="w-full h-96 object-contain"
                />
                
                {/* Navegação de cores (se houver mais de uma cor) */}
                {product.colors.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevColor}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextColor}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Miniaturas das Cores */}
              {product.colors.length > 1 && (
                <div className="flex gap-2 justify-center">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColorIndex(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === selectedColorIndex 
                          ? 'border-[#214567] shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Indicador de Cor Atual */}
              <div className="text-center">
                <span className="inline-block bg-[#214567] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Cor: {currentColor.name}
                </span>
              </div>
            </div>

            {/* Informações do Produto */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Código</h3>
                <p className="text-2xl font-bold text-[#214567]">{product.code}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Descrição</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Dimensões</h3>
                <p className="text-gray-600">{product.dimensions}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Categoria</h3>
                <p className="text-gray-600">{product.category}</p>
              </div>

              {/* Cores Disponíveis */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Cores Disponíveis ({product.colors.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        index === selectedColorIndex
                          ? 'bg-[#214567] text-white border-[#214567]'
                          : 'bg-gray-100 text-gray-700 border-gray-200'
                      }`}
                    >
                      {color.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tamanhos */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Tamanhos</h3>
                <div className="flex gap-2">
                  {['Pequeno', 'Médio', 'Grande'].map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Observações */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-[#214567] mb-2">Observações Importantes</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cores podem variar conforme disponibilidade</li>
                  <li>• Tamanhos personalizados sob consulta</li>
                  <li>• Entre em contato para mais informações</li>
                </ul>
              </div>

              {/* Botão de Orçamento */}
              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#214567] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a3a5c] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                </svg>
                Solicitar Orçamento via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProductModal

