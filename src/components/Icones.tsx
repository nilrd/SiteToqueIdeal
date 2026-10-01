// Ícones de traço fino, no peso do mockup.
type P = { className?: string }
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export function Seta({ className = 'h-3.5 w-3.5' }: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...base}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  )
}
export function IconeInstagram({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...base} strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
export function IconeWhatsApp({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...base} strokeWidth="1.7">
      <path d="M3.4 20.6l1.3-4.4A9 9 0 1 1 8 20z" />
      <path d="M8.1 7.5c.3-.3.6-.3.9-.1l1.3 2c.2.3.1.5-.1.8l-.7.8c.7 1.4 1.9 2.6 3.4 3.3l.8-.9c.2-.2.5-.3.8-.1l1.9 1.2c.3.2.4.5.3.8-.2.8-.9 1.4-1.7 1.4-3.2-.1-7.6-4.3-7.6-7.4 0-.7.3-1.3.7-1.8z" fill="currentColor" stroke="none" />
    </svg>
  )
}
export function IconeFolha({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} {...base}>
      <path d="M7 25C7 14 13 7 26 6c0 13-7 19-17 19" />
      <path d="M7 25c4-6 8-10 13-13" />
    </svg>
  )
}
export function IconeDiamante({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} {...base}>
      <path d="M9 7h14l5 6-12 13L4 13z" />
      <path d="M4 13h24M12 7l4 19 4-19M9 7l3 6M23 7l-3 6" />
    </svg>
  )
}
export function IconeLoja({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} {...base}>
      <path d="M5 13l11-8 11 8" />
      <path d="M8 11.5V26h16V11.5" />
      <path d="M13 26v-7h6v7" />
    </svg>
  )
}
