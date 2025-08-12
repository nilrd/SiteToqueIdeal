import { useState } from 'react'

const AlignedFormsSection = () => {
  // Newsletter Form State
  const [email, setEmail] = useState('')
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)

  // Quote Form State
  const [formData, setFormData] = useState({
    pedido: '',
    vaso: '',
    dimensao: '',
    colecao: ''
  })
  const [isQuoteSubmitting, setIsQuoteSubmitting] = useState(false)
  const [quoteMessage, setQuoteMessage] = useState('')

  // Newsletter Form Handlers
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setIsNewsletterSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setNewsletterMessage('E-mail cadastrado com sucesso!')
      setEmail('')
    } catch (error) {
      setNewsletterMessage('Erro ao cadastrar. Tente novamente.')
    } finally {
      setIsNewsletterSubmitting(false)
      setTimeout(() => setNewsletterMessage(''), 3000)
    }
  }

  // Quote Form Handlers
  const handleQuoteChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleQuoteSubmit = async (e) => {
    e.preventDefault()
    setIsQuoteSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setQuoteMessage('Orçamento solicitado com sucesso!')
      setFormData({
        pedido: '',
        vaso: '',
        dimensao: '',
        colecao: ''
      })
    } catch (error) {
      setQuoteMessage('Erro ao enviar. Tente novamente.')
    } finally {
      setIsQuoteSubmitting(false)
      setTimeout(() => setQuoteMessage(''), 3000)
    }
  }

  const handleWhatsAppQuote = () => {
    const message = `Olá! Gostaria de solicitar um orçamento com as seguintes informações:
    
Pedido: ${formData.pedido || 'Não informado'}
Vaso: ${formData.vaso || 'Não informado'}
Dimensão: ${formData.dimensao || 'Não informado'}
Coleção: ${formData.colecao || 'Não informado'}

Aguardo retorno. Obrigado!`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511967767364&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div style={{
      padding: '3rem 1rem',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Newsletter Form */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '500px'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            color: '#214567',
            marginBottom: '1rem',
            textAlign: 'center',
            lineHeight: '1.3'
          }}>
            Receba novidades
            <br />
            e lançamentos
            <br />
            da Toque Ideal
          </h3>

          <form onSubmit={handleNewsletterSubmit} style={{ 
            marginBottom: '1rem',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  borderRadius: '8px',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  width: '100%',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#C8A882'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
              <textarea
                placeholder="Deixe uma mensagem (opcional)"
                rows="4"
                style={{
                  borderRadius: '8px',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  width: '100%',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease',
                  minHeight: '100px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#C8A882'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <button
              type="submit"
              disabled={isNewsletterSubmitting}
              style={{
                background: '#C8A882',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: isNewsletterSubmitting ? 'not-allowed' : 'pointer',
                width: '100%',
                transition: 'background-color 0.3s ease',
                opacity: isNewsletterSubmitting ? 0.7 : 1,
                marginTop: 'auto'
              }}
              onMouseEnter={(e) => {
                if (!isNewsletterSubmitting) e.target.style.backgroundColor = '#8B7355'
              }}
              onMouseLeave={(e) => {
                if (!isNewsletterSubmitting) e.target.style.backgroundColor = '#C8A882'
              }}
            >
              {isNewsletterSubmitting ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>

          {newsletterMessage && (
            <p style={{
              textAlign: 'center',
              fontSize: '0.875rem',
              color: newsletterMessage.includes('sucesso') ? '#6B8E5A' : '#dc2626',
              fontFamily: 'Lato, sans-serif'
            }}>
              {newsletterMessage}
            </p>
          )}
        </div>

        {/* Quote Form */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '500px'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            color: '#214567',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Solicite seu Orçamento
          </h3>

          <form onSubmit={handleQuoteSubmit} style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#214567',
                fontSize: '0.875rem'
              }}>
                Pedido
              </label>
              <input
                type="text"
                name="pedido"
                placeholder="Ex: Vaso decorativo"
                value={formData.pedido}
                onChange={handleQuoteChange}
                style={{
                  borderRadius: '8px',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  width: '100%',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#C8A882'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#214567',
                fontSize: '0.875rem'
              }}>
                Dimensão
              </label>
              <input
                type="text"
                name="dimensao"
                placeholder="Ex: 20 cm x 8 cm"
                value={formData.dimensao}
                onChange={handleQuoteChange}
                style={{
                  borderRadius: '8px',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  width: '100%',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#C8A882'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#214567',
                fontSize: '0.875rem'
              }}>
                Coleção/Cor
              </label>
              <input
                type="text"
                name="colecao"
                placeholder="Ex: Branco, Mel, Turquesa"
                value={formData.colecao}
                onChange={handleQuoteChange}
                style={{
                  borderRadius: '8px',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  width: '100%',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#C8A882'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem',
              marginTop: 'auto'
            }}>
              <button
                type="submit"
                disabled={isQuoteSubmitting}
                style={{
                  background: '#C8A882',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: isQuoteSubmitting ? 'not-allowed' : 'pointer',
                  width: '100%',
                  transition: 'background-color 0.3s ease',
                  opacity: isQuoteSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isQuoteSubmitting) e.target.style.backgroundColor = '#8B7355'
                }}
                onMouseLeave={(e) => {
                  if (!isQuoteSubmitting) e.target.style.backgroundColor = '#C8A882'
                }}
              >
                {isQuoteSubmitting ? 'Enviando...' : 'Adicionar ao orçamento'}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppQuote}
                style={{
                  background: '#6B8E5A',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#5A7A49'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#6B8E5A'}
              >
                Enviar por WhatsApp
              </button>
            </div>
          </form>

          {quoteMessage && (
            <p style={{
              textAlign: 'center',
              fontSize: '0.875rem',
              color: quoteMessage.includes('sucesso') ? '#6B8E5A' : '#dc2626',
              fontFamily: 'Lato, sans-serif',
              marginTop: '1rem'
            }}>
              {quoteMessage}
            </p>
          )}
        </div>
      </div>

      {/* CSS responsivo específico */}
      <style jsx>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          div[style*="minHeight: '500px'"] {
            min-height: auto !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="padding: '3rem 1rem'"] {
            padding: 2rem 1rem !important;
          }
          
          div[style*="fontSize: '1.5rem'"] {
            font-size: 1.25rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: '2rem'"] {
            padding: 1.5rem !important;
          }
          
          div[style*="fontSize: '1.5rem'"] {
            font-size: 1.125rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default AlignedFormsSection

