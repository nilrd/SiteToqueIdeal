import { useState } from 'react'
import { X } from 'lucide-react'
import { featuredProducts } from '../data/featuredProducts'

const ProductHighlightsNew = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <div style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#002b29'
        }}>
          Produtos em Destaque
        </h2>
        
        <p style={{
          fontSize: '1.125rem',
          fontFamily: 'Lato, sans-serif',
          textAlign: 'center',
          color: '#666',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Conheça nossa seleção especial de peças que transformam qualquer ambiente
        </p>

        <div 
          className="produtos-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            padding: '0'
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
                border: '1px solid #e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              onClick={() => openModal(product)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: '#006d67',
                marginBottom: '0.5rem',
                textAlign: 'left'
              }}>
                Código: {product.code}
              </div>

              <img 
                src={product.image} 
                alt={product.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                  backgroundColor: '#f8f9fa'
                }}
              />

              <h3 style={{
                fontSize: '1.125rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#002b29'
              }}>
                {product.name}
              </h3>

              <div style={{ 
                fontSize: '0.875rem', 
                color: '#666', 
                marginBottom: '1rem',
                flexGrow: 1
              }}>
                {product.dimensions}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                {product.colors.map((color, index) => (
                  <span 
                    key={index}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#006d67',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      margin: '0.125rem',
                      fontWeight: '500'
                    }}
                  >
                    {color}
                  </span>
                ))}
              </div>

              <button
                style={{
                  background: '#006d67',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'background-color 0.3s ease',
                  width: '100%',
                  marginTop: 'auto'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#004d47'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#006d67'}
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Produto */}
      {selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 1001,
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
              {/* Galeria de Imagens */}
              <div style={{ flex: 1, position: 'relative', minHeight: '400px' }}>
                <img
                  src={selectedProduct.images && selectedProduct.images.length > 0 
                    ? selectedProduct.images[currentImageIndex] 
                    : selectedProduct.image}
                  alt={selectedProduct.name}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'contain',
                    borderRadius: '12px 0 0 12px',
                    backgroundColor: '#f8f9fa'
                  }}
                />

                {/* Navegação de Cores */}
                {selectedProduct.colors.length > 1 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '0.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '0.5rem',
                    borderRadius: '8px'
                  }}>
                    {selectedProduct.colors.map((color, index) => (
                      <button
                        key={index}
                        style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          border: currentImageIndex === index ? '2px solid #006d67' : '1px solid #ccc',
                          backgroundColor: currentImageIndex === index ? '#006d67' : 'white',
                          color: currentImageIndex === index ? 'white' : '#333',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Informações do Produto */}
              <div style={{
                flex: 1,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  color: '#006d67',
                  marginBottom: '0.5rem'
                }}>
                  Código: {selectedProduct.code}
                </div>

                <h2 style={{
                  fontSize: '1.75rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#002b29'
                }}>
                  {selectedProduct.name}
                </h2>

                <p style={{
                  fontSize: '1rem',
                  fontFamily: 'Lato, sans-serif',
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {selectedProduct.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#002b29'
                  }}>
                    Dimensões
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    fontFamily: 'Lato, sans-serif',
                    color: '#666'
                  }}>
                    {selectedProduct.dimensions}
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#002b29'
                  }}>
                    Cores Disponíveis
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProduct.colors.map((color, index) => (
                      <span 
                        key={index}
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#006d67',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '6px',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#fff3cd',
                  border: '1px solid #ffeaa7',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginTop: 'auto'
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    fontFamily: 'Lato, sans-serif',
                    color: '#856404',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    💡 Você pode personalizar as cores desta peça no momento do orçamento. 
                    Entre em contato conosco para mais opções!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS para responsividade */}
      <style jsx>{`
        @media (max-width: 768px) {
          .produtos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          
          .card {
            padding: 0.75rem !important;
          }
          
          .card img {
            height: 150px !important;
          }
          
          .modal-content {
            flex-direction: column !important;
            margin: 1rem !important;
            max-height: 95vh !important;
          }
          
          .modal-image {
            height: 300px !important;
            border-radius: 12px 12px 0 0 !important;
          }
          
          .modal-info {
            padding: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .produtos-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductHighlightsNew

