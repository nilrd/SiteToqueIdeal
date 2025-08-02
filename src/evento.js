export default {
  name: 'evento',
  title: 'Evento',
  type: 'document',
  icon: () => '📅',
  fields: [
    {
      name: 'titulo',
      title: 'Título do Evento',
      type: 'string',
      validation: Rule => Rule.required().min(5).max(100)
    },
    {
      name: 'dataEvento',
      title: 'Data do Evento',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'local',
      title: 'Local',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(500)
    },
    {
      name: 'imagem',
      title: 'Imagem do Evento',
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
      title: 'titulo',
      subtitle: 'local',
      media: 'imagem',
      date: 'dataEvento'
    },
    prepare(selection) {
      const {title, subtitle, media, date} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString('pt-BR') : ''
      return {
        title: title,
        subtitle: `${subtitle} • ${formattedDate}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Data do Evento (Próximos)',
      name: 'dataAsc',
      by: [
        {field: 'dataEvento', direction: 'asc'}
      ]
    },
    {
      title: 'Data do Evento (Mais Recentes)',
      name: 'dataDesc',
      by: [
        {field: 'dataEvento', direction: 'desc'}
      ]
    }
  ]
}

