import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'toque-ideal-cms',
  title: 'Toque Ideal CMS',

  projectId: '0i2zof35',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },

  // Configuração de estrutura personalizada
  structure: (S) =>
    S.list()
      .title('Conteúdo')
      .items([
        // Produtos
        S.listItem()
          .title('Produtos')
          .icon(() => '🛍️')
          .child(
            S.documentTypeList('produto')
              .title('Produtos')
              .filter('_type == "produto"')
          ),
        
        // Blog
        S.divider(),
        S.listItem()
          .title('Blog')
          .icon(() => '📝')
          .child(
            S.list()
              .title('Blog')
              .items([
                S.listItem()
                  .title('Posts')
                  .child(
                    S.documentTypeList('post')
                      .title('Posts')
                      .filter('_type == "post"')
                  ),
                S.listItem()
                  .title('Autores')
                  .child(
                    S.documentTypeList('autor')
                      .title('Autores')
                      .filter('_type == "autor"')
                  ),
                S.listItem()
                  .title('Categorias')
                  .child(
                    S.documentTypeList('categoria')
                      .title('Categorias')
                      .filter('_type == "categoria"')
                  ),
              ])
          ),
        
        // Eventos
        S.divider(),
        S.listItem()
          .title('Eventos')
          .icon(() => '📅')
          .child(
            S.documentTypeList('evento')
              .title('Eventos')
              .filter('_type == "evento"')
          ),
        
        // Configurações
        S.divider(),
        S.listItem()
          .title('Configurações Gerais')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('configuracoesGerais')
              .documentId('configuracoesGerais')
              .title('Configurações Gerais')
          ),
        
        // Formulários
        S.divider(),
        S.listItem()
          .title('Formulários de Contato')
          .icon(() => '📧')
          .child(
            S.documentTypeList('contatoFormulario')
              .title('Formulários de Contato')
              .filter('_type == "contatoFormulario"')
          ),
      ]),
})

