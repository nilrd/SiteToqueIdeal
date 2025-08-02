export default {
  name: 'configuracoesGerais',
  title: 'Configurações Gerais',
  type: 'document',
  icon: () => '⚙️',
  __experimental_actions: [
    // Desabilita a criação de novos documentos (singleton)
    'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'logo',
      title: 'Logo da Empresa',
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
    },
    {
      name: 'bannerPrincipal',
      title: 'Banner Principal',
      type: 'object',
      fields: [
        {
          name: 'imagem',
          title: 'Imagem',
          type: 'image',
          options: {
            hotspot: true,
            metadata: ['blurhash', 'lqip', 'palette']
          }
        },
        {
          name: 'titulo',
          title: 'Título',
          type: 'string'
        },
        {
          name: 'subtitulo',
          title: 'Subtítulo',
          type: 'string'
        },
        {
          name: 'textoBotao',
          title: 'Texto do Botão',
          type: 'string'
        },
        {
          name: 'linkBotao',
          title: 'Link do Botão',
          type: 'string'
        }
      ]
    },
    {
      name: 'bannerSecundario',
      title: 'Banner Secundário',
      type: 'object',
      fields: [
        {
          name: 'imagem',
          title: 'Imagem',
          type: 'image',
          options: {
            hotspot: true,
            metadata: ['blurhash', 'lqip', 'palette']
          }
        },
        {
          name: 'titulo',
          title: 'Título',
          type: 'string'
        },
        {
          name: 'subtitulo',
          title: 'Subtítulo',
          type: 'string'
        }
      ]
    },
    {
      name: 'textoSobre',
      title: 'Texto Sobre Nós',
      type: 'text',
      rows: 5
    },
    {
      name: 'textoMissao',
      title: 'Texto Missão',
      type: 'text',
      rows: 3
    },
    {
      name: 'textoVisao',
      title: 'Texto Visão',
      type: 'text',
      rows: 3
    },
    {
      name: 'textoValores',
      title: 'Texto Valores',
      type: 'text',
      rows: 3
    },
    {
      name: 'telefone',
      title: 'Telefone',
      type: 'string'
    },
    {
      name: 'email',
      title: 'E-mail',
      type: 'string'
    },
    {
      name: 'endereco',
      title: 'Endereço',
      type: 'text',
      rows: 3
    },
    {
      name: 'redesSociais',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url'
        },
        {
          name: 'whatsapp',
          title: 'WhatsApp',
          type: 'string',
          description: 'Número no formato: 5511999999999'
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Configurações Gerais do Site'
      }
    }
  }
}

