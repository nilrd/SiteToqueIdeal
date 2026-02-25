import { useState } from 'react'
import { ArrowDown, Phone, Mail, MessageCircle, MapPin } from 'lucide-react'

/* ─────────────────── DATA ─────────────────── */

const produtos = [
  {
    codigo: '1782',
    nome: 'Conjunto Ondulado',
    cor: 'Mel',
    imagem: '/1782MEL.jpg',
  },
  {
    codigo: '1814',
    nome: 'Bandeja Organica',
    cor: 'Branco',
    imagem: '/1814BRANCO.jpg',
  },
  {
    codigo: '307',
    nome: 'Peca Decorativa',
    cor: 'Mel',
    imagem: '/307MEL.jpg',
  },
  {
    codigo: '800',
    nome: 'Folha Decorativa',
    cor: 'Mel',
    imagem: '/800MEL.jpg',
  },
]

const galeriaFotos = [
  '/7.png',
  '/8.png',
  '/fotosinstagram/post_insta_2.jpg',
  '/fotosinstagram/post_insta_3.jpg',
  '/fotosinstagram/post_insta_4.jpg',
  '/fotosinstagram/post_insta_5.jpg',
  '/fotosinstagram/post_insta_6.jpg',
  '/fotosinstagram/post_insta_9.png',
  '/fotosinstagram/post_insta_10.png',
  '/fotosinstagram/post_insta_11.png',
]

/* ─────────────────── HELPERS ─────────────────── */

const SectionLabel = ({ children }) => (
  <p style={{
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '600',
    fontSize: '0.72rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#006d67',
    marginBottom: '1rem',
  }}>
    {children}
  </p>
)

const SectionTitle = ({ children, light }) => (
  <h2 style={{
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
    lineHeight: '1.2',
    color: light ? '#ffffff' : '#1a1a1a',
    marginBottom: '1.5rem',
  }}>
    {children}
  </h2>
)

/* ─────────────────── SECTIONS ─────────────────── */

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '580px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,20,30,0.55) 0%, rgba(10,20,30,0.62) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '720px',
      }}>
        <p style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: '300',
          fontStyle: 'italic',
          fontSize: '1rem',
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '1.25rem',
          textTransform: 'uppercase',
        }}>
          Home Decor
        </p>
        <h1 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '700',
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          lineHeight: '1.15',
          color: '#ffffff',
          marginBottom: '1.5rem',
          letterSpacing: '-0.01em',
        }}>
          Pecas decorativas<br />em vidro que<br />transformam ambientes
        </h1>
        <p style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: '300',
          fontSize: '1.05rem',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: '1.7',
          marginBottom: '2.5rem',
          maxWidth: '480px',
          margin: '0 auto 2.5rem',
        }}>
          Ha mais de 10 anos criando objetos unicos que expressam estilo,
          personalidade e sofisticacao.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => scrollTo('contato')}
            style={{
              background: '#006d67',
              color: '#ffffff',
              border: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '2px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '0.82rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#005450'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#006d67'; e.currentTarget.style.transform = 'none' }}
          >
            Solicitar Orcamento
          </button>
          <button
            onClick={() => scrollTo('produtos')}
            style={{
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.5)',
              padding: '0.85rem 2rem',
              borderRadius: '2px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              fontSize: '0.82rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent' }}
          >
            Ver Produtos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('sobre')}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.5)',
          animation: 'bob 2s ease-in-out infinite',
        }}
      >
        <ArrowDown size={22} />
      </button>

      <style>{`
        @keyframes bob {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}

const Sobre = () => (
  <section id="sobre" style={{
    background: '#f8f7f4',
    padding: 'clamp(4rem, 8vw, 7rem) 2rem',
  }}>
    <div style={{
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '4rem',
      alignItems: 'center',
    }}>
      {/* Texto */}
      <div>
        <SectionLabel>Quem somos</SectionLabel>
        <SectionTitle>
          Arte em vidro.<br />Design com proposito.
        </SectionTitle>
        <div style={{
          width: '40px', height: '2px',
          background: '#006d67',
          marginBottom: '2rem',
        }} />
        <p style={{
          fontFamily: 'Lato, sans-serif',
          fontSize: '1rem',
          color: '#4a4a4a',
          lineHeight: '1.85',
          marginBottom: '1.25rem',
        }}>
          A Toque Ideal e uma fabricante especializada em pecas decorativas em vidro,
          desenvolvendo colecoes com padrao unico de modernidade, qualidade e design.
          Cada peca e tratada como exclusiva, pensada para atender clientes exigentes
          que buscam beleza, elegancia e funcionalidade em seus ambientes.
        </p>
        <p style={{
          fontFamily: 'Lato, sans-serif',
          fontSize: '1rem',
          color: '#4a4a4a',
          lineHeight: '1.85',
          marginBottom: '2.5rem',
        }}>
          Presente nas principais feiras do setor — como a ABCasa Fair — a empresa
          e referencia no segmento de home decor, sempre levando as ultimas
          tendencias em design e decoracao ao mercado nacional.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { num: '10+', label: 'Anos de mercado' },
            { num: '100+', label: 'Modelos diferentes' },
            { num: 'ABCasa', label: 'Presenca nas feiras' },
          ].map(({ num, label }) => (
            <div key={label}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '700',
                fontSize: '1.75rem',
                color: '#006d67',
                lineHeight: '1',
                marginBottom: '0.25rem',
              }}>
                {num}
              </p>
              <p style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.8rem',
                color: '#888',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Imagem */}
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '-16px', left: '-16px',
          width: '100%', height: '100%',
          border: '2px solid #006d67',
          borderRadius: '1px',
          opacity: 0.3,
        }} />
        <img
          src="/fotosinstagram/post_insta_4.jpg"
          alt="Pecas decorativas Toque Ideal"
          style={{
            width: '100%',
            aspectRatio: '4/5',
            objectFit: 'cover',
            display: 'block',
            position: 'relative',
          }}
        />
      </div>
    </div>
  </section>
)

const ProdutoCard = ({ produto }) => {
  const [hovered, setHovered] = useState(false)
  const scrollToContato = () => {
    const el = document.getElementById('contato')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#fff',
      }}
      onClick={scrollToContato}
    >
      <div style={{
        aspectRatio: '1',
        overflow: 'hidden',
        background: '#f5f3f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={produto.imagem}
          alt={produto.nome}
          style={{
            width: '100%', height: '100%',
            objectFit: 'contain',
            padding: '1.5rem',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      </div>

      {/* Overlay on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,109,103,0.88)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s',
        opacity: hovered ? 1 : 0,
      }}>
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '600',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '0.5rem',
        }}>
          Cod. {produto.codigo}
        </p>
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '700',
          fontSize: '1.1rem',
          color: '#ffffff',
          marginBottom: '1.5rem',
          textAlign: 'center',
          padding: '0 1rem',
        }}>
          {produto.nome}
        </p>
        <span style={{
          background: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.5)',
          color: '#ffffff',
          padding: '0.5rem 1.25rem',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '600',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          Solicitar Orcamento
        </span>
      </div>

      {/* Caption */}
      <div style={{
        padding: '1rem 0',
        borderBottom: '1px solid #f0eeeb',
      }}>
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '600',
          fontSize: '0.85rem',
          color: '#1a1a1a',
          marginBottom: '0.2rem',
        }}>
          {produto.nome}
        </p>
        <p style={{
          fontFamily: 'Lato, sans-serif',
          fontSize: '0.8rem',
          color: '#888',
        }}>
          {produto.cor} — Cod. {produto.codigo}
        </p>
      </div>
    </div>
  )
}

const Produtos = () => (
  <section id="produtos" style={{
    background: '#ffffff',
    padding: 'clamp(4rem, 8vw, 7rem) 2rem',
  }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <SectionLabel>Colecao</SectionLabel>
        <SectionTitle>Nossas Pecas</SectionTitle>
        <div style={{ width: '40px', height: '2px', background: '#006d67' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
        gap: '2rem',
      }}>
        {produtos.map(p => <ProdutoCard key={p.codigo} produto={p} />)}
      </div>

      <p style={{
        marginTop: '2.5rem',
        fontFamily: 'Lato, sans-serif',
        fontSize: '0.875rem',
        color: '#888',
        textAlign: 'center',
      }}>
        Esta e uma selecao de pecas. Entre em contato para conhecer o catalogo completo.
      </p>
    </div>
  </section>
)

const Galeria = () => (
  <section id="galeria" style={{
    background: '#f8f7f4',
    padding: 'clamp(4rem, 8vw, 7rem) 2rem',
  }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <SectionLabel>Inspiracoes</SectionLabel>
        <SectionTitle>Galeria</SectionTitle>
        <div style={{ width: '40px', height: '2px', background: '#006d67' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '0.75rem',
      }}>
        {galeriaFotos.map((src, i) => (
          <div key={i} style={{
            aspectRatio: '1',
            overflow: 'hidden',
            background: '#e8e6e2',
          }}>
            <img
              src={src}
              alt={`Toque Ideal — foto ${i + 1}`}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <a
          href="https://www.instagram.com/toque.ideal"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#006d67',
            textDecoration: 'none',
            borderBottom: '1px solid #006d67',
            paddingBottom: '2px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Ver mais no Instagram — @toqueideal
        </a>
      </div>
    </div>
  </section>
)

const Contato = () => {
  const [sent, setSent] = useState(false)
  const whatsapp = (msg) => `https://api.whatsapp.com/send?phone=5511967767364&text=${encodeURIComponent(msg)}`

  return (
    <section id="contato" style={{
      background: '#214567',
      padding: 'clamp(4rem, 8vw, 7rem) 2rem',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '4rem',
        alignItems: 'start',
      }}>
        {/* Info */}
        <div>
          <SectionLabel>Fale conosco</SectionLabel>
          <SectionTitle light>Entre em<br />Contato</SectionTitle>
          <div style={{ width: '40px', height: '2px', background: '#006d67', marginBottom: '2rem' }} />
          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: '1.8',
            marginBottom: '2.5rem',
          }}>
            Solicite um orcamento ou tire suas duvidas. Nossa equipe de vendas
            retorna em ate 24 horas uteis.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                icon: <MessageCircle size={16} />,
                label: 'WhatsApp',
                value: '(11) 96776-7364',
                href: whatsapp('Ola! Gostaria de solicitar um orcamento.'),
              },
              {
                icon: <Mail size={16} />,
                label: 'E-mail',
                value: 'comercial@toqueideal.com',
                href: 'mailto:comercial@toqueideal.com',
              },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  textDecoration: 'none',
                  padding: '1rem 1.25rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '2px',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#006d67'; e.currentTarget.style.background = 'rgba(0,109,103,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'transparent' }}
              >
                <span style={{ color: '#006d67', flexShrink: 0 }}>{icon}</span>
                <div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.15rem' }}>{label}</p>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <div style={{
          background: '#ffffff',
          padding: '2.5rem',
          borderRadius: '2px',
        }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                fontSize: '1rem',
                color: '#006d67',
                marginBottom: '0.75rem',
              }}>
                Mensagem enviada.
              </p>
              <p style={{ fontFamily: 'Lato, sans-serif', color: '#6b7280', fontSize: '0.9rem' }}>
                Retornaremos em breve.
              </p>
            </div>
          ) : (
            <form
              action="https://formsubmit.co/comercial@toqueideal.com"
              method="POST"
              onSubmit={() => setSent(true)}
            >
              <input type="hidden" name="_subject" value="Contato via site Toque Ideal" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { name: 'nome', label: 'Nome', type: 'text', required: true },
                  { name: 'email', label: 'E-mail', type: 'email', required: true },
                  { name: 'telefone', label: 'Telefone / WhatsApp', type: 'tel', required: false },
                ].map(({ name, label, type, required }) => (
                  <div key={name}>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '500',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#4a4a4a',
                      marginBottom: '0.5rem',
                    }}>
                      {label}{required && ' *'}
                    </label>
                    <input
                      type={type}
                      name={name}
                      required={required}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #e5e4e0',
                        borderRadius: '1px',
                        fontFamily: 'Lato, sans-serif',
                        fontSize: '0.9rem',
                        color: '#1a1a1a',
                        background: '#fafaf8',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = '#006d67'}
                      onBlur={e => e.currentTarget.style.borderColor = '#e5e4e0'}
                    />
                  </div>
                ))}

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '500',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#4a4a4a',
                    marginBottom: '0.5rem',
                  }}>
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #e5e4e0',
                      borderRadius: '1px',
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '0.9rem',
                      color: '#1a1a1a',
                      background: '#fafaf8',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = '#006d67'}
                    onBlur={e => e.currentTarget.style.borderColor = '#e5e4e0'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: '#006d67',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.9rem 2rem',
                    borderRadius: '2px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#005450'}
                  onMouseLeave={e => e.currentTarget.style.background = '#006d67'}
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PAGE ─────────────────── */

const Home = () => (
  <>
    <Hero />
    <Sobre />
    <Produtos />
    <Galeria />
    <Contato />
  </>
)

export default Home
