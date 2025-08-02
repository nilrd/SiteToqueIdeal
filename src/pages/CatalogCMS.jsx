import React, { useState, useEffect } from 'react'
import { Search, Filter, Grid, List, ShoppingCart, Eye } from 'lucide-react'
import { useSanity } from '../contexts/SanityContext'
import { useQuote } from '../context/QuoteContext'

const CatalogCMS = () => {
  const { products, loading, error, sanityAvailable } = useSanity()
  const { addToQuote } = useQuote()
  
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSeries, setSelectedSeries] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  const productsPerPage = 12

  // Atualizar produtos filtrados quando os dados mudarem
  useEffect(() => {
    if (products && products.length > 0) {
      setFilteredProducts(products)
    }
  }, [products])

  // Aplicar filtros
  useEffect(() => {
    let filtered = products || []

    // Filtro de busca
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.codigo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.dimensoes?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtro por série
    if (selectedSeries) {
      filtered = filtered.filter(product =>
        product.serie?.toLowerCase().includes(selectedSeries.toLowerCase())
      )
    }

    // Filtro por cor
    if (selectedColor) {
      filtered = filtered.filter(product =>
        product.cor?.toLowerCase().includes(selectedColor.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [products, searchTerm, selectedSeries, selectedColor])

  // Obter séries únicas
  const uniqueSeries = [...new Set(products?.map(p => p.serie).filter(Boolean))]
  
  // Obter cores únicas
  const uniqueColors = [...new Set(products?.map(p => p.cor).filter(Boolean))]

  // Paginação
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handleAddToQuote = (product) => {
    addToQuote({
      id: product.codigo || product.id,
      name: product.nome || product.name,
      code: product.codigo || product.code,
      dimensions: product.dimensoes || product.dimensions,
      series: product.serie || product.series,
      image: product.fotos?.[0] || product.image
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando catálogo...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Catálogo de Produtos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa coleção completa de peças em vidro. Use os filtros para encontrar exatamente o que procura.
          </p>
          {!sanityAvailable && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm">
                📦 Exibindo catálogo local. O CMS será integrado em breve para atualizações em tempo real.
              </p>
            </div>
          )}
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Busca */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar por código ou dimensões..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filtro por Série */}
            <div className="lg:w-48">
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Todas as Séries</option>
                {uniqueSeries.map(serie => (
                  <option key={serie} value={serie}>{serie}</option>
                ))}
              </select>
            </div>

            {/* Filtro por Cor */}
            {uniqueColors.length > 0 && (
              <div className="lg:w-48">
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Todas as Cores</option>
                  {uniqueColors.map(cor => (
                    <option key={cor} value={cor}>{cor}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Modo de visualização */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-teal-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-teal-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} de {filteredProducts.length} produtos
          </p>
        </div>

        {/* Grid de produtos */}
        {currentProducts.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
            : "space-y-4 mb-8"
          }>
            {currentProducts.map((product) => (
              <div key={product.codigo || product.id} className={viewMode === 'grid' 
                ? "bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                : "bg-white rounded-lg shadow-sm p-4 flex items-center space-x-4"
              }>
                {/* Imagem do produto */}
                <div className={viewMode === 'grid' ? "aspect-square bg-gray-100" : "w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0"}>
                  {product.fotos?.[0] || product.image ? (
                    <img
                      src={product.fotos?.[0] || product.image}
                      alt={product.nome || product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Eye className="h-8 w-8" />
                    </div>
                  )}
                </div>

                {/* Informações do produto */}
                <div className={viewMode === 'grid' ? "p-4" : "flex-1"}>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {product.codigo || product.code}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {product.dimensoes || product.dimensions}
                  </p>
                  {(product.serie || product.series) && (
                    <p className="text-xs text-gray-500 mb-3">
                      {product.serie || product.series}
                    </p>
                  )}
                  
                  <button
                    onClick={() => handleAddToQuote(product)}
                    className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Adicionar ao orçamento</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-600">Tente ajustar os filtros de busca</p>
          </div>
        )}

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        {/* Call to action */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Não encontrou o que procura?</h2>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco para produtos personalizados ou mais informações
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default CatalogCMS

