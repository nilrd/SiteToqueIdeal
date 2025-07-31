import { useState, useEffect } from 'react'
import { Instagram, Heart, MessageCircle, Share } from 'lucide-react'

const InstagramSection = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Lista de fotos do Instagram (excluindo as restritas)
  const instagramPhotos = [
    {
      id: 1,
      src: '/fotosinstagram/post_insta_2.jpg',
      alt: 'Produto Toque Ideal - Post Instagram 2',
      likes: 127,
      comments: 23
    },
    {
      id: 2,
      src: '/fotosinstagram/post_insta_3.jpg',
      alt: 'Produto Toque Ideal - Post Instagram 3',
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      src: '/fotosinstagram/post_insta_4.jpg',
      alt: 'Produto Toque Ideal - Post Instagram 4',
      likes: 156,
      comments: 31
    },
    {
      id: 4,
      src: '/fotosinstagram/post_insta_5.jpg',
      alt: 'Produto Toque Ideal - Post Instagram 5',
      likes: 203,
      comments: 42
    },
    {
      id: 5,
      src: '/fotosinstagram/post_insta_9.png',
      alt: 'Produto Toque Ideal - Post Instagram 9',
      likes: 178,
      comments: 28
    },
    {
      id: 6,
      src: '/fotosinstagram/post_insta_10.png',
      alt: 'Produto Toque Ideal - Post Instagram 10',
      likes: 134,
      comments: 19
    }
  ]

  // Fechar modal ao pressionar ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setSelectedImage(null)
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="h-8 w-8 text-pink-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900">
              @toque.ideal
            </h2>
          </div>
          <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
            Acompanhe nossos produtos em ação! Veja como nossos clientes usam 
            as peças da Toque Ideal em seus projetos e ambientes.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(photo)}
            >
              {/* Image */}
              <div className="aspect-square bg-gray-200">
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/fotosinstagram/post_insta_2.jpg'
                  }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 mr-1" />
                      <span className="text-sm font-medium">{photo.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-1" />
                      <span className="text-sm font-medium">{photo.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="h-6 w-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/toque.ideal?igsh=cnhzZGNzeGIya2F5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-montserrat font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Seguir no Instagram
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-red-500" />
                    <span className="font-medium">{selectedImage.likes} curtidas</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-blue-500" />
                    <span className="font-medium">{selectedImage.comments} comentários</span>
                  </div>
                </div>
                <button className="flex items-center text-white hover:text-gray-300 transition-colors duration-200">
                  <Share className="h-5 w-5 mr-2" />
                  Compartilhar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default InstagramSection

