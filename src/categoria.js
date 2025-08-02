export default {
  name: 'categoria',
  title: 'Categoria',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(30)
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
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(200)
    }
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'descricao'
    }
  }
}

