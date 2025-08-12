import { useState } from 'react'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage('E-mail cadastrado com sucesso!')
      setEmail('')
    } catch (error) {
      setMessage('Erro ao cadastrar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(''), 3000)
    }
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
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Receba novidades
        <br />
        e lançamentos
        <br />
        da Toque Ideal
      </h3>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
            style={{
              borderRadius: '6px',
              padding: '0.7rem',
              border: '1px solid #ccc',
              width: '100%',
              fontFamily: 'Lato, sans-serif',
              fontSize: '1rem',
              outline: 'none',
              resize: 'vertical',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#006d67'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>

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
            opacity: isSubmitting ? 0.7 : 1
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) e.target.style.backgroundColor = '#005a55'
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) e.target.style.backgroundColor = '#006d67'
          }}
        >
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>

      {message && (
        <p style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          color: message.includes('sucesso') ? '#059669' : '#dc2626',
          fontFamily: 'Lato, sans-serif'
        }}>
          {message}
        </p>
      )}
    </div>
  )
}

export default NewsletterForm

