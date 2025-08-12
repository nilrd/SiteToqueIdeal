export default {
  name: 'trabalheConoscoFormulario',
  title: 'Formulário Trabalhe Conosco',
  type: 'document',
  icon: () => '💼',
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
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      description: 'URL do perfil no LinkedIn'
    },
    {
      name: 'area',
      title: 'Área de Interesse',
      type: 'string',
      options: {
        list: [
          {title: 'Vendas', value: 'vendas'},
          {title: 'Produção', value: 'producao'},
          {title: 'Design', value: 'design'},
          {title: 'Marketing', value: 'marketing'},
          {title: 'Administrativo', value: 'administrativo'},
          {title: 'Logística', value: 'logistica'},
          {title: 'Atendimento ao Cliente', value: 'atendimento'},
          {title: 'Outros', value: 'outros'}
        ]
      }
    },
    {
      name: 'experiencia',
      title: 'Experiência',
      type: 'text',
      rows: 3,
      description: 'Descreva sua experiência profissional'
    },
    {
      name: 'curriculo',
      title: 'Currículo',
      type: 'file',
      options: {
        accept: 'application/pdf'
      },
      description: 'Anexe o currículo em formato PDF (máx. 5MB)',
      validation: Rule => Rule.custom(file => {
        if (!file) return true; // Campo opcional
        if (file.asset && file.asset._ref) {
          // Se já tem um asset, não precisa validar o tamanho aqui
          return true;
        }
        // Se for um novo arquivo, verificar o tamanho (em bytes)
        if (file.size && file.size > 5 * 1024 * 1024) {
          return 'O arquivo deve ter no máximo 5MB.';
        }
        return true;
      })
    },
    {
      name: 'mensagem',
      title: 'Mensagem',
      type: 'text',
      rows: 4,
      description: 'Mensagem adicional ou motivação para trabalhar conosco'
    },
    {
      name: 'dataEnvio',
      title: 'Data de Envio',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Novo', value: 'novo'},
          {title: 'Em Análise', value: 'analise'},
          {title: 'Entrevista Agendada', value: 'entrevista'},
          {title: 'Aprovado', value: 'aprovado'},
          {title: 'Não Aprovado', value: 'nao_aprovado'},
          {title: 'Arquivado', value: 'arquivado'}
        ]
      },
      initialValue: 'novo'
    },
    {
      name: 'observacoes',
      title: 'Observações Internas',
      type: 'text',
      rows: 3,
      description: 'Observações da equipe de RH'
    }
  ],
  preview: {
    select: {
      title: 'nome',
      subtitle: 'area',
      email: 'email',
      status: 'status',
      date: 'dataEnvio'
    },
    prepare(selection) {
      const {title, subtitle, email, status, date} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString('pt-BR') : ''
      const statusEmoji = {
        'novo': '🆕',
        'analise': '👀',
        'entrevista': '📅',
        'aprovado': '✅',
        'nao_aprovado': '❌',
        'arquivado': '📁'
      }
      
      return {
        title: title,
        subtitle: `${email} • ${subtitle} • ${statusEmoji[status] || ''} ${formattedDate}`
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
      title: 'Por Status',
      name: 'porStatus',
      by: [
        {field: 'status', direction: 'asc'},
        {field: 'dataEnvio', direction: 'desc'}
      ]
    },
    {
      title: 'Novos Candidatos',
      name: 'novos',
      by: [
        {field: 'status', direction: 'asc'},
        {field: 'dataEnvio', direction: 'desc'}
      ]
    }
  ]
}

