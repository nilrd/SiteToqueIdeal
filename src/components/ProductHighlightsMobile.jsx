import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { featuredProducts } from '../data/featuredProducts'

const ProductHighlightsMobile = () => {
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
    if (selectedProduct && selectedProduct.colors) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.colors.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProduct && selectedProduct.colors) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.colors.length - 1 : prev - 1
      )
    }
  }

  const getCurrentImage = () => {
    if (!selectedProduct) return ''
    const currentColor = selectedProduct.colors[currentImageIndex]
    return selectedProduct.images[currentColor] || selectedProduct.mainImage
  }

  return (
    <div style={{ 
      padding: '2rem 1rem', 
      backgroundColor: '#f8f9fa',
      minHeight: '400px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2rem',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '0.5rem',
          color: '#214567'
        }}>
          Produtos em Destaque
        </h2>
        
        <p style={{
          fontSize: '1rem',
          fontFamily: 'Lato, sans-serif',
          textAlign: 'center',
          color: '#666',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Conheça nossa seleção especial de peças que transformam qualquer ambiente
        </p>

        {/* Grid de produtos otimizado para mobile */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            padding: '0',
            maxWidth: '100%'
          }}
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid #e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                minHeight: '300px'
              }}
              onClick={() => openModal(product)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              {/* Código do produto */}
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 'bold',
                color: '#214567',
                marginBottom: '0.5rem',
                textAlign: 'left'
              }}>
                Código: {product.code}
              </div>

              {/* Container da imagem com aspect ratio fixo */}
              <div style={{
                width: '100%',
                height: '140px',
                marginBottom: '0.75rem',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={product.mainImage} 
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.innerHTML = `
                      <div style="
                        width: 100%; 
                        height: 100%; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        background: #f0f0f0; 
                        color: #999; 
                        font-size: 0.8rem;
                        border-radius: 8px;
                      ">
                        Imagem não encontrada
                      </div>
                    `
                  }}
                />
              </div>

              {/* Nome do produto */}
              <h3 style={{
                fontSize: '0.9rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#214567',
                lineHeight: '1.2',
                flexGrow: 1
              }}>
                {product.name}
              </h3>

              {/* Dimensões */}
              <div style={{ 
                fontSize: '0.75rem', 
                color: '#666', 
                marginBottom: '0.75rem'
              }}>
                {product.dimensions}
              </div>

              {/* Cores disponíveis */}
              <div style={{ marginBottom: '1rem' }}>
                {product.colors.map((color, index) => (
                  <span 
                    key={index}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#214567',
                      color: 'white',
                      padding: '0.2rem 0.4rem',
                      borderRadius: '4px',
                      fontSize: '0.65rem',
                      margin: '0.1rem',
                      fontWeight: '500'
                    }}
                  >
                    {color}
                  </span>
                ))}
              </div>

              {/* Botão com nova cor */}
              <button
                style={{
                  background: '#C8A882',
                  color: 'white',
                  padding: '0.6rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  transition: 'background-color 0.3s ease',
                  width: '100%',
                  marginTop: 'auto',
                  fontFamily: 'Montserrat, sans-serif'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#8B7355'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#C8A882'}
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Produto - Otimizado para mobile */}
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
            padding: '1rem'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              maxWidth: '400px',
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
                width: '36px',
                height: '36px',
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
              <X size={18} />
            </button>

            {/* Imagem do produto */}
            <div style={{ position: 'relative' }}>
              <img
                src={getCurrentImage()}
                alt={selectedProduct.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'contain',
                  borderRadius: '16px 16px 0 0',
                  backgroundColor: '#f8f9fa'
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentNode.innerHTML = `
                    <div style="
                      width: 100%; 
                      height: 250px; 
                      display: flex; 
                      align-items: center; 
                      justify-content: center; 
                      background: #f0f0f0; 
                      color: #999; 
                      border-radius: 16px 16px 0 0;
                    ">
                      Imagem não encontrada
                    </div>
                  `
                }}
              />

              {/* Navegação de cores */}
              {selectedProduct.colors.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    style={{
                      position: 'absolute',
                      right: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>

            {/* Informações do produto */}
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: '#214567',
                marginBottom: '0.5rem'
              }}>
                Código: {selectedProduct.code}
              </div>

              <h2 style={{
                fontSize: '1.25rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                color: '#214567'
              }}>
                {selectedProduct.name}
              </h2>

              <p style={{
                fontSize: '0.9rem',
                fontFamily: 'Lato, sans-serif',
                color: '#666',
                lineHeight: '1.5',
                marginBottom: '1rem'
              }}>
                {selectedProduct.description}
              </p>

              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  marginBottom: '0.25rem',
                  color: '#214567'
                }}>
                  Dimensões
                </h3>
                <p style={{
                  fontSize: '0.8rem',
                  fontFamily: 'Lato, sans-serif',
                  color: '#666'
                }}>
                  {selectedProduct.dimensions}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#214567'
                }}>
                  Cores Disponíveis
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {selectedProduct.colors.map((color, index) => (
                    <button
                      key={index}
                      style={{
                        backgroundColor: currentImageIndex === index ? '#214567' : '#f0f0f0',
                        color: currentImageIndex === index ? 'white' : '#666',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{
                backgroundColor: '#fff3cd',
                border: '1px solid #ffeaa7',
                borderRadius: '8px',
                padding: '0.75rem'
              }}>
                <p style={{
                  fontSize: '0.75rem',
                  fontFamily: 'Lato, sans-serif',
                  color: '#856404',
                  margin: 0,
                  fontStyle: 'italic',
                  lineHeight: '1.4'
                }}>
                  💡 Você pode personalizar as cores desta peça no momento do orçamento. 
                  Entre em contato conosco para mais opções!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS responsivo específico */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          
          div[style*="minHeight: '300px'"] {
            min-height: 280px !important;
          }
          
          div[style*="height: '140px'"] {
            height: 120px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
          }
          
          div[style*="minHeight: '300px'"] {
            min-height: 260px !important;
            padding: 0.75rem !important;
          }
          
          div[style*="height: '140px'"] {
            height: 100px !important;
          }
          
          div[style*="fontSize: '2rem'"] {
            font-size: 1.5rem !important;
          }
        }
        
        @media (max-width: 360px) {
          div[style*="minHeight: '300px'"] {
            min-height: 240px !important;
            padding: 0.5rem !important;
          }
          
          div[style*="height: '140px'"] {
            height: 90px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductHighlightsMobile

