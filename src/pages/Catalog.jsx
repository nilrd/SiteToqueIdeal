import { useState, useEffect, useRef } from 'react'
import { useQuote } from '../context/QuoteContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, Plus, ChevronLeft, ChevronRight } from 'lucide-react'
import productsData from '../assets/products.json'

const Catalog = () => {
  const { addItem } = useQuote()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const productsPerPage = 24 // Reduzido para melhor performance

  useEffect(() => {
    setProducts(productsData)
    setFilteredProducts(productsData)
  }, [])

  useEffect(() => {
    setLoading(true)
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
    setCurrentPage(1) // Reset para primeira página ao filtrar
    setLoading(false)
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
    { value: '-56', label: 'Série 56' },
    { value: '-68', label: 'Série 68' },
    { value: '-72', label: 'Série 72' },
    { value: '-76', label: 'Série 76' },
    { value: '-78', label: 'Série 78' },
    { value: '-82', label: 'Série 82' },
    { value: '-86', label: 'Série 86' }
  ]

  // Cálculos de paginação
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const handleAddToQuote = (product, event) => {
    addItem(product)
    
    // Feedback visual melhorado
    const button = event.target.closest('button')
    const originalText = button.textContent
    const originalClasses = button.className
    
    button.textContent = '✓ Adicionado!'
    button.className = button.className.replace('btn-primary', 'bg-green-600 hover:bg-green-700')
    
    setTimeout(() => {
      button.textContent = originalText
      button.className = originalClasses
    }, 2000)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll suave para o topo da seção de produtos
    document.getElementById('products-grid')?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }

   // Componente otimizado para carregamento lazy de imagens
  const LazyImage = ({ src, alt, code }) => {
    const [imageSrc, setImageSrc] = useState(null)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const imgRef = useRef()

    // Intersection Observer para lazy loading
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        },
        { 
          threshold: 0.1,
          rootMargin: '50px' // Carrega 50px antes de entrar na viewport
        }
      )

      if (imgRef.current) {
        observer.observe(imgRef.current)
      }

      return () => observer.disconnect()
    }, [])

    // Carrega a imagem apenas quando está na viewport
    useEffect(() => {
      if (!isInView) return

      const img = new Image()
      
      img.onload = () => {
        setImageSrc(src)
        setImageLoaded(true)
        setImageError(false)
      }
      
      img.onerror = () => {
        // Fallback para uma imagem padrão
        setImageSrc('/fotosinstagram/fotosinstagram/post_insta (2).jpg')
        setImageLoaded(true)
        setImageError(true)
      }
      
      img.src = src
    }, [src, isInView])

    return (
      <div ref={imgRef} className="relative w-full h-48 bg-gray-100 overflow-hidden">
        {imageSrc ? (
          <img 
            src={imageSrc}
            alt={alt}
            className={`w-full h-full object-contain transition-all duration-300 hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-50'
            }`}
            loading="lazy"
            decoding="async"
            style={{ 
              imageRendering: 'auto',
              transform: 'translateZ(0)' // Hardware acceleration
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="animate-pulse bg-gray-200 w-full h-full flex items-center justify-center">
              <span className="text-gray-400 text-sm font-lato">{code}</span>
            </div>
          </div>
        )}
        
        {isInView && !imageLoaded && imageSrc && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-teal-600"></div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Catálogo de Produtos
          </h1>
          <p className="text-xl text-gray-600 font-lato leading-relaxed">
            Explore nossa coleção completa de peças em vidro. Use os filtros para encontrar exatamente o que procura.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por código ou dimensões..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-lato"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-lato"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 font-lato">
            Mostrando {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} de {filteredProducts.length} produtos
            {searchTerm && (
              <span className="ml-2 text-primary font-medium">
                para "{searchTerm}"
              </span>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div id="products-grid">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {currentProducts.map((product) => (
                  <div 
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Product Image */}
                    <div className="relative h-48 bg-gray-100">
                      <LazyImage 
                        src={product.image} 
                        alt={product.code}
                        code={product.code}
                      />
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
                        onClick={(e) => handleAddToQuote(product, e)}
                        className="w-full btn-primary font-montserrat font-medium text-sm group-hover:scale-105 transition-transform duration-200"
                        size="sm"
                      >
                        <Plus className="mr-1 h-3 w-3" />
                        Adicionar ao orçamento
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="font-montserrat"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {/* Page Numbers */}
                  <div className="flex space-x-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 5) {
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }

                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(pageNum)}
                          className={`font-montserrat ${
                            currentPage === pageNum ? "btn-primary" : ""
                          }`}
                        >
                          {pageNum}
                        </Button>
                      )
                    })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="font-montserrat"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

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
                    Tente ajustar os filtros ou termo de busca
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-montserrat font-bold mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Entre em contato conosco para produtos personalizados ou mais informações
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-montserrat font-semibold"
          >
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Catalog

