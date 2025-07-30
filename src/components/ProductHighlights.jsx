import { Link } from 'react-router-dom'
import { useQuote } from '../context/QuoteContext'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const ProductHighlights = () => {
  const { addItem } = useQuote()

  // Produtos em destaque baseados no mockup
  const highlightedProducts = [
    {
      id: '2680-32',
      code: '2680-32',
      dimensions: '25x25cm',
      color: 'Turquesa'
    },
    {
      id: '2862-41',
      code: '2862-41', 
      dimensions: '7 cm x 41 cm',
      color: 'Bronze'
    },
    {
      id: '2686-22',
      code: '2686-22',
      dimensions: '32 cm 22 cm',
      color: 'Verde'
    },
    {
      id: '2920-20',
      code: '2920-20',
      dimensions: '20 cm 8 m',
      color: 'Azul'
    }
  ]

  const handleAddToQuote = (product) => {
    addItem(product)
    // Feedback visual opcional
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
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-teal-500 rounded-full mx-auto mb-2 opacity-60"></div>
                    <p className="text-sm text-gray-600">{product.code}</p>
                  </div>
                </div>
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

