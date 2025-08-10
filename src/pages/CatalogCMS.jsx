import React, { useState, useEffect } from 'react'
import { Search, Filter, Grid, List, ShoppingCart, Eye, AlertTriangle, Info } from 'lucide-react'
import { useSanity } from '../contexts/SanityContext'
import { useQuote } from '../context/QuoteContext'
import { Button } from '@/components/ui/button'

const CatalogCMS = () => {
  const { products, loading, error, sanityAvailable } = useSanity()
  const { addToQuote } = useQuote()
  
  // Produtos temporários para demonstração
  const tempProducts = [
    {
      id: 'TI-001',
      codigo: 'TI-001',
      nome: 'Peça Decorativa Circular',
      dimensoes: '25cm x 25cm',
      imagem: '/image.png',
      descricao: 'Peça decorativa em vidro com acabamento especial'
    },
    {
      id: 'TI-002', 
      codigo: 'TI-002',
      nome: 'Elemento Decorativo Retangular',
      dimensoes: '30cm x 20cm',
      imagem: '/image.png',
      descricao: 'Elemento decorativo versátil para diversos ambientes'
    },
    {
      id: 'TI-003',
      codigo: 'TI-003', 
      nome: 'Peça Artística Quadrada',
      dimensoes: '20cm x 20cm',
      imagem: '/image.png',
      descricao: 'Peça artística com design moderno e elegante'
    },
    {
      id: 'TI-004',
      codigo: 'TI-004',
      nome: 'Elemento Oval Decorativo', 
      dimensoes: '35cm x 25cm',
      imagem: '/image.png',
      descricao: 'Elemento oval para composições sofisticadas'
    },
    {
      id: 'TI-005',
      codigo: 'TI-005',
      nome: 'Peça Triangular Moderna',
      dimensoes: '28cm x 28cm',
      imagem: '/image.png',
      descricao: 'Design triangular contemporâneo para ambientes modernos'
    },
    {
      id: 'TI-006',
      codigo: 'TI-006',
      nome: 'Elemento Hexagonal',
      dimensoes: '22cm x 22cm', 
      imagem: '/image.png',
      descricao: 'Forma hexagonal única para projetos especiais'
    }
  ]
  
  const [filteredProducts, setFilteredProducts] = useState(tempProducts)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  
  const productsPerPage = 12

  // Aplicar filtros
  useEffect(() => {
    let filtered = tempProducts

    // Filtro de busca
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.codigo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.dimensoes?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [searchTerm])

  const handleAddToQuote = (product) => {
    addToQuote({
      id: product.id,
      codigo: product.codigo,
      nome: product.nome,
      dimensoes: product.dimensoes,
      imagem: product.imagem,
      observacoes: 'Cores e acabamentos a definir no orçamento'
    })
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
                Catálogo em Construção
              </h3>
              <p className="text-yellow-700 font-lato mb-3">
                Nosso catálogo está sendo atualizado com novos produtos e informações detalhadas. 
                As imagens apresentadas são meramente ilustrativas.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                <div className="flex items-start space-x-2">
                  <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-700">
                    <p className="font-semibold mb-1">Personalização Disponível:</p>
                    <p>Todas as peças podem ter cores e acabamentos personalizados conforme sua necessidade. 
                    Informe suas preferências no momento do orçamento.</p>
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
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar por código, nome ou dimensões..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
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
            </div>
          </div>
        </div>

        {/* Produtos */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}`}>
          {currentProducts.map((product) => (
            <div key={product.id} className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${viewMode === 'list' ? 'flex items-center p-4' : 'overflow-hidden'}`}>
              {viewMode === 'grid' ? (
                <>
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img
                      src={product.imagem}
                      alt={product.nome}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/placeholder-product.jpg'
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-sm font-montserrat font-semibold">
                      {product.codigo}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-gray-900 mb-2">
                      {product.nome}
                    </h3>
                    <p className="text-sm text-gray-600 font-lato mb-2">
                      {product.dimensoes}
                    </p>
                    <p className="text-sm text-gray-500 font-lato mb-4">
                      {product.descricao}
                    </p>
                    <div className="space-y-2">
                      <Button
                        onClick={() => handleAddToQuote(product)}
                        className="w-full btn-primary font-montserrat font-semibold"
                        size="sm"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Adicionar ao Orçamento
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        Cores personalizáveis
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                    <img
                      src={product.imagem}
                      alt={product.nome}
                      className="w-full h-full object-cover"
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
                        </div>
                        <h3 className="font-montserrat font-semibold text-gray-900 mb-1">
                          {product.nome}
                        </h3>
                        <p className="text-sm text-gray-600 font-lato mb-1">
                          {product.dimensoes}
                        </p>
                        <p className="text-sm text-gray-500 font-lato">
                          {product.descricao}
                        </p>
                      </div>
                      <div className="ml-4">
                        <Button
                          onClick={() => handleAddToQuote(product)}
                          className="btn-primary font-montserrat font-semibold"
                          size="sm"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Adicionar
                        </Button>
                        <p className="text-xs text-gray-500 text-center mt-1">
                          Cores personalizáveis
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
              <Button className="btn-primary font-montserrat font-semibold">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ver Orçamento
              </Button>
              <Button variant="outline" className="font-montserrat font-semibold">
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogCMS

