import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { TOQUE } from '@/config/toque'
import './globals.css'

// A serifa clássica do catálogo nos títulos; um texto simples e leve no resto.
const garamond = localFont({
  src: [
    { path: './fontes/eb-garamond-latin-wght-normal.woff2', style: 'normal' },
    { path: './fontes/eb-garamond-latin-wght-italic.woff2', style: 'italic' },
  ],
  variable: '--font-garamond',
  weight: '400 800',
  display: 'swap',
})
const hanken = localFont({
  src: './fontes/hanken-grotesk-latin-wght-normal.woff2',
  variable: '--font-hanken',
  weight: '100 900',
  display: 'swap',
})

const DESCRICAO =
  'Peças decorativas em vidro com borda dourada: centros de mesa, bandejas, travessas e expositores de ágata. Atacado para lojas de decoração e presentes. Catálogo pelo WhatsApp.'

export const metadata: Metadata = {
  metadataBase: new URL(TOQUE.url),
  title: { default: 'Toque Ideal | Decoração em vidro para lojistas', template: '%s | Toque Ideal' },
  description: DESCRICAO,
  keywords: ['centro de mesa de vidro atacado', 'decoração em vidro atacado', 'bandeja espelhada atacado', 'expositor de ágata', 'fornecedor de decoração para lojas', 'Toque Ideal'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: TOQUE.nome,
    title: 'Toque Ideal | Decoração em vidro para lojistas',
    description: DESCRICAO,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Centro de mesa de vidro Toque Ideal' }],
  },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon-96.png', sizes: '96x96', type: 'image/png' }], apple: [{ url: '/apple-touch-icon.png' }] },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = { themeColor: '#efe6da' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${garamond.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  )
}
