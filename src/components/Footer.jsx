import { Phone, Mail, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  const whatsapp = 'https://api.whatsapp.com/send?phone=5511967767364'

  return (
    <footer style={{
      background: '#214567',
      color: '#ffffff',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Coluna 1: Logo + Descricao */}
          <div>
            <img
              src="/logo toque ideal (3).png"
              alt="Toque Ideal"
              style={{ height: '32px', width: 'auto', marginBottom: '1.25rem' }}
            />
            <p style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: '1.75',
              maxWidth: '260px',
            }}>
              Fabricante de pecas decorativas em vidro. Ha mais de 10 anos
              transformando ambientes com design, sofisticacao e qualidade.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '1.5rem',
            }}>
              Contato
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  textDecoration: 'none', color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'Lato, sans-serif', fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              >
                <Phone size={15} style={{ opacity: 0.6 }} />
                (11) 96776-7364
              </a>
              <a href="mailto:comercial@toqueideal.com"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  textDecoration: 'none', color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'Lato, sans-serif', fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              >
                <Mail size={15} style={{ opacity: 0.6 }} />
                comercial@toqueideal.com
              </a>
            </div>
          </div>

          {/* Coluna 3: Redes sociais */}
          <div>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '1.5rem',
            }}>
              Redes Sociais
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { href: 'https://www.instagram.com/toqueideal', icon: <Instagram size={20} />, label: 'Instagram' },
                { href: 'https://www.facebook.com/toqueideall', icon: <Facebook size={20} />, label: 'Facebook' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '40px', height: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '2px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#214567'
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.background = '#214567'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Linha divisora + copyright */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.35)',
          }}>
            {new Date().getFullYear()} Toque Ideal. Todos os direitos reservados.
          </p>
          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.2)',
          }}>
            Decoracao em vidro artesanal
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
