import { useState } from 'react'

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    pedido: '',
    vaso: '',
    dimensao: '',
    colecao: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage('Orçamento solicitado com sucesso!')
      setFormData({
        pedido: '',
        vaso: '',
        dimensao: '',
        colecao: ''
      })
    } catch (error) {
      setMessage('Erro ao enviar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(''), 3000)
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
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '8px',
      border: '1px solid #e5e7eb'
    }}>
      <h3 style={{
        fontSize: '1.5rem',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        Solicite seu Orçamento
      </h3>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            color: '#333',
            fontSize: '0.875rem'
          }}>
            Pedido
          </label>
          <input
            type="text"
            name="pedido"
            placeholder="Vaso"
            value={formData.pedido}
            onChange={handleChange}
            style={{
              borderRadius: '6px',
              padding: '0.7rem',
              border: '1px solid #ccc',
              width: '100%',
              fontFamily: 'Lato, sans-serif',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#006d67'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            color: '#333',
            fontSize: '0.875rem'
          }}>
            Dimensão
          </label>
          <input
            type="text"
            name="dimensao"
            placeholder="20 cm x 8 m"
            value={formData.dimensao}
            onChange={handleChange}
            style={{
              borderRadius: '6px',
              padding: '0.7rem',
              border: '1px solid #ccc',
              width: '100%',
              fontFamily: 'Lato, sans-serif',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#006d67'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            color: '#333',
            fontSize: '0.875rem'
          }}>
            Coleção
          </label>
          <input
            type="text"
            name="colecao"
            placeholder="30 cm x 0 m"
            value={formData.colecao}
            onChange={handleChange}
            style={{
              borderRadius: '6px',
              padding: '0.7rem',
              border: '1px solid #ccc',
              width: '100%',
              fontFamily: 'Lato, sans-serif',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#006d67'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              background: '#006d67',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              width: '100%',
              transition: 'background-color 0.3s ease',
              opacity: isSubmitting ? 0.7 : 1,
              marginTop: '0.5rem'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) e.target.style.backgroundColor = '#005a55'
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) e.target.style.backgroundColor = '#006d67'
            }}
          >
            {isSubmitting ? 'Enviando...' : 'Adicionar ao orçamento'}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppQuote}
            style={{
              background: '#006d67',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              width: '100%',
              transition: 'background-color 0.3s ease',
              marginTop: '0.5rem'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#005a55'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#006d67'}
          >
            Enviar por WhatsApp
          </button>
        </div>
      </form>

      {message && (
        <p style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          color: message.includes('sucesso') ? '#059669' : '#dc2626',
          fontFamily: 'Lato, sans-serif',
          marginTop: '1rem'
        }}>
          {message}
        </p>
      )}
    </div>
  )
}

export default QuoteForm

