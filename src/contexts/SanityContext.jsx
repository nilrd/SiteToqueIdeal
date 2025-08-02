import React, { createContext, useContext, useState, useEffect } from 'react'
import productsData from '../assets/products.json'

const SanityContext = createContext()

export const useSanity = () => {
  const context = useContext(SanityContext)
  if (!context) {
    throw new Error('useSanity must be used within a SanityProvider')
  }
  return context
}

export const SanityProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData) // Inicializar com dados JSON
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [posts, setPosts] = useState([])
  const [events, setEvents] = useState([])
  const [siteSettings, setSiteSettings] = useState(null)
  const [loading, setLoading] = useState(false) // Não carregar por padrão
  const [error, setError] = useState(null)
  const [sanityAvailable, setSanityAvailable] = useState(false)

  // Função para buscar dados do Sanity (opcional)
  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Por enquanto, apenas simular que não há dados do Sanity
      // Quando o CMS estiver configurado, esta função será implementada
      console.log('Tentando conectar ao Sanity CMS...')
      
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Por enquanto, manter dados locais
      setSanityAvailable(false)
      setProducts(productsData)
      
    } catch (err) {
      console.warn('Sanity CMS não disponível, usando dados locais:', err.message)
      setSanityAvailable(false)
      setError(err.message)
      setProducts(productsData)
    } finally {
      setLoading(false)
    }
  }

  // Função para enviar formulário de contato
  const submitContactForm = async (formData) => {
    try {
      // Por enquanto, apenas simular envio
      console.log('Formulário enviado:', formData)
      return { success: true, message: 'Mensagem enviada com sucesso!' }
    } catch (err) {
      console.error('Erro ao enviar formulário:', err)
      return { success: false, message: 'Erro ao enviar mensagem. Tente novamente.' }
    }
  }

  // Não buscar dados automaticamente no useEffect para evitar erros
  // useEffect(() => {
  //   fetchData()
  // }, [])

  const value = {
    products,
    featuredProducts,
    posts,
    events,
    siteSettings,
    loading,
    error,
    sanityAvailable,
    fetchData,
    submitContactForm
  }

  return (
    <SanityContext.Provider value={value}>
      {children}
    </SanityContext.Provider>
  )
}

export default SanityContext

