# Documento de Requisitos de Negócio para Implementação de CMS (Sanity) no Site Toque Ideal

**Autor:** Nilson da Silva Brites
**Data:** 2 de Agosto de 2025
**Versão:** 1.0

## 1. Introdução

Este documento detalha os requisitos de negócio e técnicos para a implementação de um Content Management System (CMS) robusto, especificamente o Sanity CMS, no site da Toque Ideal. O objetivo principal é capacitar a equipe administrativa da Toque Ideal a gerenciar de forma autônoma todo o conteúdo dinâmico do site, incluindo catálogo de produtos, blog, banners, textos institucionais e informações de contato, sem a necessidade de intervenção constante de desenvolvedores. O documento também aborda aspectos de hospedagem, otimização de custos, gestão de usuários e um manual de uso simplificado.

## 2. Visão Geral do Projeto Atual (Site Toque Ideal)

O site atual da Toque Ideal é um projeto desenvolvido em React 18, utilizando Vite para build, Tailwind CSS para estilização, Lucide React para ícones, React Router para navegação e Context API para gerenciamento de estado. Atualmente, o catálogo de produtos é carregado a partir de um arquivo `products.json` estático, e não há uma seção de blog dinâmica.

**Funcionalidades Atuais:**
*   Catálogo de produtos com mais de 287 itens.
*   Sistema de busca por código ou dimensões.
*   Filtros por série de produtos.
*   Sistema de solicitação de orçamentos online.
*   Integração para envio de orçamentos via WhatsApp.
*   Design responsivo para desktop e mobile.

**Necessidade de CMS:**
A principal motivação para a implementação do CMS é a necessidade de dinamizar o conteúdo e permitir que a equipe da Toque Ideal tenha controle total sobre as atualizações, sem depender de um desenvolvedor para cada alteração. Isso inclui a gestão do catálogo de produtos, a criação de um blog, e a atualização de elementos visuais e textuais em todo o site.

## 3. Requisitos de Negócio e Funcionalidades do CMS

Os requisitos de negócio para o CMS são centrados na autonomia e facilidade de uso para a equipe administrativa da Toque Ideal. As funcionalidades devem cobrir todas as áreas do site que necessitam de atualização frequente ou dinâmica.

### 3.1. Gerenciamento do Catálogo de Produtos

O catálogo de produtos é a funcionalidade central do site. O CMS deve permitir o gerenciamento completo dos produtos com as seguintes informações:

*   **Adição de Novos Produtos**: Capacidade de adicionar novos produtos ao catálogo.
*   **Edição de Produtos Existentes**: Capacidade de modificar qualquer informação de um produto já cadastrado.
*   **Exclusão de Produtos**: Capacidade de remover produtos do catálogo.
*   **Campos de Produto**: Para cada produto, o CMS deve permitir o cadastro das seguintes informações de forma clara e intuitiva:
    *   **Nome**: Nome completo do produto (ex: "Espelho Decorativo Onda").
    *   **Código**: Código único de identificação do produto (ex: "1234-56"). Deve ser obrigatório e único.
    *   **Descrição**: Texto detalhado sobre o produto, suas características e benefícios.
    *   **Fotos**: Upload de múltiplas imagens para cada produto, permitindo diferentes ângulos e detalhes. O CMS deve suportar otimização de imagens (compressão, redimensionamento).
    *   **Cor**: Nome da cor do produto (ex: "Bronze", "Grafite", "Mel", "Preto", "Turquesa", "Verde", "Vermelho", "Prata", "Âmbar", "Branco").
    *   **Código da Cor**: Campo opcional para um código interno da cor, se aplicável.
    *   **Tamanho/Dimensões**: Dimensões do produto (ex: "40x22cm", "35x35cm").
    *   **Preço (Opcional)**: Campo numérico para o preço do produto, caso seja necessário exibi-lo no futuro ou utilizá-lo em cálculos de orçamento.
    *   **Série**: Categoria ou série a qual o produto pertence (ex: "Série Clássica", "Série Moderna").
    *   **Destaque**: Um campo booleano para marcar produtos que devem aparecer em seções de destaque na página inicial ou em outras áreas promocionais.
*   **Organização**: Capacidade de organizar produtos por séries e aplicar filtros para facilitar a busca no painel administrativo.

### 3.2. Gerenciamento do Blog

A implementação de um blog dinâmico é um requisito para a estratégia de conteúdo da Toque Ideal. O CMS deve permitir:

*   **Criação de Novos Posts**: Capacidade de escrever e publicar novos artigos.
*   **Edição de Posts Existentes**: Capacidade de modificar o conteúdo de posts já publicados.
*   **Exclusão de Posts**: Capacidade de remover posts do blog.
*   **Campos de Post**: Para cada post, o CMS deve permitir o cadastro de:
    *   **Título**: Título principal do artigo.
    *   **Conteúdo Rico**: Editor de texto que suporte formatação (negrito, itálico, listas, cabeçalhos), inserção de imagens e, se necessário, vídeos.
    *   **Imagem Principal/Capa**: Imagem de destaque para o post.
    *   **Autor**: Seleção de um autor pré-cadastrado ou criação de um novo.
    *   **Categorias**: Atribuição de categorias para organizar os posts.
    *   **Data de Publicação**: Data e hora da publicação.
    *   **Resumo**: Um breve resumo do post para exibição em listagens.
    *   **Posicionamento na Página**: Capacidade de definir a ordem de exibição dos posts, permitindo destacar posts específicos na página principal do blog ou em outras seções (ex: "Destaque 1", "Destaque 2", "Normal").
*   **Gerenciamento de Autores e Categorias**: Painéis separados para adicionar, editar e remover autores e categorias do blog.

### 3.3. Gerenciamento de Conteúdo Geral e Institucional

Diversos elementos do site que não são produtos ou posts de blog também precisam ser gerenciáveis:

*   **Logo da Empresa**: Upload e atualização do logo principal do site.
*   **Banners da Página Inicial**: Gerenciamento de múltiplos banners, incluindo upload de imagem, título, subtítulo, texto do botão e link. Capacidade de reordenar os banners.
*   **Textos Institucionais**: Edição de textos para seções como "Sobre Nós", "Contato", "Missão", "Valores", etc.
*   **Informações de Contato**: Atualização de telefone, e-mail, endereço e outros dados de contato.
*   **Links do Rodapé**: Gerenciamento de links úteis e links para redes sociais no rodapé do site (Facebook, Instagram, WhatsApp, etc.), incluindo o texto de direitos autorais.
*   **Cores do Tema (Opcional)**: Capacidade de definir cores primárias, secundárias e de texto para o site, permitindo pequenas alterações visuais sem intervenção de código. Isso pode ser implementado via variáveis CSS que o CMS atualiza.

### 3.4. Gerenciamento de Eventos e Newsletter

*   **Eventos**: Cadastro de eventos com data, local, descrição e imagem. Capacidade de exibir eventos futuros e passados.
*   **Newsletter**: Gerenciamento de inscrições na newsletter e, se aplicável, integração com serviços de e-mail marketing.

### 3.5. Formulários e Integrações

*   **Formulário Trabalhe Conosco**: Recebimento e organização de currículos enviados através do site. O CMS deve permitir visualizar e gerenciar esses envios.
*   **Formulário de Contato**: Gerenciamento das mensagens enviadas pelo formulário de contato. O formulário deve incluir campos claros para identificar se o cliente veio através de um representante.
*   **Integrações de Marketing**: O CMS deve facilitar a integração com:
    *   Google Analytics (para rastreamento de tráfego).
    *   Google Ads e Facebook Ads (para rastreamento de campanhas e conversões).
    *   WhatsApp API (para comunicação direta).

## 4. Detalhes Técnicos da Implementação do Sanity CMS

### 4.1. Arquitetura Headless com Sanity e React

A escolha do Sanity como CMS headless é estratégica para o projeto, pois ele se integra perfeitamente com o frontend React existente. A arquitetura será a seguinte:

*   **Sanity Studio (Backend de Conteúdo)**: Uma aplicação React separada, hospedada no Sanity Cloud, que serve como painel administrativo. É onde a equipe da Toque Ideal irá criar e gerenciar todo o conteúdo.
*   **Sanity Content Lake (Banco de Dados de Conteúdo)**: Onde todos os dados estruturados (produtos, posts, configurações) são armazenados. O Sanity oferece um banco de dados otimizado para conteúdo, com APIs em tempo real.
*   **APIs do Sanity (GROQ/GraphQL)**: O Sanity expõe o conteúdo através de APIs. O frontend React fará requisições a essas APIs para buscar os dados necessários.
*   **Frontend React (Site Toque Ideal)**: A aplicação web existente, que será adaptada para consumir os dados dinamicamente do Sanity, em vez de arquivos estáticos ou conteúdo hardcoded.

### 4.2. Modelagem de Schemas no Sanity

A modelagem de schemas é a base da organização do conteúdo no Sanity. Cada tipo de conteúdo (Produto, Post, etc.) terá um schema definido em JavaScript no Sanity Studio. Isso garante a estrutura e validação dos dados.

**Exemplos de Schemas (detalhados na análise anterior):**

*   **`produto.js`**: Para o catálogo de produtos, com campos para nome, código, descrição, imagens, variações (cor, código da cor, tamanho, preço), série e destaque.
*   **`post.js`**: Para o blog, com campos para título, slug, autor, imagem principal, categorias, data de publicação, conteúdo rico, resumo e posicionamento na página.
*   **`autor.js`**: Para os autores do blog (nome, biografia, imagem).
*   **`categoria.js`**: Para as categorias do blog (título, slug).
*   **`configuracoesGerais.js`**: Um schema singleton para gerenciar o logo, banners da home, textos institucionais, cores do tema e configurações do rodapé.
*   **`evento.js`**: Para a gestão de eventos (título, data, local, descrição, imagem).
*   **`contatoFormulario.js`**: Para os envios de formulários de contato e trabalhe conosco.

### 4.3. Integração do Frontend React com Sanity

1.  **Instalação de Dependências**: Adicionar `@sanity/client`, `@sanity/image-url` e `@sanity/block-content-to-react` ao projeto React.
2.  **Configuração do Cliente Sanity**: Criar um arquivo `sanityClient.js` no frontend para inicializar o cliente Sanity com o Project ID e Dataset corretos. Utilizar variáveis de ambiente para essas credenciais.
3.  **Busca de Dados**: Modificar os componentes React para fazer requisições assíncronas às APIs do Sanity usando o cliente configurado. Utilizar consultas GROQ para buscar os dados de forma eficiente.
4.  **Renderização de Imagens**: Usar `@sanity/image-url` para gerar URLs otimizadas para as imagens do Sanity, garantindo que as imagens sejam carregadas de forma eficiente e responsiva.
5.  **Renderização de Conteúdo Rico**: Para o conteúdo do blog (campo `body` do tipo `block`), utilizar `@sanity/block-content-to-react` para converter os blocos do Sanity em componentes React renderizáveis.
6.  **Gerenciamento de Estado Global**: Para dados como `configuracoesGerais`, utilizar o React Context API para buscar os dados uma única vez no componente raiz da aplicação e disponibilizá-los para todos os componentes filhos, evitando requisições duplicadas.

### 4.4. Otimização de Custos e Hospedagem (Vercel com Git)

O Sanity CMS oferece um plano gratuito generoso que atende à maioria das necessidades iniciais, incluindo um número razoável de requisições de API e armazenamento. O site frontend já está hospedado no Vercel, que também possui um plano gratuito robusto.

**Estratégias para Otimização de Custos:**

*   **Sanity Free Tier**: Utilizar o plano gratuito do Sanity para o Content Lake e o Sanity Studio. Monitorar o uso de requisições de API e armazenamento para garantir que permaneça dentro dos limites do plano gratuito.
*   **Vercel Free Tier**: O Vercel oferece hospedagem gratuita para projetos Git, com integração contínua e deploy automático. O site da Toque Ideal já se beneficia disso.
*   **Otimização de Imagens**: O Sanity otimiza imagens automaticamente. No frontend, usar `urlFor().width().height().url()` para carregar imagens no tamanho correto, reduzindo o tráfego de dados e melhorando a performance, o que também contribui para a otimização de custos de CDN.
*   **Cache de Dados**: Implementar cache no frontend para dados que não mudam com frequência, reduzindo o número de requisições ao Sanity API.
*   **Webhooks para Rebuilds (Opcional)**: Configurar webhooks no Sanity para acionar um rebuild automático do site no Vercel sempre que o conteúdo for atualizado. Isso garante que o site esteja sempre atualizado sem a necessidade de deploy manual, mas pode gerar custos adicionais no Vercel se houver muitos rebuilds. Para otimização de custos, pode-se optar por rebuilds manuais ou agendados.

**Hospedagem no Vercel com Git:**

O site frontend já está configurado para deploy contínuo via Vercel a partir do repositório Git. A integração com o Sanity não altera essa configuração fundamental. O frontend continuará sendo implantado no Vercel, e ele simplesmente passará a buscar seus dados do Sanity API em vez de arquivos estáticos.

**Configuração de Variáveis de Ambiente no Vercel:**

Para conectar o frontend ao Sanity, será necessário configurar variáveis de ambiente no Vercel para o `SANITY_PROJECT_ID` e `SANITY_DATASET`. Essas variáveis são acessíveis no código React e garantem que as credenciais do Sanity não sejam expostas publicamente no código-fonte.

### 4.5. Gestão de Usuários e Permissões no Sanity CMS

O Sanity oferece um sistema de gerenciamento de usuários e permissões que permite controlar quem pode acessar o Sanity Studio e quais ações podem realizar.

*   **Administrador (Super Admin)**: O usuário que criar o projeto Sanity será o administrador principal. Ele terá acesso total para gerenciar schemas, usuários, datasets e todo o conteúdo. Este usuário será responsável por convidar outros membros da equipe.
*   **Usuários Cadastrados pelo Admin**: O administrador pode convidar outros membros da equipe para o projeto Sanity. Ao convidar, é possível atribuir diferentes papéis (roles) para controlar o nível de acesso:
    *   **Editor**: Pode criar, editar e publicar conteúdo.
    *   **Viewer**: Pode apenas visualizar o conteúdo.
    *   **Custom Roles**: É possível criar papéis personalizados com permissões mais granulares, se necessário (ex: um usuário que só pode gerenciar produtos, mas não posts de blog).

**Fluxo de Cadastro de Usuário pelo Admin:**

1.  O administrador faz login no Sanity Studio.
2.  Navega até a seção de "Manage Project" (gerenciar projeto) no painel do Sanity (fora do Studio, no site `manage.sanity.io`).
3.  Na seção de membros, o administrador pode convidar novos usuários por e-mail.
4.  Ao convidar, o administrador seleciona o papel (role) do novo usuário.
5.  O novo usuário receberá um convite por e-mail para criar uma conta Sanity (se ainda não tiver) e acessar o Sanity Studio.

É importante que a equipe da Toque Ideal defina claramente os papéis e responsabilidades de cada membro que terá acesso ao CMS para garantir a segurança e a integridade do conteúdo.

## 5. Manual de Uso Simplificado do Sanity CMS para a Equipe Toque Ideal

Este manual oferece uma visão geral de como a equipe administrativa da Toque Ideal irá interagir com o Sanity CMS para gerenciar o conteúdo do site.

### 5.1. Acessando o Sanity Studio

1.  **URL de Acesso**: Você receberá uma URL específica para o Sanity Studio da Toque Ideal (ex: `https://toqueideal.sanity.studio/`).
2.  **Login**: Acesse a URL e faça login com sua conta Sanity (Google, GitHub ou e-mail/senha).

### 5.2. Visão Geral do Painel

Ao fazer login, você verá o painel principal do Sanity Studio. No lado esquerdo, haverá uma barra de navegação com os diferentes tipos de conteúdo que você pode gerenciar:

*   **Produtos**: Para gerenciar o catálogo.
*   **Posts (Blog)**: Para gerenciar os artigos do blog.
*   **Autores**: Para gerenciar os autores dos posts.
*   **Categorias**: Para gerenciar as categorias do blog.
*   **Configurações Gerais do Site**: Para gerenciar o logo, banners, textos institucionais, cores e rodapé.
*   **Eventos**: Para gerenciar a agenda de eventos.
*   **Envios de Formulários**: Para visualizar os dados dos formulários de contato e Trabalhe Conosco.

### 5.3. Gerenciando Produtos

1.  **Para Adicionar um Novo Produto**: Clique em "Produtos" na barra lateral e depois no botão "+ New Document" (ou similar).
    *   Preencha o **Nome**, **Código**, **Descrição**.
    *   Em **Fotos do Produto**, clique em "Add item" para fazer upload de imagens. Você pode arrastar e soltar ou selecionar arquivos do seu computador.
    *   Em **Variações**, clique em "Add item" para adicionar uma nova variação. Preencha **Cor**, **Código da Cor**, **Dimensões/Tamanho** e **Preço** (se aplicável).
    *   Selecione a **Série** do produto.
    *   Marque "Produto em Destaque?" se desejar que ele apareça em seções especiais.
    *   Clique em "Publish" para salvar e publicar o produto.
2.  **Para Editar um Produto Existente**: Clique em "Produtos" e selecione o produto que deseja editar na lista. Faça as alterações e clique em "Publish" para salvar.
3.  **Para Excluir um Produto**: Selecione o produto, clique no ícone de lixeira ou na opção "Delete" e confirme.

### 5.4. Gerenciando Posts do Blog

1.  **Para Criar um Novo Post**: Clique em "Posts" e depois em "+ New Document".
    *   Preencha o **Título**.
    *   O **Slug** será gerado automaticamente, mas você pode editá-lo.
    *   Selecione o **Autor** e as **Categorias**.
    *   Faça upload da **Imagem Principal**.
    *   Defina a **Data de Publicação**.
    *   No campo **Conteúdo do Post**, use o editor de texto rico para escrever seu artigo. Você pode adicionar títulos, parágrafos, listas e inserir imagens clicando no ícone de imagem.
    *   Escreva um breve **Resumo**.
    *   Em **Posição na Página**, você pode escolher um destaque (1, 2, 3) ou deixar como "Normal" para ordem cronológica.
    *   Clique em "Publish" para salvar e publicar.
2.  **Para Editar um Post Existente**: Clique em "Posts" e selecione o post na lista. Faça as alterações e clique em "Publish".
3.  **Para Excluir um Post**: Selecione o post, clique em "Delete" e confirme.

### 5.5. Gerenciando Configurações Gerais do Site

1.  Clique em "Configurações Gerais do Site" na barra lateral. Haverá apenas um documento.
2.  Você pode:
    *   Fazer upload de um novo **Logo da Empresa**.
    *   Adicionar, editar ou reordenar os **Banners da Página Inicial**.
    *   Editar os **Textos Institucionais** (Sobre Nós, Contato, etc.).
    *   Ajustar as **Cores do Tema** (se implementado).
    *   Modificar as informações do **Rodapé** (texto de direitos autorais, links úteis, redes sociais).
3.  Clique em "Publish" para salvar as alterações.

### 5.6. Dicas Importantes

*   **Salvar Automaticamente**: O Sanity salva suas alterações automaticamente enquanto você trabalha.
*   **Publicar**: Lembre-se de clicar em "Publish" para que suas alterações fiquem visíveis no site ao vivo.
*   **Pré-visualização**: Se configurado, você poderá pré-visualizar suas alterações antes de publicar.
*   **Ajuda**: Se tiver dúvidas, consulte o administrador do sistema ou a documentação do Sanity.

## 6. Mockups da Interface do CMS (Sanity Studio)

Não é necessário criar mockups personalizados para a interface do CMS, pois o Sanity Studio já oferece uma interface administrativa robusta e altamente personalizável através da definição de schemas. A aparência do painel será diretamente influenciada pelos schemas que serão implementados, como os exemplos fornecidos nas seções 3 e 4. O Sanity Studio é intuitivo e segue padrões de UI/UX modernos, facilitando o uso pela equipe da Toque Ideal.

**Exemplos Visuais do Sanity Studio (referência):**

*   **Listagem de Documentos**: Uma lista clara de todos os produtos, posts, etc., com opções de busca e filtro.
*   **Formulário de Edição**: Um formulário gerado dinamicamente com base no schema, onde cada campo (texto, imagem, array de variações) terá um controle apropriado para edição.
*   **Editor de Texto Rico**: Um editor visual para o conteúdo do blog, permitindo formatação e inserção de mídia.

Esses elementos visuais são padrão no Sanity Studio e serão adaptados automaticamente com base nos schemas definidos para o projeto Toque Ideal.

## 7. Conclusão e Próximos Passos

Este documento detalha os requisitos de negócio e técnicos para a implementação do Sanity CMS no site da Toque Ideal. A adoção de um CMS headless como o Sanity é a solução ideal para garantir a autonomia da equipe administrativa, permitindo o gerenciamento eficiente e dinâmico de todo o conteúdo do site, desde o catálogo de produtos até o blog e as configurações gerais.

**Próximos Passos Sugeridos para Implementação:**

1.  **Configuração do Projeto Sanity**: Criar o projeto Sanity no Sanity Cloud e configurar o Sanity Studio localmente.
2.  **Definição e Implementação dos Schemas**: Desenvolver todos os schemas de conteúdo (Produto, Post, ConfiguracoesGerais, etc.) no Sanity Studio, conforme detalhado neste documento.
3.  **Migração de Dados Existentes**: Desenvolver e executar scripts para migrar os dados existentes (ex: `products.json`) para o Sanity Content Lake.
4.  **Adaptação do Frontend React**: Modificar o código do site React para consumir os dados do Sanity API, atualizando os componentes para renderizar o conteúdo dinamicamente.
5.  **Testes Abrangentes**: Realizar testes funcionais e de integração para garantir que todas as funcionalidades do CMS e do site funcionem conforme o esperado, e que o layout permaneça responsivo.
6.  **Treinamento da Equipe**: Oferecer treinamento à equipe administrativa da Toque Ideal sobre como usar o Sanity Studio, utilizando o manual de uso simplificado como base.
7.  **Monitoramento e Otimização**: Monitorar o uso do Sanity e Vercel para garantir a otimização de custos e performance.

Com esta abordagem, o site da Toque Ideal se tornará uma plataforma dinâmica, escalável e totalmente gerenciável, alinhada com as melhores práticas de desenvolvimento web moderno.

