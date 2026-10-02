# Toque Ideal — contexto completo do site

Leia este arquivo inteiro antes de mexer em qualquer coisa. Ele resume tudo o que já foi decidido, o que o dono do projeto aprovou e recusou, e o que falta.

## 1. O que é

- **Cliente:** Toque Ideal. Vende peças decorativas de vidro com borda dourada (centros de mesa, bandejas, travessas, caixinhas, borboletas e expositores de ágata).
- **Público do site:** **lojistas**, ou seja, venda no **atacado**. É o público da feira ABCasa Fair. O site não é loja virtual: a venda é pelo catálogo, que vai pelo WhatsApp.
- **Objetivo:** substituir o site antigo **toqueideal.com**, que tem fotos velhas e o azul que a marca abandonou. A identidade nova é creme, bronze e dourado, e o favicon também precisa ser trocado.
- **Quem desenvolve:** Agência JN (Nilson). O rodapé leva "Site por" com o **logo colorido da Agência JN** (`public/agencia-jn.png`), linkando para https://www.agenciajn.com.br.

## 2. Contatos (fonte única: `src/config/toque.ts`)

- WhatsApp: (11) 96578-6357 (link wa.me/5511965786357 com mensagem pronta de lojista)
- Instagram: @toque.ideal — https://www.instagram.com/toque.ideal/
- E-mail: comercial@toqueideal.com
- Frase da marca: "Design que transforma ambientes."

## 3. Tecnologia

- Next.js **16.2.7** (App Router), React 19, Tailwind CSS **v4** (`@theme inline` no `globals.css`), TypeScript.
- **As fontes ficam na própria pasta**, em `src/app/fontes`, e são carregadas com `next/font/local`: EB Garamond nos títulos e Hanken Grotesk no texto. **Não usar `next/font/google`**: a busca no Google já quebrou um build na Vercel em outro projeto.
- Comandos: `npm install`, `npm run dev` (desenvolvimento), `npm run build` seguido de `npm start` (produção local).
- **Ainda NÃO é repositório git e NÃO está publicado.** Faltam:
  1. `git init`
  2. criar o repositório no GitHub
  3. importar na Vercel
  4. apontar o domínio toqueideal.com. Ainda não sabemos onde o domínio está registrado; é preciso perguntar ao Nilson.

### Cores (tokens no `src/app/globals.css`)

| nome         | cor     | uso                      |
|--------------|---------|--------------------------|
| papel        | #efe6da | fundo principal (creme)  |
| papel-claro  | #f6f0e7 | faixas mais claras       |
| linho        | #e3d6c5 | bordas e divisões        |
| fumo         | #2b241e | texto principal          |
| fumo-suave   | #6b6056 | texto secundário         |
| ouro         | #b0823c | detalhes, linhas finas   |

### Arquivos

- `src/app/page.tsx`: a página inteira, que é uma página única só.
- `src/components/Cabecalho.tsx`: o menu superior.
  - Do lado esquerdo ficam o símbolo "T" e o nome TOQUE IDEAL.
  - Do lado direito ficam os links e os ícones do Instagram e do WhatsApp.
  - O menu fica fixo no topo, sobre uma faixa creme de 68px.
  - No celular vira um botão de 3 risquinhos, e o menu abre como gaveta pela direita.
- `src/components/Icones.tsx`: ícones de traço fino feitos à mão em SVG. Não usar biblioteca de ícones.
- `src/config/toque.ts`: contatos, itens do menu, coleções e fotos usadas, com tamanho e texto alternativo de cada uma.
- `public/fotos/*.webp`: as fotos já otimizadas.
- `public/simbolo.png`, `public/logo.png`, favicons, `public/og.jpg`: a marca.
- As pastas `public/pecas`, `public/cores` e `public/linhas` são **sobras de versões antigas**, sem uso. Podem ser apagadas.

## 4. Fotos

- **Pasta de origem:** `C:\Users\Pichau\Downloads\fotos toque ideal para o site criadas por ia`. As fotos foram geradas por IA a partir das peças reais.
- O site precisa **refletir essa pasta**. Quando o Nilson apaga uma foto de lá, ela sai do site também.
- **Conversão:** as fotos são convertidas para `.webp`, com cerca de 1450 px de largura e qualidade de 80 a 85.

### Fotos já convertidas

| arquivo                | o que mostra                                    | uso atual            |
|------------------------|--------------------------------------------------|----------------------|
| banner                 | peça bronze com colar, foto vertical 1060x1484   | topo                 |
| centro-ambar           | centro de mesa âmbar                             | coleção              |
| luxo-dourado           | bandejas                                         | coleção              |
| agata-natural          | expositores de ágata                             | coleção              |
| bronze-orquideas       | peça bronze com orquídeas                        | "A essência"         |
| incolor-orquideas      | peça incolor com orquídeas                       | "Detalhes"           |
| fume-reflexos          | peça fumê                                        | "Expressão"          |
| bandejas-spa           | bandejas, cena de spa                            | ainda não usada      |
| chocolate-orquideas    | peça chocolate com orquídeas                     | ainda não usada      |
| fendi-contas           | peça fendi com contas                            | ainda não usada      |
| folha-bronze           | folha de bronze                                  | ainda não usada      |
| preto-frutas           | peça preta com frutas                            | ainda não usada      |
| travessa-colar         | travessa com colar                               | ainda não usada      |

### Regra para gerar foto nova com IA

**Manter o mesmo ângulo de câmera e a mesma proporção da foto original da peça.** Quando o pedido muda o ângulo, a IA deforma a peça. O recorte para o site é feito depois, no próprio site. Prompts prontos estão em `PROMPTS-prontos-toque-ideal.md`, nesta pasta.

### Medidas reais de algumas peças (para os prompts)

| peça           | medida (cm) |
|----------------|-------------|
| 5100D          | 54x17       |
| 2804           | 88x43       |
| 5540D          | 110x40      |
| 7437D          | 51x23       |
| 5544D incolor  | 98x52       |

## 5. O que o dono APROVOU e o que RECUSOU (o mais importante)

### Aprovou

- Os mockups da pasta `mockups-aprovados/`.
- **Mockup A** (`mockup-A-topo-e-diferenciais.png`):
  - **topo com a foto ocupando a largura toda** e o texto em cima, na área clara;
  - em seguida, a **faixa com 3 diferenciais**, cada um com ícone fino.
  - Ele disse que esse layout "vale a pena investir".
- **Mockup B** (`mockup-B-detalhes-colecoes-rodape.png`):
  - "Detalhes que contam histórias", com texto e foto lado a lado;
  - **"Coleções em destaque"**: uma faixa embaixo com as peças lado a lado (Centros de mesa, Bandejas, Caixinhas…);
  - rodapé com o T, o nome, os links e os ícones.
- O termo "Vidro artesanal". Pode usar.
- O menu superior. Ele chegou a gostar do menu lateral, do mockup antigo, mas a versão final é com o **menu em cima**.
- Tom elegante e editorial, com bastante respiro: creme, bronze e dourado.

### Recusou (não repetir)

- Dizer **"feito à mão"** ou "artesanal" no sentido de feito à mão. É falso. "Vidro artesanal" pode.
- **Peças recortadas, sem fundo**, flutuando: ficou feio.
- Grade de "18 cores": confundia.
- Degradê ou véu escuro sobre a foto ("fade"): estragava a foto.
- **Texto em cima da peça** ou de parte movimentada da foto: o texto some.
- Foto do topo cortando a peça.
- Efeito de zoom na peça âmbar recortada.
- Fotos repetidas na página.
- Seção "Como fazer o pedido".
- Selo e botão que não combinavam entre si.
- Visual com **"cara de IA"**:
  - rótulos pequenos em maiúsculas em toda seção;
  - numeração 01/02/03;
  - setinha → em todo botão;
  - animação de surgir em tudo;
  - emoji.
- Rodapé "amador". Ele quer um rodapé caprichado, no estilo do mockup B, com o logo da Agência JN bem visível.

## 6. Situação atual (ver `estado-atual/`)

A página tem, nesta ordem:

1. **Topo:** texto à esquerda e a foto vertical (banner) inteira à direita.
2. **Nossas coleções:** 3 fotos.
3. **Três diferenciais:** Vidro artesanal, Acabamento dourado, Atacado para lojistas.
4. **A essência:** foto e texto.
5. **Detalhes que contam histórias:** texto e foto.
6. **Expressão do essencial:** foto grande e texto, com botão para pedir o catálogo de atacado.
7. **Rodapé.**

### Problemas que ele apontou na última revisão (01/10/2026)

1. **Topo em tela larga** (`problema-topo-tela-larga.png`): a foto é vertical, a tela é deitada, e sobra um vazio enorme no meio. **Solução combinada:**
   - o Nilson vai gerar uma **foto deitada de 2560x1440 (16:9)**;
   - a peça fica no terço da direita;
   - a esquerda fica com parede ou fundo liso e claro, uns 45% da largura, onde entra o texto;
   - mesma luz e mesmo cenário das outras fotos: travertino, luz dourada, creme.

   Com essa foto, o topo vira o do mockup A: foto em largura total e texto sobre a parte lisa. No celular, a mesma foto é cortada do lado da peça e o texto vai abaixo dela.
2. **Rodapé:** precisa ficar bem melhor, no estilo do mockup B.
3. **Coleções:** "faltou uma coleção". É preciso voltar a faixa "Coleções em destaque" lá embaixo, como no mockup B, com mais peças lado a lado.
4. Seguir **o layout dos mockups A e B** como base da página toda.

## 7. Como trabalhar com o Nilson

- **Responder sempre em português do Brasil.** Ele não lê inglês.
- Ele é exigente com visual. Antes de dizer que está pronto:
  - tirar print da página em vários tamanhos de tela;
  - testar no mínimo **1440x900, 1280x720, 1100x850, 390x844 e 360x740**;
  - mandar os prints junto.
- Nada de emoji no site.
- Seguir os mockups à risca. Quando houver conflito entre "boas práticas de design" e o mockup dele, **vale o mockup**.

## 8. Continuação com o Codex — 01/10/2026

Esta atualização registra as decisões posteriores ao texto acima:

- Nilson informou o repositório existente: https://github.com/nilrd/SiteToqueIdeal. Ele contém o projeto anterior em React/Vite. Esta pasta contém a nova versão em Next.js e ainda não está vinculada ao Git. A publicação e a atualização do repositório serão uma etapa posterior.
- Nilson retomou a preferência pelo **menu lateral no desktop** e autorizou desenvolver a proposta. O menu lateral aparece a partir de 1280px; entre 1024px e 1279px há menu superior; abaixo de 1024px há uma gaveta de navegação.
- Novo banner fornecido: `C:\Users\Pichau\Downloads\Refúgio Mediterrâneo em Luz Dourada (3).png`, de **1672x941**. Foi convertido sem recorte para `public/fotos/banner-horizontal.webp`. Não houve geração de imagem nem alteração da peça. A extremidade direita já está cortada na imagem enviada; o site não acrescenta cortes no desktop.
- No desktop, a foto acompanha a proporção original e o texto fica na área esquerda. No celular, há enquadramento à direita da foto e texto abaixo dela.
- Nova composição: banner, três diferenciais, "Detalhes que contam histórias", quatro coleções e rodapé com catálogo, contatos e logo colorido da Agência JN.
- As coleções atuais são **Centros de mesa, Bandejas, Travessas e Ágata natural**, todas com fotos disponíveis e sem repetição na página. Não foi encontrada foto de Caixinhas entre as imagens de origem; essa coleção depende de uma foto fornecida posteriormente.
- As fontes locais, os contatos centralizados e a venda no atacado pelo WhatsApp foram preservados.
- Prints de revisão e o relatório de verificação ficam em `_contexto/revisao/`. O script `scripts/verificar-site.cjs` verifica as cinco telas solicitadas, imagens, links, enquadramento e menu por teclado.

### Segunda revisão solicitada pelo Nilson

- Responsividade é prioridade: botão "Menu" visível, navegação por toque, teclado e Escape; a gaveta fecha ao mudar para a navegação superior a partir de 1024px.
- Corrigido o corte dos ícones na base da coluna lateral em janelas baixas (o problema foi reproduzido em 1333x599). O nome e os espaçamentos se adaptam à altura, mantendo os links acessíveis.
- "Explorar coleções" agora tem fundo branco translúcido e borda discreta. A solicitação foi para o botão; não há véu ou degradê cobrindo a imagem.
- "Quem somos" agora usa o conteúdo fornecido pelo Nilson: **Arte em vidro. Design com propósito.**, fabricação de peças decorativas, **15+ anos**, **100+ modelos** e presença na **ABCasa Fair**.
- Depois das coleções há "Novos tons para cada ambiente", com fotos de fumê e **marrom com borda dourada** ainda não usadas no restante da página. Nilson corrigiu a identificação da peça: é marrom, não chocolate. O arquivo `chocolate-orquideas.webp` conserva apenas o nome antigo; a configuração e os textos usam marrom.
- Rodapé compacto com marca, navegação e contatos; o convite para o catálogo está na nova seção. O logo da Agência JN passou de 132px para 112px. Ícones de WhatsApp e Instagram foram redesenhados.
- A verificação abrange agora **11 tamanhos**, incluindo as cinco telas originais, notebook com pouca altura, tablets, celular de 320px e orientação horizontal. Os prints são atualizados em `_contexto/revisao/`.

### Ajuste de direção visual para celular e favicon

- Nilson pediu uma versão móvel mais elegante, com composição própria. O banner móvel passou a usar foto quadrada enquadrada à direita, com um painel claro de título na área acima da peça; a descrição e o botão ficam logo abaixo. O painel não cobre o produto.
- No celular, as coleções são uma faixa horizontal com fotos maiores, deslizamento manual e indicação de que é possível deslizar. No desktop, continuam lado a lado.
- As duas fotos da seção "Novos tons" ficam maiores no celular, com o detalhe marrom alinhado à direita.
- O novo favicon é um monograma T em bronze sobre creme. A fonte é `public/favicon.svg`; os PNGs correspondentes e `src/app/icon.png` foram atualizados. `scripts/gerar-favicons.cjs` regenera as variantes.
- A prévia local usa `next dev` na porta 3010, com atualização automática e indicadores de desenvolvimento ocultos. Os registros ficam em `_contexto/revisao/servidor*.log`.
- Nilson esclareceu que a futura limpeza e publicação dizem respeito à **Vercel**, não ao Supabase. Nenhum projeto remoto foi excluído ou alterado nesta revisão.

### Publicação e troca de fotos — 01/10/2026

- O site foi publicado em https://toqueideal.com pelo repositório existente `nilrd/SiteToqueIdeal`, branch `master`. Esta pasta está vinculada ao Git; o histórico anterior foi preservado.
- Os deploys antigos da Vercel foram removidos, preservando o projeto, os domínios e a versão nova. Após a atualização do painel, o Toque Ideal passou de 4,77 GB para 5,82 MB de Deployment Storage. O indicador não atualizou imediatamente após as exclusões.
- Nilson reprovou a foto marrom com orquídeas. `public/fotos/chocolate-orquideas.webp` foi removida do projeto e substituída por `detalhe-bronze.webp`, a partir da foto enviada `Imagem do ChatGPT 1 de out. de 2026, 14_23_12.png`. A legenda agora é “Texturas em bronze.”.
- O banner atual é `banner-contas.webp`, convertido sem recorte ou alteração da peça a partir de `Bandeja Dourada com Contas de Madeira.png`, de 1672x941. O painel de título móvel foi reduzido para ficar acima da bandeja.
- Texto corrigido: “Composições para inspirar a sua vitrine e transformar os espaços de quem leva um toque ideal para a casa.”.
- Nilson autorizou commit, push e deploy das alterações. Arquivos de revisão e dependências ficam fora da publicação.
