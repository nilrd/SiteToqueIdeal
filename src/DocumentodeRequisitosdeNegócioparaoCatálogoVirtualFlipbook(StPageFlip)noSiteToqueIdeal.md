# Documento de Requisitos de Negócio para o Catálogo Virtual Flipbook (StPageFlip) no Site Toque Ideal

**Autor:** Nilson da Silva Brites
**Data:** 2 de Agosto de 2025
**Versão:** 1.0

## 1. Introdução

Este documento detalha os requisitos de negócio e técnicos para a implementação de um catálogo virtual interativo no site da Toque Ideal, utilizando a biblioteca StPageFlip. O objetivo é aprimorar a experiência do usuário, oferecendo uma navegação mais imersiva e visualmente atraente, simulando um catálogo físico folheável. É crucial que este novo catálogo coexista com o catálogo atual e que ambos compartilhem as mesmas informações de produto, garantindo consistência de dados. O foco será em um layout aprimorado com fundos personalizados por página, proporcionando um impacto visual significativo.

## 2. Visão Geral do Projeto e Catálogo Atual

O site da Toque Ideal, desenvolvido em React, já possui um catálogo de produtos funcional, que atualmente exibe informações de produtos de forma estática (via `products.json`, mas em transição para Sanity CMS). Este catálogo permite busca, filtragem e solicitação de orçamentos. A proposta é complementar essa funcionalidade com um catálogo virtual folheável, que oferecerá uma experiência de navegação diferenciada, sem substituir o catálogo existente.

## 3. Requisitos de Negócio para o Catálogo Virtual Flipbook

Os requisitos de negócio para o catálogo virtual flipbook visam proporcionar uma experiência de usuário premium, alinhada com a identidade de "luxo e bom gosto" da Toque Ideal. A equipe administrativa deve ter controle sobre o conteúdo e a estética do flipbook.

### 3.1. Experiência do Usuário e Navegação

*   **Navegação Folheável**: O catálogo deve simular a experiência de folhear um livro físico, com animações suaves de virada de página.
*   **Acesso Intuitivo**: O catálogo flipbook deve ser facilmente acessível a partir da página inicial ou de uma seção dedicada no site.
*   **Compatibilidade**: Deve ser totalmente responsivo e funcionar perfeitamente em dispositivos desktop e mobile, adaptando-se a diferentes tamanhos de tela.
*   **Controles de Navegação**: Deve incluir controles claros para avançar/retroceder páginas, ir para a primeira/última página e, opcionalmente, um índice ou miniaturas para navegação rápida.
*   **Zoom (Opcional)**: Capacidade de dar zoom nas páginas para visualizar detalhes dos produtos.

### 3.2. Conteúdo e Layout Visual

*   **Conteúdo Dinâmico**: As informações dos produtos exibidas no flipbook (descrição, foto, cor, tamanho, código, nome, código da cor) devem ser puxadas dinamicamente do Sanity CMS, garantindo que o flipbook esteja sempre atualizado com o catálogo principal.
*   **Layout Aprimorado**: Cada página do flipbook deve ter um layout visualmente impactante, diferente do catálogo atual, com foco na apresentação estética dos produtos.
*   **Fundos Personalizados por Página**: É um requisito fundamental que cada página (ou par de páginas) do flipbook possa ter um plano de fundo personalizado. Esses fundos devem ser gerenciáveis via CMS e permitir a criação de ambientes e temas visuais distintos para cada seção ou produto.
*   **Imagens de Alta Qualidade**: As imagens dos produtos e dos fundos devem ser de alta resolução e otimizadas para a web, garantindo clareza e carregamento rápido.
*   **Elementos Interativos (Opcional)**: Possibilidade de incluir elementos interativos nas páginas, como links clicáveis para a página de detalhes do produto no catálogo principal ou para o formulário de orçamento.

### 3.3. Consistência de Dados

*   **Fonte Única de Verdade**: O Sanity CMS deve ser a fonte única de verdade para todas as informações de produto, tanto para o catálogo atual quanto para o flipbook. Isso garante que qualquer atualização feita no CMS se reflita em ambos os catálogos.
*   **Sincronização Automática**: As informações de produto devem ser sincronizadas automaticamente entre o CMS e o frontend do flipbook, sem a necessidade de intervenção manual.

### 3.4. Gerenciamento via CMS

O Sanity CMS deve permitir que a equipe administrativa gerencie o conteúdo do flipbook de forma autônoma:

*   **Seleção de Produtos**: Capacidade de selecionar quais produtos do catálogo principal serão incluídos no flipbook.
*   **Ordem das Páginas**: Capacidade de definir a ordem em que os produtos e outras informações aparecerão no flipbook.
*   **Upload e Atribuição de Fundos**: Capacidade de fazer upload de imagens de fundo e atribuí-las a páginas específicas do flipbook.
*   **Conteúdo Adicional**: Capacidade de adicionar páginas com conteúdo não-produto (ex: introdução, seções institucionais, informações de contato) ao flipbook, com seus próprios fundos e layouts.

## 4. Requisitos Técnicos e Implementação

### 4.1. Coexistência dos Catálogos

O catálogo atual e o novo catálogo flipbook devem coexistir no site. Isso implica em:

*   **Rotas Distintas**: Cada catálogo terá sua própria URL (ex: `/catalogo` para o atual e `/catalogo-virtual` para o flipbook).
*   **Componentes Separados**: O catálogo flipbook será implementado como um novo componente React, que será integrado ao site existente.

### 4.2. Integração com StPageFlip

A biblioteca `react-pageflip` (wrapper React para StPageFlip) será utilizada para criar a funcionalidade de flipbook.

*   **Instalação**: `npm install react-pageflip` ou `pnpm install react-pageflip`.
*   **Componente Flipbook**: Um componente React será criado para encapsular a lógica do `react-pageflip`.
*   **Renderização de Páginas**: Cada "página" do flipbook será um componente React que receberá os dados do produto e o URL do fundo da página via props. O `react-pageflip` permite renderizar conteúdo HTML dentro de suas páginas, o que é ideal para layouts complexos.

### 4.3. Consistência de Dados com Sanity CMS

Para garantir que ambos os catálogos (o atual e o flipbook) possuam as mesmas informações, o Sanity CMS será a fonte de dados primária.

*   **Schema `Produto`**: O schema `Produto` já definido no Sanity CMS (com campos para nome, código, descrição, fotos, cor, tamanho, etc.) será a base para o conteúdo de ambos os catálogos.
*   **Novo Schema para Páginas do Flipbook (Opcional, mas recomendado)**: Para gerenciar a ordem das páginas e os fundos personalizados, pode ser necessário um novo schema no Sanity, por exemplo, `PaginaFlipbook`. Este schema referenciaria os produtos existentes e teria um campo para a imagem de fundo da página.

    **Exemplo de Schema `PaginaFlipbook`:**

    ```javascript
    // schemas/paginaFlipbook.js
    export default {
      name: 'paginaFlipbook',
      title: 'Página do Catálogo Flipbook',
      type: 'document',
      fields: [
        {
          name: 'tituloPagina',
          title: 'Título da Página (Interno)',
          type: 'string',
          description: 'Título para identificação no CMS, não necessariamente exibido no frontend.'
        },
        {
          name: 'produtosNaPagina',
          title: 'Produtos nesta Página',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'produto' }] }],
          description: 'Selecione os produtos que aparecerão nesta página do flipbook.'
        },
        {
          name: 'fundoPagina',
          title: 'Imagem de Fundo da Página',
          type: 'image',
          description: 'Faça o upload da imagem de fundo para esta página do flipbook.',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'conteudoAdicional',
          title: 'Conteúdo Adicional (Texto/Imagens)',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image' }
          ],
          description: 'Conteúdo extra para páginas não dedicadas a produtos específicos (ex: introdução, informações institucionais).'
        },
        {
          name: 'ordem',
          title: 'Ordem da Página',
          type: 'number',
          description: 'Define a ordem de exibição desta página no flipbook. Menor número aparece primeiro.',
          validation: Rule => Rule.required().integer().min(1)
        }
      ],
      orderings: [
        {
          title: 'Ordem da Página',
          name: 'ordemAsc',
          by: [
            { field: 'ordem', direction: 'asc' }
          ]
        }
      ]
    }
    ```

    *Alternativa*: Se a complexidade de fundos por página for menor, pode-se adicionar um campo `fundo` diretamente no schema `Produto` e gerenciar a ordem dos produtos via um campo `ordem` no próprio `Produto` ou através de um array de referências a produtos em um schema `CatalogoFlipbook`.

*   **Consultas GROQ**: O frontend fará consultas ao Sanity para buscar as `PaginaFlipbook` ordenadas, e dentro delas, buscará os detalhes dos produtos referenciados e as URLs dos fundos.

### 4.4. Gestão de Fundos por Página

*   **Upload via CMS**: A equipe da Toque Ideal fará o upload das imagens de fundo diretamente no Sanity Studio, através do campo `fundoPagina` no schema `PaginaFlipbook`.
*   **Otimização**: O Sanity otimizará automaticamente essas imagens. No frontend, `urlFor` será usado para carregar as imagens de fundo de forma responsiva.
*   **Aplicação no Frontend**: O componente de página do flipbook aplicará a imagem de fundo como um estilo CSS (`background-image`) ou como um elemento `<img>` posicionado por trás do conteúdo do produto.

### 4.5. Considerações de Performance

*   **Carregamento Lazy-Load**: Implementar carregamento preguiçoso (lazy-load) para as imagens das páginas do flipbook para otimizar o tempo de carregamento inicial.
*   **Otimização de Imagens**: Garantir que todas as imagens (produtos e fundos) sejam otimizadas para a web, com tamanhos e formatos adequados.
*   **Virtualização (Opcional)**: Para catálogos muito grandes, considerar a virtualização de páginas para renderizar apenas as páginas visíveis ou próximas, economizando recursos.

## 5. Conclusão e Próximos Passos

A implementação de um catálogo virtual flipbook com StPageFlip trará um diferencial significativo para o site da Toque Ideal, oferecendo uma experiência de navegação rica e visualmente atraente. A integração com o Sanity CMS garantirá que o conteúdo seja facilmente gerenciável e consistente com o catálogo principal.

**Próximos Passos Sugeridos:**

1.  **Refinamento do Schema `PaginaFlipbook`**: Detalhar ainda mais o schema `PaginaFlipbook` no Sanity, considerando todas as nuances de layout e conteúdo por página.
2.  **Desenvolvimento do Componente Flipbook**: Implementar o componente React que utiliza `react-pageflip` e consome os dados do Sanity.
3.  **Design das Páginas**: Criar os designs para as diferentes páginas do flipbook, incluindo a disposição dos produtos e a integração dos fundos personalizados.
4.  **Testes de Usabilidade e Performance**: Realizar testes rigorosos para garantir uma experiência de usuário fluida e um bom desempenho em diferentes dispositivos.
5.  **Treinamento da Equipe**: Treinar a equipe administrativa sobre como gerenciar o conteúdo do catálogo flipbook no Sanity CMS.

