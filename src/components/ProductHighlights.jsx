import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ProductHighlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Imagens do carrossel
  const carouselImages = [
    {
      id: 1,
      src: '/carousel-1.png',
      alt: 'Decoração em vidro - Ambiente sala de estar'
    },
    {
      id: 2,
      src: '/carousel-2.png',
      alt: 'Peças decorativas em vidro - Showroom'
    },
    {
      id: 3,
      src: '/carousel-3.png',
      alt: 'Peça decorativa em vidro dourado'
    },
    {
      id: 4,
      src: '/carousel-4.png',
      alt: 'Folha decorativa em vidro verde'
    },
    {
      id: 5,
      src: '/carousel-5.png',
      alt: 'Ambiente decorado com peças em vidro'
    }
  ]

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000) // Troca a cada 5 segundos

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Destaques
          </h2>
          <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto mb-8">
            Conheça mais dos nossos produtos únicos, criados com a qualidade e design exclusivos da Toque Ideal.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Imagens do carrossel */}
            {carouselImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}

            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            {/* Botões de navegação */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 group"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 group"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Texto e botão */}
        <div className="text-center">
          <p className="text-lg text-gray-700 font-lato mb-8 max-w-2xl mx-auto">
            Conheça mais dos nossos produtos no catálogo
          </p>
          
          <Link to="/orcamento#catalogo">
            <Button 
              size="lg"
              className="btn-primary font-montserrat font-semibold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
            >
              Ver Catálogo Completo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductHighlights

