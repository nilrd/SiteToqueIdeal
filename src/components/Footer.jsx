import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactInfo, generateWhatsAppLink, generateEmailLink } from '../data/contacts'

const Footer = () => {
  return (
    <footer style={{
      background: '#214567',
      color: 'white',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Logo and Company Info */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <img 
                src="/LOGO_BRANCA.png" 
                alt="Toque Ideal Logo" 
                style={{ height: '32px', width: 'auto', marginRight: '12px' }}
              />
              <h3 style={{
                fontSize: '1.25rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
                color: 'white'
              }}>
                TOQUE IDEAL
              </h3>
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: '#cccccc',
              fontFamily: 'Lato, sans-serif',
              lineHeight: '1.6'
            }}>
              Há mais de 10 anos criando peças únicas em vidro que transformam ambientes 
              e expressam personalidade com qualidade e sofisticação.
            </p>
          </div>

          {/* Contact Info */}
          <div style={{ textAlign: 'left' }}>
            <h3 style={{
              fontSize: '1.125rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Contato
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone style={{ width: '20px', height: '20px', color: '#cccccc' }} />
                <a 
                  href={generateWhatsAppLink("Olá! Gostaria de falar sobre o telefone.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  {contactInfo.phoneFormatted}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail style={{ width: '20px', height: '20px', color: '#cccccc' }} />
                <a 
                  href={generateEmailLink("Contato via Site Toque Ideal")}
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  {contactInfo.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MessageCircle style={{ width: '20px', height: '20px', color: '#25d366' }} />
                <a 
                  href={contactInfo.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ textAlign: 'left' }}>
            <h3 style={{
              fontSize: '1.125rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Links Rápidos
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link 
                to="/" 
                style={{
                  fontFamily: 'Lato, sans-serif',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Home
              </Link>
              <Link 
                to="/catalogo" 
                style={{
                  fontFamily: 'Lato, sans-serif',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Catálogo
              </Link>
              <Link 
                to="/sobre-nos" 
                style={{
                  fontFamily: 'Lato, sans-serif',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/eventos" 
                style={{
                  fontFamily: 'Lato, sans-serif',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Feiras & Eventos
              </Link>
              <Link 
                to="/trabalhe-conosco" 
                style={{
                  fontFamily: 'Lato, sans-serif',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Trabalhe Conosco
              </Link>
              <Link 
                to="/contato" 
                style={{
                  fontFamily: 'Lato, sans-serif',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div style={{ textAlign: 'left' }}>
            <h3 style={{
              fontSize: '1.125rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Redes Sociais
            </h3>
            <div style={{
              display: 'inline-flex',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <a 
                href={contactInfo.socialMedia.instagram.url} 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#004d47',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e1306c'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#004d47'}
                aria-label="Instagram"
              >
                <Instagram style={{ width: '20px', height: '20px' }} />
              </a>
              <a 
                href={contactInfo.socialMedia.facebook.url} 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#004d47',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1877f2'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#004d47'}
                aria-label="Facebook"
              >
                <Facebook style={{ width: '20px', height: '20px' }} />
              </a>
              <a 
                href={contactInfo.whatsapp.url} 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#004d47',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#25d366'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#004d47'}
                aria-label="WhatsApp"
              >
                <MessageCircle style={{ width: '20px', height: '20px' }} />
              </a>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#cccccc', fontFamily: 'Lato, sans-serif' }}>
              <p style={{ marginBottom: '0.5rem' }}>Siga-nos nas redes sociais:</p>
              <p style={{ marginBottom: '0.25rem' }}>
                Instagram: <a 
                  href={contactInfo.socialMedia.instagram.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    textDecoration: 'underline',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  {contactInfo.socialMedia.instagram.handle}
                </a>
              </p>
              <p>
                Facebook: <a 
                  href={contactInfo.socialMedia.facebook.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    textDecoration: 'underline',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#cccccc'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  {contactInfo.socialMedia.facebook.handle}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #666',
          marginTop: '2rem',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '0.875rem',
            color: '#cccccc',
            fontFamily: 'Lato, sans-serif'
          }}>
            <p>&copy; 2024 Toque Ideal. Todos os direitos reservados.</p>
            <p style={{ marginTop: '0.25rem' }}>
              Desenvolvido com <span style={{ color: '#ef4444' }}>❤️</span> para transformar ambientes através do vidro.
            </p>
          </div>
        </div>
      </div>

      {/* Media Queries para Responsividade */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            padding: 1.5rem 1rem !important;
          }
          
          footer > div > div {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          
          footer > div > div > div {
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer

