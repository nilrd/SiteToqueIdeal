import { createContext, useContext, useReducer, useEffect } from 'react'

const QuoteContext = createContext()

const quoteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.code === action.payload.code)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.code === action.payload.code
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.code !== action.payload.code)
      }
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.code === action.payload.code
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      }
    
    case 'CLEAR_QUOTE':
      return {
        ...state,
        items: []
      }
    
    case 'LOAD_FROM_STORAGE':
      return {
        ...state,
        items: action.payload || []
      }
    
    default:
      return state
  }
}

export const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, {
    items: []
  })

  // Carregar do localStorage na inicialização
  useEffect(() => {
    const savedQuote = localStorage.getItem('toqueIdealQuote')
    if (savedQuote) {
      try {
        const parsedQuote = JSON.parse(savedQuote)
        dispatch({ type: 'LOAD_FROM_STORAGE', payload: parsedQuote })
      } catch (error) {
        console.error('Erro ao carregar orçamento do localStorage:', error)
      }
    }
  }, [])

  // Salvar no localStorage sempre que o estado mudar
  useEffect(() => {
    localStorage.setItem('toqueIdealQuote', JSON.stringify(state.items))
  }, [state.items])

  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product })
  }

  const removeItem = (product) => {
    dispatch({ type: 'REMOVE_ITEM', payload: product })
  }

  const updateQuantity = (product, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...product, quantity } })
  }

  const clearQuote = () => {
    dispatch({ type: 'CLEAR_QUOTE' })
  }

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  const generateWhatsAppMessage = (customerInfo = {}) => {
    const { name = '', email = '', phone = '', message = '' } = customerInfo
    
    let whatsappMessage = `*Solicitação de Orçamento - Toque Ideal*\n\n`
    
    if (name) whatsappMessage += `*Nome:* ${name}\n`
    if (email) whatsappMessage += `*E-mail:* ${email}\n`
    if (phone) whatsappMessage += `*Telefone:* ${phone}\n`
    if (message) whatsappMessage += `*Mensagem:* ${message}\n`
    
    whatsappMessage += `\n*Produtos Selecionados:*\n`
    
    state.items.forEach((item, index) => {
      whatsappMessage += `${index + 1}. *${item.code}* - ${item.dimensions} (Qtd: ${item.quantity})\n`
    })
    
    whatsappMessage += `\n*Total de itens:* ${getTotalItems()}\n`
    whatsappMessage += `\nObrigado pelo interesse! Aguardo seu retorno com o orçamento.`
    
    return encodeURIComponent(whatsappMessage)
  }

  const sendWhatsAppQuote = (customerInfo = {}) => {
    const message = generateWhatsAppMessage(customerInfo)
    const whatsappNumber = '5511989999999' // Número do WhatsApp da empresa
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const value = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearQuote,
    getTotalItems,
    generateWhatsAppMessage,
    sendWhatsAppQuote
  }

  return (
    <QuoteContext.Provider value={value}>
      {children}
    </QuoteContext.Provider>
  )
}

export const useQuote = () => {
  const context = useContext(QuoteContext)
  if (!context) {
    throw new Error('useQuote deve ser usado dentro de um QuoteProvider')
  }
  return context
}

