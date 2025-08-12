import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/banner.jpg") center/cover',
        padding: '4rem 2rem',
        color: 'white',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {/* Content */}
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          lineHeight: '1.2',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          Decoração em vidro
          <br />
          que transforma
          <br />
          ambientes
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          fontFamily: 'Lato, sans-serif',
          marginBottom: '2rem',
          opacity: '0.9',
          lineHeight: '1.6',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          Há mais de 10 anos criando peças únicas que vão além da decoração: 
          são expressões de estilo, personalidade e sofisticação.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/catalogo" style={{ textDecoration: 'none' }}>
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
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#005a55'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#006d67'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              Veja o Catálogo
              <ChevronRight style={{ width: '20px', height: '20px' }} />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid white',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingTop: '8px'
        }}>
          <div style={{
            width: '4px',
            height: '12px',
            backgroundColor: 'white',
            borderRadius: '2px',
            animation: 'pulse 2s infinite'
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero

