export default {
  name: 'post',
  title: 'Post do Blog',
  type: 'document',
  icon: () => '📝',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().min(5).max(100)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'resumo',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().min(50).max(300),
      description: 'Breve resumo do post para exibição em listagens'
    },
    {
      name: 'imagemPrincipal',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette']
      },
      fields: [
        {
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
          description: 'Importante para SEO e acessibilidade'
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'conteudo',
      title: 'Conteúdo',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Citação', value: 'blockquote'},
          ],
          lists: [
            {title: 'Marcadores', value: 'bullet'},
            {title: 'Numerada', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Negrito', value: 'strong'},
              {title: 'Itálico', value: 'em'},
              {title: 'Sublinhado', value: 'underline'}
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Abrir em nova aba',
                    initialValue: true
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {
            hotspot: true,
            metadata: ['blurhash', 'lqip', 'palette']
          },
          fields: [
            {
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Legenda',
              type: 'string'
            }
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'autor',
      title: 'Autor',
      type: 'reference',
      to: [{type: 'autor'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'categorias',
      title: 'Categorias',
      type: 'array',
      of: [{type: 'reference', to: {type: 'categoria'}}],
      validation: Rule => Rule.min(1).max(3)
    },
    {
      name: 'dataPublicacao',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: Rule => Rule.required(),
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'posicionamento',
      title: 'Posicionamento na Página',
      type: 'string',
      options: {
        list: [
          {title: 'Normal', value: 'normal'},
          {title: 'Destaque 1', value: 'destaque1'},
          {title: 'Destaque 2', value: 'destaque2'}
        ]
      },
      initialValue: 'normal'
    },
    {
      name: 'publicado',
      title: 'Publicado',
      type: 'boolean',
      description: 'Desmarque para manter como rascunho',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'titulo',
      author: 'autor.nome',
      media: 'imagemPrincipal',
      date: 'dataPublicacao'
    },
    prepare(selection) {
      const {title, author, media, date} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString('pt-BR') : ''
      return {
        title: title,
        subtitle: `Por ${author} • ${formattedDate}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Data de Publicação (Mais Recente)',
      name: 'dataDesc',
      by: [
        {field: 'dataPublicacao', direction: 'desc'}
      ]
    },
    {
      title: 'Data de Publicação (Mais Antigo)',
      name: 'dataAsc',
      by: [
        {field: 'dataPublicacao', direction: 'asc'}
      ]
    },
    {
      title: 'Título A-Z',
      name: 'tituloAsc',
      by: [
        {field: 'titulo', direction: 'asc'}
      ]
    }
  ]
}

