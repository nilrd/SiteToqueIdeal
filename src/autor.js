export default {
  name: 'autor',
  title: 'Autor',
  type: 'document',
  icon: () => '👤',
  fields: [
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50)
    },
    {
      name: 'biografia',
      title: 'Biografia',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.max(300)
    },
    {
      name: 'imagem',
      title: 'Foto do Autor',
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
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'nome',
      media: 'imagem'
    }
  }
}

