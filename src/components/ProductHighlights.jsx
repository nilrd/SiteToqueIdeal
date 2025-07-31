import { Link } from 'react-router-dom'
import { useQuote } from '../context/QuoteContext'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const ProductHighlights = () => {
  const { addItem } = useQuote()

  // Produtos em destaque com imagens reais
  const highlightedProducts = [
    {
      id: '2680-32',
      code: '2680-32',
      dimensions: '25x25cm',
      color: 'Turquesa',
      image: '/fotos1/fotos1/2680 TURQUESA.jpg'
    },
    {
      id: '1300-32',
      code: '1300-32', 
      dimensions: '30x30cm',
      color: 'Bronze',
      image: '/fotos1/fotos1/1300 BRONZE COM AMBAR.jpg'
    },
    {
      id: '1704-32',
      code: '1704-32',
      dimensions: '40x22cm',
      color: 'Verde',
      image: '/fotos1/fotos1/1704- VERDE.jpg'
    },
    {
      id: '215-32',
      code: '215-32',
      dimensions: '35x35cm',
      color: 'Branco',
      image: '/fotos1/fotos1/215 BRANCO.jpg'
    }
  ]

  const handleAddToQuote = (product) => {
    addItem(product)
    // Feedback visual melhorado
    const button = event.target.closest('button')
    const originalText = button.textContent
    button.textContent = '✓ Adicionado!'
    button.classList.add('bg-green-600')
    
    setTimeout(() => {
      button.textContent = originalText
      button.classList.remove('bg-green-600')
    }, 2000)
    
    console.log('Produto adicionado ao orçamento:', product.code)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Destaques
          </h2>
          <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
            Conheça alguns dos nossos produtos mais procurados, 
            criados com a qualidade e design únicos da Toque Ideal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightedProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.code}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = '/fotosinstagram/fotosinstagram/post_insta (2).jpg'
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                  {product.code}
                </h3>
                <p className="text-gray-600 font-lato mb-4">
                  {product.dimensions}
                </p>
                
                <Button 
                  onClick={(e) => handleAddToQuote(product, e)}
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

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link to="/catalogo">
            <Button 
              variant="outline" 
              size="lg"
              className="font-montserrat font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Ver todos os produtos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductHighlights

