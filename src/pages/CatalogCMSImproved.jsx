import { useState, useEffect } from 'react'
import { Search, Grid, List, MessageCircle, AlertTriangle, Info, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products, availableColors } from '../data/products'

const CatalogCMSImproved = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const productsPerPage = 12

  // Aplicar filtros
  useEffect(() => {
    let filtered = products

    // Filtro de busca
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.codigo?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtro por cor
    if (selectedColor) {
      filtered = filtered.filter(product =>
        product.cores?.includes(selectedColor)
      )
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedColor])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProduct && selectedProduct.cores) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.cores.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProduct && selectedProduct.cores) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.cores.length - 1 : prev - 1
      )
    }
  }

  const getCurrentImage = () => {
    if (!selectedProduct) return ''
    const currentColor = selectedProduct.cores[currentImageIndex]
    return selectedProduct.imagens[currentColor] || Object.values(selectedProduct.imagens)[0]
  }

  const handleWhatsAppContact = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para produtos do catálogo Toque Ideal.`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511967767364&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Paginação
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', paddingTop: '5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            color: '#214567',
            marginBottom: '1rem'
          }}>
            Catálogo de Produtos
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#666',
            fontFamily: 'Lato, sans-serif',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Descubra nossa linha de artigos decorativos em vidro. Cada peça é única e pode ser 
            personalizada para atender perfeitamente ao seu projeto.
          </p>
        </div>

        {/* Filtros e Busca */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {/* Primeira linha - Busca e Filtro */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              {/* Busca */}
              <div style={{ flex: '1', minWidth: '250px' }}>
                <div style={{ position: 'relative' }}>
                  <Search style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999',
                    width: '20px',
                    height: '20px'
                  }} />
                  <input
                    type="text"
                    placeholder="Buscar por código ou nome..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      paddingLeft: '2.5rem',
                      paddingRight: '1rem',
                      paddingTop: '0.75rem',
                      paddingBottom: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontFamily: 'Lato, sans-serif',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
              
              {/* Filtro de Cor */}
              <div style={{ flex: '0 0 200px' }}>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontFamily: 'Lato, sans-serif',
                    outline: 'none'
                  }}
                >
                  <option value="">Todas as cores</option>
                  {availableColors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>
              
              {/* Botão Orçamento */}
              <Button
                onClick={handleWhatsAppContact}
                style={{
                  background: '#6B8E5A',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background-color 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#5A7A49'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#6B8E5A'}
              >
                <MessageCircle style={{ width: '16px', height: '16px' }} />
                ORÇAMENTO
              </Button>
            </div>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {currentProducts.map((product) => (
            <div 
              key={product.id} 
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              onClick={() => handleProductClick(product)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              {/* Imagem do produto */}
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={Object.values(product.imagens)[0]}
                  alt={product.nome}
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
                        font-size: 0.9rem;
                      ">
                        Imagem não encontrada
                      </div>
                    `
                  }}
                />
                
                {/* Badge do código */}
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  backgroundColor: '#214567',
                  color: 'white',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600'
                }}>
                  {product.codigo}
                </div>
                
                {/* Badge de cores */}
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.7rem',
                  fontFamily: 'Lato, sans-serif'
                }}>
                  {product.cores.length} cor{product.cores.length > 1 ? 'es' : ''}
                </div>
              </div>
              
              {/* Informações do produto */}
              <div style={{
                padding: '1rem',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  color: '#214567',
                  marginBottom: '0.5rem',
                  lineHeight: '1.3'
                }}>
                  {product.nome}
                </h3>
                
                <p style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  fontFamily: 'Lato, sans-serif',
                  lineHeight: '1.4',
                  marginBottom: '0.75rem',
                  flexGrow: 1
                }}>
                  {product.descricao}
                </p>
                
                {/* Cores disponíveis */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.25rem'
                  }}>
                    {product.cores.slice(0, 4).map((cor) => (
                      <span 
                        key={cor}
                        style={{
                          fontSize: '0.7rem',
                          backgroundColor: '#f0f0f0',
                          color: '#666',
                          padding: '0.2rem 0.4rem',
                          borderRadius: '3px',
                          fontFamily: 'Lato, sans-serif'
                        }}
                      >
                        {cor}
                      </span>
                    ))}
                    {product.cores.length > 4 && (
                      <span style={{
                        fontSize: '0.7rem',
                        backgroundColor: '#214567',
                        color: 'white',
                        padding: '0.2rem 0.4rem',
                        borderRadius: '3px',
                        fontFamily: 'Lato, sans-serif'
                      }}>
                        +{product.cores.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Botão */}
                <button
                  style={{
                    background: '#C8A882',
                    color: 'white',
                    padding: '0.6rem 1rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    transition: 'background-color 0.3s ease',
                    width: '100%',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#8B7355'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#C8A882'}
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: 'none',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '500',
                    cursor: 'pointer',
                    backgroundColor: currentPage === i + 1 ? '#214567' : 'white',
                    color: currentPage === i + 1 ? 'white' : '#666',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== i + 1) {
                      e.target.style.backgroundColor = '#f0f0f0'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== i + 1) {
                      e.target.style.backgroundColor = 'white'
                    }
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Aviso de Catálogo - Versão Discreta */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '2rem',
          fontSize: '0.85rem',
          fontFamily: 'Lato, sans-serif',
          color: '#856404'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <Info style={{ width: '16px', height: '16px', marginTop: '2px', flexShrink: 0 }} />
            <div>
              <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>
                Catálogo em desenvolvimento
              </p>
              <p style={{ margin: 0, lineHeight: '1.4' }}>
                As imagens são ilustrativas. Todas as peças podem ser personalizadas em cores e acabamentos. 
                Entre em contato para ver nossa linha completa e solicitar orçamento personalizado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal do Produto - Igual ao da página inicial */}
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
              maxWidth: '500px',
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
                alt={selectedProduct.nome}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'contain',
                  borderRadius: '16px 16px 0 0',
                  backgroundColor: '#f8f9fa'
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentNode.innerHTML = `
                    <div style="
                      width: 100%; 
                      height: 300px; 
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
              {selectedProduct.cores.length > 1 && (
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
                Código: {selectedProduct.codigo}
              </div>

              <h2 style={{
                fontSize: '1.25rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                color: '#214567'
              }}>
                {selectedProduct.nome}
              </h2>

              <p style={{
                fontSize: '0.9rem',
                fontFamily: 'Lato, sans-serif',
                color: '#666',
                lineHeight: '1.5',
                marginBottom: '1rem'
              }}>
                {selectedProduct.descricao}
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
                  {selectedProduct.dimensoes || 'Consulte as dimensões disponíveis'}
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
                  {selectedProduct.cores.map((color, index) => (
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
            gap: 1rem !important;
          }
          
          div[style*="flexDirection: 'row'"] {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          
          div[style*="flex: '0 0 200px'"] {
            flex: 1 !important;
          }
          
          div[style*="fontSize: '2.5rem'"] {
            font-size: 1.75rem !important;
          }
          
          div[style*="fontSize: '1.125rem'"] {
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          
          div[style*="fontSize: '2.5rem'"] {
            font-size: 1.5rem !important;
          }
          
          div[style*="maxWidth: '500px'"] {
            max-width: 95vw !important;
            margin: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default CatalogCMSImproved

