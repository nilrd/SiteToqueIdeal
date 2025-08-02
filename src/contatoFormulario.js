export default {
  name: 'contatoFormulario',
  title: 'Formulário de Contato',
  type: 'document',
  icon: () => '📧',
  readOnly: true, // Apenas leitura, pois são dados enviados pelo site
  fields: [
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'E-mail',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'telefone',
      title: 'Telefone',
      type: 'string'
    },
    {
      name: 'mensagem',
      title: 'Mensagem',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'dataEnvio',
      title: 'Data de Envio',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'respondido',
      title: 'Respondido',
      type: 'boolean',
      description: 'Marque quando responder ao contato',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'nome',
      subtitle: 'email',
      date: 'dataEnvio'
    },
    prepare(selection) {
      const {title, subtitle, date} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString('pt-BR') : ''
      return {
        title: title,
        subtitle: `${subtitle} • ${formattedDate}`
      }
    }
  },
  orderings: [
    {
      title: 'Mais Recentes',
      name: 'dataDesc',
      by: [
        {field: 'dataEnvio', direction: 'desc'}
      ]
    },
    {
      title: 'Não Respondidos',
      name: 'naoRespondidos',
      by: [
        {field: 'respondido', direction: 'asc'},
        {field: 'dataEnvio', direction: 'desc'}
      ]
    }
  ]
}

