# Site Toque Ideal

Site institucional da Toque Ideal - Decoração em vidro que transforma ambientes.

## Sobre o Projeto

Este é o site oficial da Toque Ideal, empresa especializada em decoração em vidro há mais de 5 anos. O site apresenta nosso catálogo completo de produtos e permite aos clientes solicitar orçamentos de forma prática e eficiente.

## Funcionalidades

- **Catálogo Completo**: Mais de 287 produtos organizados por séries
- **Sistema de Busca**: Busca por código ou dimensões dos produtos
- **Filtros Avançados**: Filtros por série de produtos
- **Orçamento Online**: Sistema completo de solicitação de orçamentos
- **Integração WhatsApp**: Envio direto de orçamentos via WhatsApp
- **Design Responsivo**: Otimizado para desktop e mobile

## Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework de CSS
- **Lucide React**: Ícones
- **React Router**: Navegação
- **Context API**: Gerenciamento de estado

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho e navegação
│   ├── Hero.jsx        # Banner principal
│   ├── ProductHighlights.jsx  # Destaques de produtos
│   ├── EventsSection.jsx      # Seção de eventos
│   └── Footer.jsx      # Rodapé
├── pages/              # Páginas principais
│   ├── Home.jsx        # Página inicial
│   ├── Catalog.jsx     # Catálogo de produtos
│   └── Quote.jsx       # Página de orçamento
├── context/            # Contextos React
│   └── QuoteContext.jsx # Gerenciamento do orçamento
└── assets/             # Recursos estáticos
    ├── products.json   # Dados dos produtos
    ├── fotos1/         # Fotos dos produtos
    ├── fotosinstagram/ # Fotos do Instagram
    └── logotoqueideal/ # Logos da empresa
```

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/nilrd/SiteToqueIdeal.git
cd SiteToqueIdeal
```

2. Instale as dependências:
```bash
npm install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
pnpm run dev
```

4. Acesse http://localhost:5173 no seu navegador

## Build para Produção

```bash
npm run build
# ou
pnpm run build
```

## Contato

- **Empresa**: Toque Ideal
- **Telefone**: (11) 98999-9999
- **E-mail**: contato@toqueideal.com
- **Endereço**: R. Iout Bernarda Pinto, 383 - São Paulo - SP

## Licença

© 2024 Toque Ideal. Todos os direitos reservados.

