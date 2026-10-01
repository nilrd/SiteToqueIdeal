# Toque Ideal

Site institucional para lojistas, com catálogo solicitado pelo WhatsApp. A versão atual usa Next.js, React, TypeScript, Tailwind e fontes locais.

Antes de editar o site, leia `_contexto/LEIA-PRIMEIRO.md`, incluindo a atualização da seção 8.

## Desenvolvimento local

```sh
npm install
npm run dev
```

## Produção local

```sh
npm run build
npm start -- --hostname 127.0.0.1 --port 3010
```

O site fica em http://127.0.0.1:3010.

## Fotos e contatos

- Os contatos e as fotos em uso estão em `src/config/toque.ts`.
- O banner fornecido pelo cliente está em `public/fotos/banner-horizontal.webp`.
- As fotos de coleção ficam em `public/fotos/`.
- Ao remover ou substituir uma foto de origem, atualize os arquivos públicos e a configuração antes de publicar. Não existe sincronização automática com a pasta Downloads.
- A coleção de Caixinhas depende de uma foto; a quarta coleção da revisão atual é Travessas.

## Revisão visual

Os prints das telas 1440x900, 1280x720, 1100x850, 390x844 e 360x740 ficam em `_contexto/revisao/`.

Com Playwright e Chrome disponíveis no ambiente, rode `node scripts/verificar-site.cjs` para repetir a verificação local. Se o Playwright estiver em uma pasta externa, aponte `NODE_PATH` para ela. A URL pode ser definida com `TOQUE_TEST_URL` e o navegador com `TOQUE_BROWSER_CHANNEL`.

## Publicação

O repositório existente é https://github.com/nilrd/SiteToqueIdeal e contém a versão anterior em React/Vite. Esta pasta é a versão nova em Next.js. Antes de atualizar o repositório e publicar, preservar o histórico e ajustar o projeto da Vercel para Next.js. Fazer a revisão visual local antes da publicação.
