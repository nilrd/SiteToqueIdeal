// ─── Dados da Toque Ideal (um lugar só para trocar) ───────────────────────

export const TOQUE = {
  nome: 'Toque Ideal',
  url: 'https://www.toqueideal.com',
  whatsapp: '5511965786357',
  whatsappDisplay: '(11) 96578-6357',
  instagram: 'https://www.instagram.com/toque.ideal/',
  instagramHandle: '@toque.ideal',
  email: 'comercial@toqueideal.com',
  assinatura: 'Design que transforma ambientes.',
}

export function linkWhatsApp(mensagem = 'Olá! Tenho uma loja e quero receber o catálogo de atacado da Toque Ideal.'): string {
  return `https://wa.me/${TOQUE.whatsapp}?text=${encodeURIComponent(mensagem)}`
}

export const MENU = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#colecoes', rotulo: 'Coleções' },
  { href: '#sobre', rotulo: 'Sobre' },
  { href: '#contato', rotulo: 'Contato' },
]

type Foto = { src: string; alt: string; w: number; h: number }

export const COLECOES: { nome: string; img: Foto }[] = [
  { nome: 'Centros de mesa', img: { src: '/fotos/centro-ambar.webp', alt: 'Centro de mesa de vidro âmbar com borda dourada', w: 1446, h: 1087 } },
  { nome: 'Bandejas', img: { src: '/fotos/luxo-dourado.webp', alt: 'Bandejas espelhadas pretas e fendi com perfume, vela e café', w: 1448, h: 1086 } },
  { nome: 'Travessas', img: { src: '/fotos/travessa-colar.webp', alt: 'Travessa de vidro com borda dourada e colar sobre mesa de travertino', w: 1448, h: 1086 } },
  { nome: 'Ágata natural', img: { src: '/fotos/agata-natural.webp', alt: 'Expositores de acrílico com ágata natural e colares de pedra', w: 1448, h: 1086 } },
]

export const FOTOS = {
  banner: { src: '/fotos/banner-contas.webp', alt: 'Bandeja de vidro com borda dourada e contas de madeira sobre travertino, em um ambiente com luz dourada', w: 1672, h: 941 },
  essencia: { src: '/fotos/bronze-orquideas.webp', alt: 'Centro de mesa bronze com orquídeas brancas sobre mesa de travertino', w: 1448, h: 1086 },
  detalhes: { src: '/fotos/incolor-orquideas.webp', alt: 'Centro de mesa incolor com orquídeas brancas', w: 1448, h: 1086 },
  nude: { src: '/fotos/nude-orquideas.webp', alt: 'Centro de mesa em vidro nude com orquídeas brancas sobre travertino', w: 1448, h: 1086 },
  bronze: { src: '/fotos/detalhe-bronze.webp', alt: 'Detalhe da textura de uma peça de vidro bronze sobre travertino sob luz dourada', w: 1448, h: 1086 },
  marrom: { src: '/fotos/marrom-orquideas.webp', alt: 'Detalhe de uma peça em vidro marrom com borda dourada e orquídeas brancas', w: 1429, h: 1101 },
  fendi: { src: '/fotos/fendi-contas.webp', alt: 'Peça em vidro fendi com contas de madeira sobre uma mesa de travertino', w: 1447, h: 1087 },
  preto: { src: '/fotos/preto-frutas.webp', alt: 'Centro de mesa em vidro preto com peras, uvas, figos e limões', w: 1448, h: 1086 },
  bandejas: { src: '/fotos/bandejas-spa.webp', alt: 'Composição com bandejas de borda dourada, difusor, vela, toalha e café', w: 1450, h: 1036 },
}

export const AMBIENTES = [
  { foto: FOTOS.nude, legenda: 'A delicadeza do nude.' },
  { foto: FOTOS.bronze, legenda: 'Texturas em bronze.' },
  { foto: FOTOS.marrom, legenda: 'Marrom com borda dourada.' },
  { foto: FOTOS.fendi, legenda: 'A sutileza do fendi.' },
  { foto: FOTOS.preto, legenda: 'A presença do preto.' },
  { foto: FOTOS.bandejas, legenda: 'Bandejas para compor.' },
]
