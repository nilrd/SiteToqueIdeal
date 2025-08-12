import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedProducts, getPrimaryColor } from '../data/newProducts'
import NewProductModal from './NewProductModal'

const NewProductHighlights = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const featuredProducts = getFeaturedProducts()

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Destaques
          </h2>
        </div>

        {/* Grade de Produtos - 5 Colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {featuredProducts.map((product) => {
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
                    <p className="text-sm text-gray-600 mb-3">
                      {product.dimensions}
                    </p>
                    
                    {/* Botão Adicionar ao Orçamento */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProductClick(product)
                      }}
                      className="w-full bg-[#214567] text-white py-2 px-4 rounded text-sm font-medium hover:bg-[#1a3a5c] transition-colors"
                    >
                      Adicionar ao orçamento
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Link para Catálogo Completo */}
        <div className="text-center">
          <Link
            to="/catalogo"
            className="inline-block bg-[#214567] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#1a3a5c] transition-colors"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </div>

      {/* Modal do Produto */}
      <NewProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default NewProductHighlights

