# Configuração do Sanity CMS - Toque Ideal

## Tokens Fornecidos:
- **Token Desenvolvedor:** `skDoF14Pc4T9bScnv5RaiMKlbe4as2JmiwVqAeFm1Mxczos8uYE5qBtrtLcHaqfJtYDX1UeMpbdls1Snz50bvGbq14ruGpYpmHVCBVdGkb2vlhKym8SjZunDzH0PZ3Y9SswuasAwDlhMuo44hlKhx6i1OodBKTCLH9JYVOHBFwN8g60J4WFL`
- **Token Studio:** `skcc7lLVRmuQnMXj2CmrAB8mdzq8iqjFbJo0aF7ZxkQ04bXoJahumezXjQBXwOiW3CNni6SjERAnqcP7ebfaor49exgLlndRqBKzc7DU7UNyLZ64MQZTcuUal47GL6FZm5KxtacwtobxALiNoY2w3nth5BxvWg7yc8NulpCNtv9b8Ed6HWeN`

## Configuração Atual:
- **Project ID:** `0i2zof35`
- **Dataset:** `production`

## Schemas Configurados:
1. **Produtos** - Catálogo de produtos em vidro
2. **Posts** - Blog (removido do site mas mantido no CMS)
3. **Autores** - Autores dos posts
4. **Categorias** - Categorias do blog
5. **Eventos** - Feiras e eventos
6. **Configurações Gerais** - Configurações do site
7. **Formulário de Contato** - Mensagens recebidas
8. **Trabalhe Conosco** - Candidaturas recebidas (NOVO)

## Funcionalidades Implementadas:
- ✅ Estrutura de schemas completa
- ✅ Formulário de contato funcional
- ✅ Formulário "Trabalhe Conosco" funcional
- ✅ Interface administrativa organizada
- ✅ Validações e campos obrigatórios
- ✅ Preview personalizado para cada tipo de documento

## Para Ativar o CMS:
1. Acesse o Sanity Studio em: `/studio`
2. Faça login com suas credenciais
3. Configure os tokens de API no ambiente
4. Teste o envio de formulários

## Próximos Passos:
1. Configurar variáveis de ambiente com os tokens
2. Testar conexão com o CMS
3. Migrar dados de produtos para o Sanity
4. Configurar webhooks para atualizações automáticas

## Estrutura de Arquivos:
- `src/sanity.config.js` - Configuração principal
- `src/lib/sanityClient.js` - Cliente e queries
- `src/contexts/SanityContext.jsx` - Contexto React
- `src/*.js` - Schemas individuais
- `src/index.js` - Exportação dos schemas

