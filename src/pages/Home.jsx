import { useState, useCallback } from 'react'
import { ArrowDown, Mail, MessageCircle, X } from 'lucide-react'

const COR = '#214567'
const COR_DARK = '#1a3650'

const produtos = [
  { imagem: '/6.jpg',           alt: 'Peca decorativa Toque Ideal' },
  { imagem: '/carousel-3.png',  alt: 'Peca decorativa Toque Ideal' },
  { imagem: '/pe\u00e7a (1).png', alt: 'Peca decorativa Toque Ideal' },
  { imagem: '/pe\u00e7a (3).png', alt: 'Peca decorativa Toque Ideal' },
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
  '/post_insta_8.png',
  '/post_insta (1).png',
]

const SectionLabel = ({ children, light }) => (
  <p style={{
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '600',
    fontSize: '0.72rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: light ? 'rgba(255,255,255,0.5)' : COR,
    marginBottom: '1rem',
  }}>
    {children}
  </p>
)

const SectionTitle = ({ children, light }) => (
  <h2 style={{
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    fontSize: 'clamp(1.75rem, 3vw, 2.4rem)',
    lineHeight: '1.2',
    color: light ? '#ffffff' : '#1a1a1a',
    marginBottom: '1.25rem',
  }}>
    {children}
  </h2>
)

const Divider = ({ light }) => (
  <div style={{ width: '36px', height: '2px', background: light ? 'rgba(255,255,255,0.4)' : COR, marginBottom: '2rem' }} />
)

/* ── LIGHTBOX ─────────────────────────────────────────────────────────────── */
const Lightbox = ({ src, alt, onClose }) => {
  if (!src) return null
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '1.5rem', right: '1.5rem',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.7)',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
      >
        <X size={28} />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '88vh',
          objectFit: 'contain',
          display: 'block',
          boxShadow: '0 8px 48px rgba(0,0,0,0.6)',
        }}
      />
    </div>
  )
}

/* ── HERO ─────────────────────────────────────────────────────────────────── */
const Hero = () => {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section style={{
      position: 'relative', height: '100vh', minHeight: '580px',
      display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/banner.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,20,30,0.55) 0%, rgba(10,20,30,0.65) 100%)',
      }} />
      <div style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center', padding: '0 1.5rem', maxWidth: '700px',
      }}>
        <p style={{
          fontFamily: 'Lato, sans-serif', fontWeight: '300', fontStyle: 'italic',
          fontSize: '0.95rem', letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.65)', marginBottom: '1.25rem', textTransform: 'uppercase',
        }}>
          Home Decor
        </p>
        <h1 style={{
          fontFamily: 'Montserrat, sans-serif', fontWeight: '700',
          fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: '1.15',
          color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.01em',
        }}>
          Pecas decorativas<br />em vidro que<br />transformam ambientes
        </h1>
        <p style={{
          fontFamily: 'Lato, sans-serif', fontWeight: '300', fontSize: '1rem',
          color: 'rgba(255,255,255,0.72)', lineHeight: '1.75',
          maxWidth: '460px', margin: '0 auto 2.5rem',
        }}>
          Ha mais de 10 anos criando objetos unicos que expressam estilo,
          personalidade e sofisticacao.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => scrollTo('contato')} style={{
            background: COR, color: '#fff', border: 'none',
            padding: '0.85rem 2rem', borderRadius: '2px',
            fontFamily: 'Montserrat, sans-serif', fontWeight: '600',
            fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
            transition: 'background 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = COR_DARK; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = COR; e.currentTarget.style.transform = 'none' }}>
            Solicitar Orcamento
          </button>
          <button onClick={() => scrollTo('produtos')} style={{
            background: 'transparent', color: '#fff',
            border: '1px solid rgba(255,255,255,0.5)',
            padding: '0.85rem 2rem', borderRadius: '2px',
            fontFamily: 'Montserrat, sans-serif', fontWeight: '500',
            fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
            transition: 'border-color 0.2s, background 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent' }}>
            Ver Produtos
          </button>
        </div>
      </div>
      <button onClick={() => scrollTo('sobre')} style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        background: 'none', border: 'none', cursor: 'pointer',
        color: 'rgba(255,255,255,0.45)', animation: 'bob 2s ease-in-out infinite',
      }}>
        <ArrowDown size={22} />
      </button>
      <style>{`@keyframes bob { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(7px)} }`}</style>
    </section>
  )
}

/* ── SOBRE ────────────────────────────────────────────────────────────────── */
const Sobre = () => (
  <section id="sobre" style={{ background: '#f8f7f4', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
    <div style={{
      maxWidth: '1100px', margin: '0 auto',
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '4rem', alignItems: 'center',
    }}>
      <div>
        <SectionLabel>Quem somos</SectionLabel>
        <SectionTitle>Arte em vidro.<br />Design com proposito.</SectionTitle>
        <Divider />
        <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: '#4a4a4a', lineHeight: '1.85', marginBottom: '1.25rem' }}>
          A Toque Ideal e uma fabricante especializada em pecas decorativas em vidro,
          desenvolvendo colecoes com padrao unico de modernidade, qualidade e design.
          Cada peca e tratada como exclusiva, pensada para atender clientes exigentes
          que buscam beleza, elegancia e funcionalidade em seus ambientes.
        </p>
        <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: '#4a4a4a', lineHeight: '1.85', marginBottom: '2.5rem' }}>
          Presente nas principais feiras do setor — como a ABCasa Fair — a empresa
          e referencia no segmento de home decor, levando as ultimas tendencias em
          design e decoracao ao mercado nacional.
        </p>
        <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
          {[['10+','Anos de mercado'],['100+','Modelos diferentes'],['ABCasa','Presenca nas feiras']].map(([num, label]) => (
            <div key={label}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: '1.75rem', color: COR, lineHeight: '1', marginBottom: '0.25rem' }}>{num}</p>
              <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.78rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '-14px', left: '-14px',
          width: '100%', height: '100%',
          border: `2px solid ${COR}`, borderRadius: '1px', opacity: 0.25,
        }} />
        <img
          src="/escultura.png"
          alt="Pecas decorativas Toque Ideal"
          style={{ width: '100%', aspectRatio: '4/5', objectFit: 'contain', display: 'block', position: 'relative', background: '#f0eeed' }}
        />
      </div>
    </div>
  </section>
)

/* ── PRODUTOS ─────────────────────────────────────────────────────────────── */
const Produtos = () => (
  <section id="produtos" style={{ background: '#ffffff', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <SectionLabel>Colecao</SectionLabel>
        <SectionTitle>Nossas Pecas</SectionTitle>
        <Divider />
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1rem',
      }}>
        {produtos.map((p, i) => (
          <div key={i} style={{
            aspectRatio: '1',
            overflow: 'hidden',
            background: '#f5f3f0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img
              src={p.imagem}
              alt={p.alt}
              style={{
                width: '100%', height: '100%',
                objectFit: 'contain',
                padding: '1.25rem',
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
      <p style={{ marginTop: '2rem', fontFamily: 'Lato, sans-serif', fontSize: '0.875rem', color: '#999', textAlign: 'center' }}>
        Selecao de pecas. Entre em contato para conhecer o catalogo completo.
      </p>
    </div>
  </section>
)

/* ── GALERIA ──────────────────────────────────────────────────────────────── */
const Galeria = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="galeria" style={{ background: '#f8f7f4', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
      <Lightbox src={lightbox} alt="Toque Ideal" onClose={() => setLightbox(null)} />
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <SectionLabel>Inspiracoes</SectionLabel>
          <SectionTitle>Galeria</SectionTitle>
          <Divider />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.6rem',
        }}>
          {galeriaFotos.map((src, i) => (
            <div
              key={i}
              onClick={() => setLightbox(src)}
              style={{
                aspectRatio: '1',
                overflow: 'hidden',
                background: '#e8e5e0',
                cursor: 'zoom-in',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <img
                src={src}
                alt={`Toque Ideal — foto ${i + 1}`}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* CTA Instagram */}
        <div style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {/* Texto + botão */}
          <div style={{ flex: '1 1 260px' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: '1.25rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>
              Siga-nos no Instagram
            </p>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.9rem', color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Acompanhe nossos lancamentos, ambientes decorados e novidades direto pelo Instagram.
            </p>
            <a
              href="https://www.instagram.com/toque.ideal"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                color: '#fff', textDecoration: 'none',
                padding: '0.75rem 1.5rem', borderRadius: '2px',
                fontFamily: 'Montserrat, sans-serif', fontWeight: '600',
                fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              @toque.ideal
            </a>
          </div>

          {/* Placeholder Instagram Card */}
          <div style={{ flex: '1 1 300px', maxWidth: '340px' }}>
            <div style={{
              border: '1px solid #e0ddd8',
              borderRadius: '4px', overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
            }}>
              {/* Header do card */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderBottom: '1px solid #f0ede8',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                  padding: '2px',
                  flexShrink: 0,
                }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src="/logo toque ideal (2).png" alt="Toque Ideal" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                </div>
                <div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '0.8rem', color: '#1a1a1a', lineHeight: '1' }}>toque.ideal</p>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.7rem', color: '#999', marginTop: '2px' }}>Home Decor</p>
                </div>
                <a href="https://www.instagram.com/toque.ideal" target="_blank" rel="noopener noreferrer"
                  style={{
                    marginLeft: 'auto',
                    fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '0.68rem',
                    color: '#3b82f6', textDecoration: 'none', letterSpacing: '0.04em',
                  }}
                >
                  Seguir
                </a>
              </div>
              {/* Imagem preview */}
              <div style={{ aspectRatio: '1', overflow: 'hidden', background: '#f5f3f0' }}>
                <img
                  src="/7.png"
                  alt="Instagram Toque Ideal"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Footer do card */}
              <div style={{ padding: '0.75rem 1rem' }}>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.82rem', color: '#1a1a1a', lineHeight: '1.5' }}>
                  <span style={{ fontWeight: '700' }}>toque.ideal</span>{' '}
                  Pecas decorativas em vidro com design exclusivo. ✨
                  <span style={{ color: '#3b82f6' }}> #homedecor #decoracao #vidro</span>
                </p>
                <a href="https://www.instagram.com/toque.ideal" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.75rem', color: '#999', textDecoration: 'none', display: 'block', marginTop: '0.4rem' }}
                >
                  Ver no Instagram →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CONTATO ──────────────────────────────────────────────────────────────── */
const Contato = () => {
  const [sent, setSent] = useState(false)
  const wpp = msg => `https://api.whatsapp.com/send?phone=5511967767364&text=${encodeURIComponent(msg)}`

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    padding: '0.7rem 0.9rem',
    border: '1px solid #ddd',
    borderRadius: '2px',
    fontFamily: 'Lato, sans-serif', fontSize: '0.9rem', color: '#1a1a1a',
    background: '#ffffff', outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: 'Montserrat, sans-serif', fontWeight: '600',
    fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#555', marginBottom: '0.4rem',
  }

  return (
    <section id="contato" style={{ background: '#214567', padding: 'clamp(3.5rem, 7vw, 6rem) 2rem' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionLabel light>Fale conosco</SectionLabel>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif', fontWeight: '700',
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#ffffff', marginBottom: '0.75rem',
          }}>Entre em Contato</h2>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7' }}>
            Solicite um orcamento ou tire suas duvidas. Retornamos em ate 24 horas uteis.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          {[
            { icon: <MessageCircle size={16} />, label: 'WhatsApp', value: '(11) 96776-7364', href: wpp('Ola! Gostaria de solicitar um orcamento.') },
            { icon: <Mail size={16} />, label: 'E-mail', value: 'comercial@toqueideal.com', href: 'mailto:comercial@toqueideal.com' },
          ].map(({ icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.875rem',
                textDecoration: 'none', padding: '1rem 1.25rem',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: '2px',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'transparent' }}
            >
              <span style={{ color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.1rem' }}>{label}</p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)' }}>{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Formulario */}
        <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '2px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '0.95rem', color: COR, marginBottom: '0.5rem' }}>Mensagem enviada.</p>
              <p style={{ fontFamily: 'Lato, sans-serif', color: '#888', fontSize: '0.875rem' }}>Retornaremos em breve.</p>
            </div>
          ) : (
            <form action="https://formsubmit.co/comercial@toqueideal.com" method="POST" onSubmit={() => setSent(true)}>
              <input type="hidden" name="_subject" value="Contato via site Toque Ideal" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={labelStyle}>Nome *</label>
                  <input type="text" name="nome" required style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = COR}
                    onBlur={e => e.currentTarget.style.borderColor = '#ddd'} />
                </div>
                <div>
                  <label style={labelStyle}>E-mail *</label>
                  <input type="email" name="email" required style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = COR}
                    onBlur={e => e.currentTarget.style.borderColor = '#ddd'} />
                </div>
                <div>
                  <label style={labelStyle}>Telefone</label>
                  <input type="tel" name="telefone" style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = COR}
                    onBlur={e => e.currentTarget.style.borderColor = '#ddd'} />
                </div>
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Mensagem *</label>
                <textarea name="mensagem" required rows={3} style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.currentTarget.style.borderColor = COR}
                  onBlur={e => e.currentTarget.style.borderColor = '#ddd'} />
              </div>
              <button type="submit" style={{
                background: COR, color: '#fff', border: 'none',
                padding: '0.85rem 2rem', borderRadius: '2px',
                fontFamily: 'Montserrat, sans-serif', fontWeight: '600',
                fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', width: '100%', transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = COR_DARK}
                onMouseLeave={e => e.currentTarget.style.background = COR}>
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ── PAGE ─────────────────────────────────────────────────────────────────── */
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
