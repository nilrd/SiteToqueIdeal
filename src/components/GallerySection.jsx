import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Lista de fotos para a galeria (excluindo as restritas)
  const galleryImages = [
    {
      id: 1,
      src: '/fotosinstagram/post_insta_2.jpg',
      alt: 'Ambiente elegante com produtos Toque Ideal',
      title: 'Elegância em Cada Detalhe'
    },
    {
      id: 2,
      src: '/fotosinstagram/post_insta_3.jpg',
      alt: 'Produtos Toque Ideal em uso',
      title: 'Qualidade e Sofisticação'
    },
    {
      id: 3,
      src: '/fotosinstagram/post_insta_4.jpg',
      alt: 'Design moderno Toque Ideal',
      title: 'Design Contemporâneo'
    },
    {
      id: 4,
      src: '/fotosinstagram/post_insta_5.jpg',
      alt: 'Produtos artesanais Toque Ideal',
      title: 'Artesania Brasileira'
    },
    {
      id: 5,
      src: '/fotosinstagram/post_insta_9.png',
      alt: 'Coleção especial Toque Ideal',
      title: 'Coleção Especial'
    },
    {
      id: 6,
      src: '/fotosinstagram/post_insta_10.png',
      alt: 'Inovação em vidro Toque Ideal',
      title: 'Inovação em Vidro'
    },
    {
      id: 7,
      src: '/fotosinstagram/post_insta_11.png',
      alt: 'Produtos premium Toque Ideal',
      title: 'Linha Premium'
    },
    {
      id: 8,
      src: '/fotosinstagram/post_insta_12.png',
      alt: 'Acabamento perfeito Toque Ideal',
      title: 'Acabamento Perfeito'
    }
  ]

  const openModal = (index) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
            Descubra a beleza e versatilidade dos nossos produtos através de uma 
            coleção cuidadosamente selecionada de imagens que mostram o melhor da Toque Ideal.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => openModal(index)}
            >
              {/* Image Container */}
              <div className="aspect-square bg-gray-200">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/fotosinstagram/post_insta_2.jpg'
                  }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-montserrat font-semibold text-lg mb-2">
                    {image.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-primary"></div>
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-5xl max-h-full flex items-center justify-center">
              <img 
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-montserrat font-bold text-2xl mb-2">
                  {galleryImages[currentImageIndex].title}
                </h3>
                <p className="text-gray-300 font-lato">
                  {currentImageIndex + 1} de {galleryImages.length}
                </p>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GallerySection

