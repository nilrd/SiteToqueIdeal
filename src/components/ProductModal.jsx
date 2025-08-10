import React, { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProductModal = ({ product, isOpen, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(product?.cores?.[0] || '')
  const [selectedSize, setSelectedSize] = useState('Médio')

  if (!isOpen || !product) return null

  const handleWhatsAppContact = () => {
    const message = `Olá! Gostaria de mais informações sobre o produto ${product.codigo} - ${product.nome} na cor ${selectedColor} e tamanho ${selectedSize}.`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511967767364&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-montserrat font-bold text-gray-900">
            {product.codigo} - {product.nome}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Imagem do Produto */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.imagens?.[selectedColor] || Object.values(product.imagens || {})[0]}
                  alt={`${product.nome} - ${selectedColor}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = '/placeholder-product.jpg'
                  }}
                />
              </div>
              
              {/* Miniaturas das cores */}
              {product.cores && product.cores.length > 1 && (
                <div className="flex space-x-2">
                  {product.cores.map((cor) => (
                    <button
                      key={cor}
                      onClick={() => setSelectedColor(cor)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedColor === cor ? 'border-primary ring-2 ring-primary ring-opacity-50' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={product.imagens?.[cor]}
                        alt={cor}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/placeholder-product.jpg'
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Detalhes do Produto */}
            <div className="space-y-6">
              {/* Código */}
              <div>
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                  Código: {product.codigo}
                </span>
              </div>

              {/* Descrição */}
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2">
                  Descrição
                </h3>
                <p className="text-gray-600 font-lato leading-relaxed">
                  {product.descricao}
                </p>
              </div>

              {/* Seleção de Cor */}
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-3">
                  Cores Disponíveis
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.cores?.map((cor) => (
                    <button
                      key={cor}
                      onClick={() => setSelectedColor(cor)}
                      className={`p-3 text-left rounded-lg border transition-all ${
                        selectedColor === cor
                          ? 'border-primary bg-primary bg-opacity-10 text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-montserrat font-medium text-sm">
                        {cor}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Seleção de Tamanho */}
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-3">
                  Tamanhos Disponíveis
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {product.tamanhos?.map((tamanho) => (
                    <button
                      key={tamanho}
                      onClick={() => setSelectedSize(tamanho)}
                      className={`p-3 text-center rounded-lg border transition-all ${
                        selectedSize === tamanho
                          ? 'border-primary bg-primary bg-opacity-10 text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-montserrat font-medium text-sm">
                        {tamanho}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Informações Importantes */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-montserrat font-semibold text-blue-900 mb-2">
                  Informações Importantes
                </h4>
                <ul className="text-sm text-blue-800 font-lato space-y-1">
                  <li>• Todas as peças são feitas sob medida</li>
                  <li>• Cores podem variar conforme a iluminação</li>
                  <li>• Prazo de entrega: consulte nossa equipe</li>
                  <li>• Garantia de qualidade em todos os produtos</li>
                </ul>
              </div>

              {/* Botão de Contato */}
              <div className="pt-4">
                <Button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-montserrat font-semibold py-3 text-lg"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Orçamento via WhatsApp
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Nossa equipe responderá em breve com todas as informações
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal

