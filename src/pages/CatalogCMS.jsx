import React, { useState, useEffect } from 'react'
import { Search, Grid, List, MessageCircle, AlertTriangle, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductModal from '../components/ProductModal'
import { products, availableColors } from '../data/products'

const CatalogCMS = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const productsPerPage = 12

  // Aplicar filtros
  useEffect(() => {
    let filtered = products

    // Filtro de busca
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.codigo?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtro por cor
    if (selectedColor) {
      filtered = filtered.filter(product =>
        product.cores?.includes(selectedColor)
      )
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedColor])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleWhatsAppContact = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para produtos do catálogo Toque Ideal.`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511967767364&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Paginação
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Aviso de Catálogo em Construção */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-montserrat font-semibold text-yellow-800 mb-2">
                Catálogo de Apresentação
              </h3>
              <p className="text-yellow-700 font-lato mb-3">
                Este é nosso catálogo de apresentação com produtos selecionados. 
                Todas as peças podem ser personalizadas conforme sua necessidade.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                <div className="flex items-start space-x-2">
                  <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-700">
                    <p className="font-semibold mb-1">Personalização Total:</p>
                    <p>Cores, tamanhos e acabamentos podem ser adaptados para seu projeto. 
                    Clique nos produtos para ver detalhes e solicitar orçamento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Catálogo de Produtos
          </h1>
          <p className="text-xl text-gray-600 font-lato leading-relaxed max-w-3xl mx-auto">
            Descubra nossa linha de artigos decorativos em vidro. Cada peça é única e pode ser 
            personalizada para atender perfeitamente ao seu projeto.
          </p>
        </div>

        {/* Filtros e Busca */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Busca */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar por código ou nome..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            {/* Filtro de Cor */}
            <div className="flex-1 max-w-xs">
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Todas as cores</option>
                {availableColors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
            
            {/* Controles de Visualização */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              
              <Button
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 text-white font-montserrat font-semibold"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                ORÇAMENTO
              </Button>
            </div>
          </div>
        </div>

        {/* Produtos */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}`}>
          {currentProducts.map((product) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer group ${viewMode === 'list' ? 'flex items-center p-4' : 'overflow-hidden'}`}
              onClick={() => handleProductClick(product)}
            >
              {viewMode === 'grid' ? (
                <>
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img
                      src={Object.values(product.imagens)[0]}
                      alt={product.nome}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = '/placeholder-product.jpg'
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-sm font-montserrat font-semibold">
                      {product.codigo}
                    </div>
                    <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      {product.cores.length} cor{product.cores.length > 1 ? 'es' : ''}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {product.nome}
                    </h3>
                    <p className="text-sm text-gray-500 font-lato mb-3 line-clamp-2">
                      {product.descricao}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.cores.slice(0, 3).map((cor, index) => (
                        <span key={cor} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {cor}
                        </span>
                      ))}
                      {product.cores.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{product.cores.length - 3}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-primary font-montserrat font-medium">
                      Clique para ver detalhes
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                    <img
                      src={Object.values(product.imagens)[0]}
                      alt={product.nome}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = '/placeholder-product.jpg'
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="bg-primary text-white px-2 py-1 rounded text-xs font-montserrat font-semibold">
                            {product.codigo}
                          </span>
                          <span className="text-xs text-gray-500">
                            {product.cores.length} cor{product.cores.length > 1 ? 'es' : ''}
                          </span>
                        </div>
                        <h3 className="font-montserrat font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                          {product.nome}
                        </h3>
                        <p className="text-sm text-gray-500 font-lato mb-2">
                          {product.descricao}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {product.cores.slice(0, 2).map((cor) => (
                            <span key={cor} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {cor}
                            </span>
                          ))}
                          {product.cores.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              +{product.cores.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="text-xs text-primary font-montserrat font-medium">
                          Ver detalhes
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg font-montserrat font-medium ${
                    currentPage === i + 1
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Informações Adicionais */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="text-center">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              Precisa de Mais Informações?
            </h2>
            <p className="text-gray-600 font-lato mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você a escolher as peças perfeitas para seu projeto. 
              Entre em contato para mais detalhes sobre disponibilidade, cores e acabamentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 text-white font-montserrat font-semibold"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Solicitar Orçamento
              </Button>
              <Button variant="outline" className="font-montserrat font-semibold">
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal do Produto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default CatalogCMS

