import React from 'react'
import { PortableText } from '@portabletext/react'

const SanityContent = ({ content, className = '' }) => {
  if (!content) {
    return null
  }

  // Componentes personalizados para renderização do conteúdo rico
  const components = {
    block: {
      // Cabeçalhos
      h1: ({ children }) => <h1 className="text-3xl font-bold mb-4 text-gray-900">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-semibold mb-3 text-gray-900">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-medium mb-2 text-gray-900">{children}</h3>,
      h4: ({ children }) => <h4 className="text-lg font-medium mb-2 text-gray-900">{children}</h4>,
      
      // Parágrafo normal
      normal: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
      
      // Citação
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-teal-500 pl-4 italic my-4 text-gray-600">
          {children}
        </blockquote>
      ),
    },
    
    list: {
      // Lista com marcadores
      bullet: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-700">{children}</ul>,
      // Lista numerada
      number: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-700">{children}</ol>,
    },
    
    listItem: {
      // Item da lista com marcador
      bullet: ({ children }) => <li className="mb-1">{children}</li>,
      // Item da lista numerada
      number: ({ children }) => <li className="mb-1">{children}</li>,
    },
    
    marks: {
      // Texto em negrito
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      // Texto em itálico
      em: ({ children }) => <em className="italic">{children}</em>,
      // Texto sublinhado
      underline: ({ children }) => <u className="underline">{children}</u>,
      // Links
      link: ({ children, value }) => (
        <a 
          href={value.href} 
          className="text-teal-600 hover:text-teal-800 underline"
          target={value.blank ? '_blank' : '_self'}
          rel={value.blank ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ),
    },
    
    types: {
      // Imagens no conteúdo
      image: ({ value }) => {
        if (!value?.asset) return null
        
        return (
          <figure className="my-6">
            <img 
              src={`${value.asset.url}?w=800&h=600&fit=crop&auto=format`}
              alt={value.alt || ''}
              className="w-full h-auto rounded-lg shadow-md"
              loading="lazy"
            />
            {value.caption && (
              <figcaption className="text-sm text-gray-600 text-center mt-2 italic">
                {value.caption}
              </figcaption>
            )}
          </figure>
        )
      },
      
      // Quebra de linha
      break: () => <br className="my-2" />,
    },
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <PortableText 
        value={content} 
        components={components}
      />
    </div>
  )
}

export default SanityContent

