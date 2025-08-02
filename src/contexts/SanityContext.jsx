import React, { createContext, useContext, useState, useEffect } from 'react'
import { client, queries } from '../lib/sanityClient'

const SanityContext = createContext()

export const useSanity = () => {
  const context = useContext(SanityContext)
  if (!context) {
    throw new Error('useSanity must be used within a SanityProvider')
  }
  return context
}

export const SanityProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [posts, setPosts] = useState([])
  const [events, setEvents] = useState([])
  const [siteSettings, setSiteSettings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Função para buscar todos os dados
  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      const [
        productsData,
        featuredProductsData,
        postsData,
        eventsData,
        settingsData
      ] = await Promise.all([
        client.fetch(queries.allProducts),
        client.fetch(queries.featuredProducts),
        client.fetch(queries.allPosts),
        client.fetch(queries.allEvents),
        client.fetch(queries.siteSettings)
      ])

      setProducts(productsData || [])
      setFeaturedProducts(featuredProductsData || [])
      setPosts(postsData || [])
      setEvents(eventsData || [])
      setSiteSettings(settingsData || null)
    } catch (err) {
      console.error('Erro ao buscar dados do Sanity:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Função para buscar produtos com filtros
  const fetchProducts = async (filters = {}) => {
    try {
      let query = queries.allProducts
      
      // Aplicar filtros se necessário
      if (filters.serie) {
        query = `*[_type == "produto" && serie match "${filters.serie}*"] | order(_createdAt desc)`
      }
      
      if (filters.cor) {
        query = `*[_type == "produto" && cor match "${filters.cor}*"] | order(_createdAt desc)`
      }
      
      if (filters.search) {
        query = `*[_type == "produto" && (nome match "${filters.search}*" || codigo match "${filters.search}*")] | order(_createdAt desc)`
      }

      const data = await client.fetch(query)
      return data || []
    } catch (err) {
      console.error('Erro ao buscar produtos:', err)
      return []
    }
  }

  // Função para buscar posts com filtros
  const fetchPosts = async (filters = {}) => {
    try {
      let query = queries.allPosts
      
      if (filters.category) {
        query = `*[_type == "post" && "${filters.category}" in categorias[]->slug.current] | order(dataPublicacao desc)`
      }

      const data = await client.fetch(query)
      return data || []
    } catch (err) {
      console.error('Erro ao buscar posts:', err)
      return []
    }
  }

  // Função para enviar formulário de contato
  const submitContactForm = async (formData) => {
    try {
      const doc = {
        _type: 'contatoFormulario',
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone || '',
        mensagem: formData.mensagem,
        _createdAt: new Date().toISOString()
      }

      const result = await client.create(doc)
      return result
    } catch (err) {
      console.error('Erro ao enviar formulário:', err)
      throw err
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const value = {
    // Dados
    products,
    featuredProducts,
    posts,
    events,
    siteSettings,
    
    // Estados
    loading,
    error,
    
    // Funções
    fetchData,
    fetchProducts,
    fetchPosts,
    submitContactForm
  }

  return (
    <SanityContext.Provider value={value}>
      {children}
    </SanityContext.Provider>
  )
}

export default SanityContext

