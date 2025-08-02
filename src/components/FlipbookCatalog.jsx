import React, { useState, useRef, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { ChevronLeft, ChevronRight, Home, RotateCcw, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'
import { useSanity } from '../contexts/SanityContext'
import productsData from '../assets/products.json'

const FlipbookCatalog = () => {
  const flipBookRef = useRef()
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const { products: sanityProducts, loading } = useSanity()
  
  // Usar produtos do Sanity se disponíveis, senão usar produtos do JSON
  const products = sanityProducts && sanityProducts.length > 0 ? sanityProducts : productsData

  // Configurar páginas do flipbook
  const productsPerPage = 4 // 4 produtos por página para melhor layout
  const pages = []
  
  // Página de capa
  pages.push({
    type: 'cover',
    content: null
  })

  // Páginas de produtos
  for (let i = 0; i < products.length; i += productsPerPage) {
    pages.push({
      type: 'products',
      content: products.slice(i, i + productsPerPage)
    })
  }

  // Página de contato/final
  pages.push({
    type: 'contact',
    content: null
  })

  useEffect(() => {
    setTotalPages(pages.length)
  }, [pages.length])

  const handlePageFlip = (e) => {
    setCurrentPage(e.data)
  }

  const nextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext()
    }
  }

  const prevPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev()
    }
  }

  const goToFirstPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flip(0)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2))
  }

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.6))
  }

  const resetZoom = () => {
    setZoom(1)
  }

  // Componente para página de capa
  const CoverPage = () => (
    <div className="flipbook-page cover-page">
      <div 
        className="page-background"
        style={{
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="cover-content">
          <div className="cover-logo">
            <img 
              src="/TOQUEIDEAL(1).png" 
              alt="Toque Ideal" 
              className="logo-image"
            />
          </div>
          <h1 className="cover-title">Catálogo Virtual</h1>
          <p className="cover-subtitle">Decoração em vidro que transforma ambientes</p>
          <div className="cover-year">2025</div>
        </div>
      </div>
    </div>
  )

  // Componente para página de produtos
  const ProductsPage = ({ products: pageProducts }) => (
    <div className="flipbook-page products-page">
      <div 
        className="page-background"
        style={{
          backgroundImage: 'linear-gradient(45deg, #f0f2f5 0%, #e8ecf0 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="products-grid">
          {pageProducts.map((product, index) => (
            <div key={product.code || product.codigo || index} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image || product.fotos?.[0] || '/placeholder-product.jpg'}
                  alt={product.code || product.codigo}
                  className="product-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-product.jpg'
                  }}
                />
              </div>
              <div className="product-info">
                <h3 className="product-code">{product.code || product.codigo}</h3>
                <p className="product-dimensions">{product.dimensions || product.dimensoes}</p>
                {(product.series || product.serie) && (
                  <p className="product-series">{product.series || product.serie}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Componente para página de contato
  const ContactPage = () => (
    <div className="flipbook-page contact-page">
      <div 
        className="page-background"
        style={{
          backgroundImage: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="contact-content">
          <h2 className="contact-title">Entre em Contato</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Telefone</h3>
              <p>(11) 99999-9999</p>
            </div>
            <div className="contact-item">
              <h3>E-mail</h3>
              <p>contato@toqueideal.com</p>
            </div>
            <div className="contact-item">
              <h3>Endereço</h3>
              <p>R. José Bernardo Pinto, 333<br />Vila Guilherme, São Paulo - SP</p>
            </div>
          </div>
          <div className="contact-cta">
            <p>Solicite seu orçamento personalizado</p>
            <a 
              href="/contato" 
              className="contact-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer Orçamento
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="flipbook-loading">
        <div className="loading-spinner"></div>
        <p>Carregando catálogo...</p>
      </div>
    )
  }

  return (
    <div className="flipbook-container">
      {/* Controles do flipbook */}
      <div className="flipbook-controls">
        <div className="controls-left">
          <button onClick={goToFirstPage} className="control-btn" title="Primeira página">
            <Home size={20} />
          </button>
          <button onClick={prevPage} className="control-btn" title="Página anterior">
            <ChevronLeft size={20} />
          </button>
          <span className="page-counter">
            {currentPage + 1} / {totalPages}
          </span>
          <button onClick={nextPage} className="control-btn" title="Próxima página">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="controls-right">
          <button onClick={zoomOut} className="control-btn" title="Diminuir zoom">
            <ZoomOut size={20} />
          </button>
          <button onClick={resetZoom} className="control-btn" title="Resetar zoom">
            <RotateCcw size={20} />
          </button>
          <button onClick={zoomIn} className="control-btn" title="Aumentar zoom">
            <ZoomIn size={20} />
          </button>
          <button onClick={toggleFullscreen} className="control-btn" title="Tela cheia">
            <Maximize2 size={20} />
          </button>
        </div>
      </div>

      {/* Flipbook */}
      <div 
        className="flipbook-wrapper"
        style={{ transform: `scale(${zoom})` }}
      >
        <HTMLFlipBook
          ref={flipBookRef}
          width={400}
          height={600}
          size="stretch"
          minWidth={300}
          maxWidth={800}
          minHeight={450}
          maxHeight={900}
          showCover={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          showPageCorners={true}
          disableFlipByClick={false}
          onFlip={handlePageFlip}
          className="flipbook"
        >
          {pages.map((page, index) => (
            <div key={index} className="page">
              {page.type === 'cover' && <CoverPage />}
              {page.type === 'products' && <ProductsPage products={page.content} />}
              {page.type === 'contact' && <ContactPage />}
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Instruções */}
      <div className="flipbook-instructions">
        <p>💡 Clique nas bordas das páginas ou use os controles para navegar</p>
      </div>
    </div>
  )
}

export default FlipbookCatalog

