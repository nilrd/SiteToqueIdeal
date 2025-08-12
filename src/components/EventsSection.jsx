import { Button } from '@/components/ui/button'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import NewsletterForm from './NewsletterForm'
import QuoteForm from './QuoteForm'

const EventsSection = () => {
  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '1rem'
          }}>
            Feiras & Eventos
          </h2>
        </div>

        {/* Feiras & Eventos + Newsletter */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '3rem'
        }}
        className="flex-container"
        >
          {/* Left Side - Invitation */}
          <div style={{
            background: '#a7c6c2',
            padding: '1.5rem',
            borderRadius: '8px',
            flex: '1',
            color: '#333'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              VOCÊ É NOSSO
              <br />
              CONVIDADO
            </h3>
            <p style={{
              fontSize: '1.1rem',
              fontFamily: 'Lato, sans-serif',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              Participe dos principais eventos do setor de decoração 
              e conheça de perto nossas últimas criações.
            </p>
            <Link to="/eventos" style={{ textDecoration: 'none' }}>
              <Button 
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#005a55'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#006d67'}
              >
                Ver Eventos
                <ChevronRight style={{ width: '16px', height: '16px' }} />
              </Button>
            </Link>
          </div>

          {/* Right Side - Event Info */}
          <div style={{
            backgroundColor: '#f9fafb',
            padding: '1.5rem',
            borderRadius: '8px',
            flex: '1'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '1rem', 
              marginBottom: '1.5rem' 
            }}>
              <div style={{
                backgroundColor: '#e0f2f1',
                padding: '0.75rem',
                borderRadius: '8px'
              }}>
                <Calendar style={{ width: '24px', height: '24px', color: '#006d67' }} />
              </div>
              <div>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '0.5rem',
                  lineHeight: '1.3'
                }}>
                  Receba novidades
                  <br />
                  e lançamentos
                </h4>
                <p style={{
                  color: '#666',
                  fontFamily: 'Lato, sans-serif'
                }}>
                  da Toque Ideal
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                color: '#555',
                marginBottom: '1rem'
              }}>
                <MapPin style={{ width: '20px', height: '20px', color: '#006d67' }} />
                <span style={{ fontFamily: 'Lato, sans-serif' }}>Fimarmac</span>
                <ChevronRight style={{ width: '16px', height: '16px' }} />
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                <h5 style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '0.5rem'
                }}>
                  Próximo Evento: ABCasa Fair 2024
                </h5>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#666',
                  fontFamily: 'Lato, sans-serif',
                  lineHeight: '1.5'
                }}>
                  O maior evento de decoração do Brasil. 
                  Venha conhecer nossas novidades!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter + Quote Forms */}
        <div style={{
          display: 'flex',
          gap: '2rem'
        }}
        className="flex-container"
        >
          {/* Newsletter Form */}
          <div style={{ flex: '1' }}>
            <NewsletterForm />
          </div>

          {/* Quote Form */}
          <div style={{ flex: '1' }}>
            <QuoteForm />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 2rem 1rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          h3 {
            font-size: 1.5rem !important;
          }
          
          .flex-container {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  )
}

export default EventsSection

