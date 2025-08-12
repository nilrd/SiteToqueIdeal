import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { featuredProducts } from '../data/featuredProducts'

const ProductHighlightsNew = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)

  const openModal = (product) => {
    setSelectedProduct(product)
    setSelectedColorIndex(0)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setSelectedColorIndex(0)
  }

  const nextColor = () => {
    if (selectedProduct && selectedColorIndex < selectedProduct.colors.length - 1) {
      setSelectedColorIndex(selectedColorIndex + 1)
    }
  }

  const prevColor = () => {
    if (selectedProduct && selectedColorIndex > 0) {
      setSelectedColorIndex(selectedColorIndex - 1)
    }
  }

  const getCurrentImage = () => {
    if (!selectedProduct) return ''
    const currentColor = selectedProduct.colors[selectedColorIndex]
    return selectedProduct.images[currentColor]
  }

  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Título da Seção */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            color: '#002b29',
            marginBottom: '1rem'
          }}>
            Produtos em Destaque
          </h2>
          <p style={{
            fontSize: '1.1rem',
            fontFamily: 'Lato, sans-serif',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Conheça nossa seleção especial de peças que transformam qualquer ambiente
          </p>
        </div>

        {/* Grid de Produtos - 5 Colunas */}
        <div 
          className="produtos-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
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
                border: '1px solid #e0e0e0'
              }}
              onClick={() => openModal(product)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              {/* Imagem do Produto */}
              <div style={{
                width: '100%',
                height: '200px',
                marginBottom: '1rem',
                overflow: 'hidden',
                borderRadius: '6px',
                backgroundColor: '#f5f5f5'
              }}>
                <img
                  src={product.mainImage}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)'
                  }}
                />
              </div>

              {/* Código do Produto */}
              <div style={{
                fontSize: '0.9rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
                color: '#006d67',
                marginBottom: '0.5rem'
              }}>
                Código: {product.code}
              </div>

              {/* Nome do Produto */}
              <h3 style={{
                fontSize: '1.1rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#002b29',
                marginBottom: '0.5rem',
                lineHeight: '1.3'
              }}>
                {product.name}
              </h3>

              {/* Dimensões */}
              <p style={{
                fontSize: '0.9rem',
                fontFamily: 'Lato, sans-serif',
                color: '#666',
                marginBottom: '0.5rem'
              }}>
                {product.dimensions}
              </p>

              {/* Cores Disponíveis */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '500',
                      color: '#006d67',
                      backgroundColor: '#e8f4f3',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px'
                    }}
                  >
                    {color}
                  </span>
                ))}
              </div>

              {/* Botão Ver Detalhes */}
              <button
                style={{
                  background: '#006d67',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '6px',
                  border: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  width: '100%'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#005a55'}
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
            backgroundColor: 'rgba(0,0,0,0.8)',
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
              maxWidth: '800px',
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
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
              {/* Galeria de Imagens */}
              <div style={{ flex: 1, position: 'relative', minHeight: '400px' }}>
                <img
                  src={getCurrentImage()}
                  alt={selectedProduct.name}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '12px',
                    borderBottomLeftRadius: '12px'
                  }}
                />

                {/* Navegação de Cores */}
                {selectedProduct.colors.length > 1 && (
                  <>
                    <button
                      onClick={prevColor}
                      disabled={selectedColorIndex === 0}
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: selectedColorIndex === 0 ? 'not-allowed' : 'pointer',
                        opacity: selectedColorIndex === 0 ? 0.5 : 1
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={nextColor}
                      disabled={selectedColorIndex === selectedProduct.colors.length - 1}
                      style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: selectedColorIndex === selectedProduct.colors.length - 1 ? 'not-allowed' : 'pointer',
                        opacity: selectedColorIndex === selectedProduct.colors.length - 1 ? 0.5 : 1
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Indicadores de Cor */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  {selectedProduct.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColorIndex(index)}
                      style={{
                        background: index === selectedColorIndex ? 'white' : 'rgba(255,255,255,0.5)',
                        color: index === selectedColorIndex ? '#002b29' : 'white',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.8rem',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Informações do Produto */}
              <div style={{ flex: 1, padding: '2rem' }}>
                <div style={{
                  fontSize: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  color: '#006d67',
                  marginBottom: '0.5rem'
                }}>
                  Código: {selectedProduct.code}
                </div>

                <h2 style={{
                  fontSize: '1.8rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  color: '#002b29',
                  marginBottom: '1rem'
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
                    fontSize: '1.1rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    color: '#002b29',
                    marginBottom: '0.5rem'
                  }}>
                    Dimensões
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    fontFamily: 'Lato, sans-serif',
                    color: '#666'
                  }}>
                    {selectedProduct.dimensions}
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    color: '#002b29',
                    marginBottom: '0.5rem'
                  }}>
                    Cores Disponíveis
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProduct.colors.map((color, index) => (
                      <span
                        key={index}
                        style={{
                          fontSize: '0.9rem',
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: '500',
                          color: '#006d67',
                          backgroundColor: '#e8f4f3',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px'
                        }}
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    fontFamily: 'Lato, sans-serif',
                    color: '#666',
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

      {/* Media Queries para Responsividade */}
      <style jsx>{`
        @media (max-width: 768px) {
          .produtos-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
            gap: 0.8rem !important;
          }
          
          .card {
            padding: 0.8rem !important;
          }
          
          .card img {
            height: 150px !important;
          }
          
          .modal-content {
            flex-direction: column !important;
          }
          
          .modal-content > div:first-child {
            border-radius: 12px 12px 0 0 !important;
          }
        }
        
        @media (max-width: 480px) {
          .produtos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ProductHighlightsNew

