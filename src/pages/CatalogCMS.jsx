import React, { useState, useEffect } from 'react'
import { Search, Filter, Grid, List, ShoppingCart, Eye } from 'lucide-react'
import { useSanity } from '../contexts/SanityContext'
import { useQuote } from '../context/QuoteContext'
import SanityImage from '../components/SanityImage'
import productsData from '../assets/products.json'

const CatalogCMS = () => {
  const { products: sanityProducts, loading, error, fetchProducts } = useSanity()
  const { addToQuote } = useQuote()
  
  // Usar produtos do Sanity se disponíveis, senão usar produtos do JSON
  const products = sanityProducts && sanityProducts.length > 0 ? sanityProducts : productsData
  
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
    if (products) {
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
      id: product._id,
      name: product.nome,
      code: product.codigo,
      image: product.fotos?.[0],
      color: product.cor,
      dimensions: product.dimensoes,
      series: product.serie
    })
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedSeries('')
    setSelectedColor('')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando catálogo...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Erro ao carregar o catálogo: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Catálogo de Produtos</h1>
              <p className="mt-2 text-gray-600">
                {filteredProducts.length} produtos encontrados
              </p>
            </div>
            
            {/* Controles de visualização */}
            <div className="mt-4 lg:mt-0 flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                >
                  <List size={20} />
                </button>
              </div>
              
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 flex items-center"
              >
                <Filter size={20} className="mr-2" />
                Filtros
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros */}
          <div className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtros</h3>
              
              {/* Busca */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Nome, código ou dimensões..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filtro por série */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Série
                </label>
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Todas as séries</option>
                  {uniqueSeries.map(series => (
                    <option key={series} value={series}>{series}</option>
                  ))}
                </select>
              </div>

              {/* Filtro por cor */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cor
                </label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Todas as cores</option>
                  {uniqueColors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              {/* Limpar filtros */}
              <button
                onClick={clearFilters}
                className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          </div>

          {/* Lista de produtos */}
          <div className="flex-1">
            {currentProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Nenhum produto encontrado</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700"
                >
                  Ver todos os produtos
                </button>
              </div>
            ) : (
              <>
                {/* Grid de produtos */}
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                    : 'grid-cols-1'
                }`}>
                  {currentProducts.map((product) => (
                    <div
                      key={product._id}
                      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                    >
                      {/* Imagem do produto */}
                      <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}`}>
                        <SanityImage
                          image={product.fotos?.[0]}
                          alt={product.nome}
                          className="w-full h-full object-cover rounded-t-lg"
                          width={300}
                          height={300}
                        />
                      </div>

                      {/* Informações do produto */}
                      <div className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{product.nome}</h3>
                          <p className="text-sm text-gray-600 mb-2">Código: {product.codigo}</p>
                          
                          {product.dimensoes && (
                            <p className="text-sm text-gray-600 mb-2">
                              Dimensões: {product.dimensoes}
                            </p>
                          )}
                          
                          {product.cor && (
                            <p className="text-sm text-gray-600 mb-2">
                              Cor: {product.cor}
                            </p>
                          )}
                          
                          {product.serie && (
                            <p className="text-sm text-teal-600 mb-3">
                              {product.serie}
                            </p>
                          )}

                          {product.descricao && (
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {product.descricao}
                            </p>
                          )}
                        </div>

                        {/* Botões de ação */}
                        <div className={`flex gap-2 ${viewMode === 'list' ? 'mt-auto' : ''}`}>
                          <button
                            onClick={() => handleAddToQuote(product)}
                            className="flex-1 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
                          >
                            <ShoppingCart size={16} className="mr-2" />
                            Adicionar ao Orçamento
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Paginação */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Anterior
                      </button>
                      
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`px-4 py-2 rounded-lg ${
                            currentPage === index + 1
                              ? 'bg-teal-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Próxima
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogCMS

