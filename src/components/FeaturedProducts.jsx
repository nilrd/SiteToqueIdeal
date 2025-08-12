import { useState } from 'react'
import ProductModal from './ProductModal'
import { featuredProducts } from '../data/featuredProducts'

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProductClick = (product) => {
    // Adaptar dados para o modal existente
    const adaptedProduct = {
      codigo: product.code,
      nome: product.name,
      descricao: product.description,
      cores: product.colors,
      imagens: product.images,
      tamanhos: ['Pequeno', 'Médio', 'Grande']
    }
    setSelectedProduct(adaptedProduct)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Título da Seção */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '1rem'
          }}>
            Destaques
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            fontFamily: 'Lato, sans-serif',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Conheça nossa seleção especial de peças que transformam qualquer ambiente
          </p>
        </div>

        {/* Grid de Produtos */}
        <div 
          className="produtos-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="card"
              style={{
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textAlign: 'center',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb'
              }}
              onClick={() => handleProductClick(product)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              {/* Código do Produto */}
              <div style={{ marginBottom: '0.75rem' }}>
                <span style={{
                  backgroundColor: '#002b29',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  {product.code}
                </span>
              </div>

              {/* Imagem do Produto */}
              <div style={{ 
                marginBottom: '1rem',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <img
                  src={product.mainImage}
                  alt={product.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  onError={(e) => {
                    e.target.src = '/placeholder-product.jpg'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)'
                  }}
                />
              </div>

              {/* Nome do Produto */}
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#333',
                fontFamily: 'Montserrat, sans-serif',
                lineHeight: '1.3'
              }}>
                {product.name}
              </h3>

              {/* Dimensões */}
              <p style={{
                fontSize: '0.875rem',
                color: '#666',
                marginBottom: '0.75rem',
                fontFamily: 'Lato, sans-serif'
              }}>
                {product.dimensions}
              </p>

              {/* Cores Disponíveis */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '0.25rem',
                  flexWrap: 'wrap'
                }}>
                  {product.colors.map((color, index) => (
                    <span
                      key={color}
                      style={{
                        fontSize: '0.75rem',
                        backgroundColor: '#f3f4f6',
                        color: '#666',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '3px',
                        fontFamily: 'Lato, sans-serif'
                      }}
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botão */}
              <button
                style={{
                  background: '#006d67',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '6px',
                  border: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#005a55'
                  e.stopPropagation()
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#006d67'
                  e.stopPropagation()
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  handleProductClick(product)
                }}
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>

        {/* Nota sobre o catálogo */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '8px',
          padding: '1.5rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <h4 style={{
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#856404',
            marginBottom: '0.5rem',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            🚧 Catálogo em Construção
          </h4>
          <p style={{
            fontSize: '0.9rem',
            color: '#856404',
            fontFamily: 'Lato, sans-serif',
            lineHeight: '1.5'
          }}>
            As imagens apresentadas são meramente ilustrativas. Nosso catálogo completo está sendo desenvolvido. 
            Entre em contato conosco via WhatsApp para conhecer toda nossa linha de produtos e solicitar orçamentos personalizados.
          </p>
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <style jsx>{`
        @media (max-width: 768px) {
          .produtos-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
            gap: 0.75rem !important;
          }
          
          .card {
            padding: 0.75rem !important;
          }
          
          .card h3 {
            font-size: 1rem !important;
          }
          
          .card button {
            padding: 0.6rem 1rem !important;
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .produtos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

export default FeaturedProducts

