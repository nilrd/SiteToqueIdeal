// Informações de contato centralizadas da empresa
export const contactInfo = {
  phone: '+55 11 96776-7364',
  phoneFormatted: '(11) 96776-7364',
  email: 'comercial@toqueideal.com',
  whatsapp: {
    number: '5511967767364',
    url: 'https://api.whatsapp.com/send?phone=5511967767364'
  },
  socialMedia: {
    instagram: {
      url: 'https://www.instagram.com/toqueideal',
      handle: '@toqueideal'
    },
    facebook: {
      url: 'https://www.facebook.com/toqueideall',
      handle: 'toqueideall'
    }
  },
  company: {
    name: 'Toque Ideal',
    description: 'Especializada em artigos decorativos em vidro há mais de 10 anos',
    experience: 'Mais de 10 anos no ramo'
  }
}

// Função para gerar link do WhatsApp com mensagem personalizada
export const generateWhatsAppLink = (message = 'Olá! Gostaria de mais informações.') => {
  return `https://api.whatsapp.com/send?phone=${contactInfo.whatsapp.number}&text=${encodeURIComponent(message)}`
}

// Função para gerar link de email
export const generateEmailLink = (subject = 'Contato - Toque Ideal', body = '') => {
  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

