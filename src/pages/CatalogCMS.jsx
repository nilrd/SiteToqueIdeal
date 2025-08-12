import React, { useState } from 'react'
import { getAllProducts, getPrimaryColor } from '../data/newProducts'
import NewProductModal from '../components/NewProductModal'
import { Search } from 'lucide-react'

const CatalogCMS = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedColor, setSelectedColor] = useState('all')
  
  const allProducts = getAllProducts()

  // Filtrar produtos baseado na busca e cor
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.dimensions.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesColor = selectedColor === 'all' || 
                        product.colors.some(color => 
                          color.name.toLowerCase().includes(selectedColor.toLowerCase())
                        )
    
    return matchesSearch && matchesColor
  })

  // Obter todas as cores únicas para o filtro
  const allColors = [...new Set(allProducts.flatMap(product => 
    product.colors.map(color => color.name)
  ))].sort()

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cabeçalho do Catálogo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Catálogo de Produtos
          </h1>
          
          {/* Aviso de Construção */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-800">Catálogo em Construção</h2>
            </div>
            <div className="text-blue-700 space-y-2">
              <p className="font-medium">
                🚧 Este catálogo está atualmente em desenvolvimento e as imagens apresentadas são meramente ilustrativas.
              </p>
              <p>
                📱 Para consultar nosso catálogo completo e atualizado, entre em contato conosco via WhatsApp.
              </p>
              <p>
                🎨 Todas as peças podem ser personalizadas em diferentes cores e tamanhos conforme sua necessidade.
              </p>
            </div>
          </div>
        </div>

        {/* Filtros e Busca */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por código, nome ou dimensões..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214567] focus:border-transparent"
              />
            </div>

            {/* Filtro por Cor */}
            <div>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214567] focus:border-transparent"
              >
                <option value="all">Todas as Cores</option>
                {allColors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Contador de Produtos */}
        <div className="mb-6">
          <p className="text-gray-600">
            Exibindo {filteredProducts.length} de {allProducts.length} produtos
          </p>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {filteredProducts.map((product) => {
            const primaryColor = getPrimaryColor(product)
            
            return (
              <div
                key={product.code}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => handleProductClick(product)}
              >
                {/* Imagem do Produto */}
                <div className="aspect-square bg-gray-50 rounded-t-lg overflow-hidden">
                  <img
                    src={primaryColor.image}
                    alt={`${product.name} - ${primaryColor.name}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Informações do Produto */}
                <div className="p-4">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-[#214567] mb-1">
                      {product.code}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.dimensions}
                    </p>
                    
                    {/* Indicador de Cores */}
                    <div className="flex justify-center gap-1 mb-3">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full border border-gray-300"
                          style={{
                            backgroundColor: color.name === 'BRANCO' ? '#f8f9fa' :
                                           color.name === 'PRETO' ? '#1a1a1a' :
                                           color.name === 'VERMELHO' ? '#dc2626' :
                                           color.name === 'VERDE' ? '#16a34a' :
                                           color.name === 'MEL' ? '#f59e0b' :
                                           color.name === 'TURQUESA' ? '#06b6d4' :
                                           color.name === 'BRONZE' ? '#a16207' :
                                           color.name === 'GRAFITE' ? '#4b5563' :
                                           color.name === 'PRATA' ? '#9ca3af' :
                                           '#6b7280'
                          }}
                          title={color.name}
                        />
                      ))}
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      {product.colors.length} cor{product.colors.length > 1 ? 'es' : ''} disponível{product.colors.length > 1 ? 'eis' : ''}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mensagem quando não há produtos */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar os filtros ou termos de busca
            </p>
          </div>
        )}

        {/* Informações Adicionais */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Informações Importantes
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Personalização</h4>
              <ul className="space-y-1">
                <li>• Todas as peças podem ser personalizadas</li>
                <li>• Cores disponíveis conforme estoque</li>
                <li>• Tamanhos especiais sob consulta</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Orçamento</h4>
              <ul className="space-y-1">
                <li>• Clique no produto para ver detalhes</li>
                <li>• Solicite orçamento via WhatsApp</li>
                <li>• Atendimento personalizado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal do Produto */}
      <NewProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}

export default CatalogCMS

