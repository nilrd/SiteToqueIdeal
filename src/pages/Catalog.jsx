import { useState, useEffect } from 'react'
import { useQuote } from '../context/QuoteContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, Plus } from 'lucide-react'
import productsData from '../assets/products.json'

const Catalog = () => {
  const { addItem } = useQuote()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  useEffect(() => {
    setProducts(productsData)
    setFilteredProducts(productsData)
  }, [])

  useEffect(() => {
    let filtered = products

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.dimensions.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtro por categoria (baseado no sufixo do código)
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(product => 
        product.code.endsWith(selectedFilter)
      )
    }

    setFilteredProducts(filtered)
  }, [searchTerm, selectedFilter, products])

  const categories = [
    { value: 'all', label: 'Todos os Produtos' },
    { value: '-32', label: 'Série 32' },
    { value: '-36', label: 'Série 36' },
    { value: '-38', label: 'Série 38' },
    { value: '-42', label: 'Série 42' },
    { value: '-46', label: 'Série 46' },
    { value: '-48', label: 'Série 48' },
    { value: '-52', label: 'Série 52' },
    { value: '-58', label: 'Série 58' },
    { value: '-62', label: 'Série 62' },
    { value: '-66', label: 'Série 66' },
    { value: '-72', label: 'Série 72' },
    { value: '-76', label: 'Série 76' },
    { value: '-78', label: 'Série 78' },
    { value: '-82', label: 'Série 82' },
    { value: '-86', label: 'Série 86' }
  ]

  const handleAddToQuote = (product) => {
    addItem(product)
    // Feedback visual opcional
    console.log('Produto adicionado ao orçamento:', product.code)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Catálogo de Produtos
          </h1>
          <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
            Explore nossa coleção completa de peças em vidro. 
            Use os filtros para encontrar exatamente o que procura.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Buscar por código ou dimensões..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-lato"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 font-lato">
            Mostrando {filteredProducts.length} de {products.length} produtos
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.code}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-teal-500 rounded-full mx-auto mb-2 opacity-60"></div>
                  <p className="text-xs text-gray-600 font-montserrat">{product.code}</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-1">
                  {product.code}
                </h3>
                <p className="text-gray-600 font-lato text-sm mb-3">
                  {product.dimensions}
                </p>
                
                <Button 
                  onClick={() => handleAddToQuote(product)}
                  className="w-full btn-primary font-montserrat font-medium group-hover:scale-105 transition-transform duration-200"
                  size="sm"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar ao orçamento
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-600 font-lato">
              Tente ajustar os filtros ou termo de busca.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Catalog

