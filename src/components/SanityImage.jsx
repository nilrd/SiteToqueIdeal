import React from 'react'
import { urlFor } from '../lib/sanityClient'

const SanityImage = ({ 
  image, 
  alt = '', 
  className = '', 
  width = 800, 
  height = 600,
  quality = 80,
  fit = 'crop',
  ...props 
}) => {
  if (!image) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        {...props}
      >
        <span className="text-gray-400">Sem imagem</span>
      </div>
    )
  }

  // Se a imagem já é uma URL, use diretamente
  if (typeof image === 'string' && image.startsWith('http')) {
    return (
      <img 
        src={image} 
        alt={alt} 
        className={className}
        {...props}
      />
    )
  }

  // Construir URL otimizada do Sanity
  let imageUrl
  try {
    imageUrl = urlFor(image)
      .width(width)
      .height(height)
      .quality(quality)
      .fit(fit)
      .auto('format')
      .url()
  } catch (error) {
    console.error('Erro ao processar imagem do Sanity:', error)
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        {...props}
      >
        <span className="text-gray-400">Erro na imagem</span>
      </div>
    )
  }

  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={className}
      loading="lazy"
      {...props}
    />
  )
}

export default SanityImage

