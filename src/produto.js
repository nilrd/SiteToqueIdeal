export default {
  name: 'produto',
  title: 'Produto',
  type: 'document',
  icon: () => '🛍️',
  fields: [
    {
      name: 'nome',
      title: 'Nome do Produto',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(100)
    },
    {
      name: 'codigo',
      title: 'Código do Produto',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(20)
    },
    {
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.max(500)
    },
    {
      name: 'fotos',
      title: 'Fotos do Produto',
      type: 'array',
      of: [
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
              type: 'string',
              description: 'Importante para SEO e acessibilidade'
            },
            {
              name: 'caption',
              title: 'Legenda',
              type: 'string'
            }
          ]
        }
      ],
      validation: Rule => Rule.min(1).max(10)
    },
    {
      name: 'cor',
      title: 'Cor',
      type: 'string',
      options: {
        list: [
          {title: 'Âmbar', value: 'Âmbar'},
          {title: 'Branco', value: 'Branco'},
          {title: 'Bronze', value: 'Bronze'},
          {title: 'Grafite', value: 'Grafite'},
          {title: 'Mel', value: 'Mel'},
          {title: 'Preto', value: 'Preto'},
          {title: 'Prata', value: 'Prata'},
          {title: 'Turquesa', value: 'Turquesa'},
          {title: 'Verde', value: 'Verde'},
          {title: 'Vermelho', value: 'Vermelho'}
        ]
      }
    },
    {
      name: 'codigoCor',
      title: 'Código da Cor',
      type: 'string',
      description: 'Código interno da cor (opcional)'
    },
    {
      name: 'dimensoes',
      title: 'Dimensões',
      type: 'string',
      placeholder: 'Ex: 40x22cm, 35x35cm',
      validation: Rule => Rule.max(50)
    },
    {
      name: 'preco',
      title: 'Preço (Opcional)',
      type: 'number',
      description: 'Preço em reais (opcional)'
    },
    {
      name: 'serie',
      title: 'Série',
      type: 'string',
      options: {
        list: [
          {title: 'Série Clássica', value: 'Série Clássica'},
          {title: 'Série Moderna', value: 'Série Moderna'},
          {title: 'Série Premium', value: 'Série Premium'},
          {title: 'Série Especial', value: 'Série Especial'}
        ]
      }
    },
    {
      name: 'destaque',
      title: 'Produto em Destaque',
      type: 'boolean',
      description: 'Marque para exibir na página inicial',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'nome',
      subtitle: 'codigo',
      media: 'fotos.0'
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title,
        subtitle: `Código: ${subtitle}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Nome A-Z',
      name: 'nomeAsc',
      by: [
        {field: 'nome', direction: 'asc'}
      ]
    },
    {
      title: 'Nome Z-A',
      name: 'nomeDesc',
      by: [
        {field: 'nome', direction: 'desc'}
      ]
    },
    {
      title: 'Código',
      name: 'codigo',
      by: [
        {field: 'codigo', direction: 'asc'}
      ]
    },
    {
      title: 'Mais Recentes',
      name: 'recentes',
      by: [
        {field: '_createdAt', direction: 'desc'}
      ]
    }
  ]
}

