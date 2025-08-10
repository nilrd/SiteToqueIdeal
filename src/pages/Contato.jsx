import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook } from 'lucide-react'
import { useSanity } from '../contexts/SanityContext'
import { contactInfo, generateWhatsAppLink, generateEmailLink } from '../data/contacts'

const Contato = () => {
  const { submitContactForm } = useSanity()
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Enviar para o Sanity CMS
      await submitContactForm({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        mensagem: `Assunto: ${formData.assunto}\n\n${formData.mensagem}`
      })

      setSubmitStatus('success')
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      })
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 font-lato leading-relaxed max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar as peças perfeitas para seus projetos. 
            Fale conosco através dos nossos canais de atendimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Envie uma Mensagem
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="produtos">Informações sobre Produtos</option>
                    <option value="parceria">Parceria Comercial</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Descreva sua necessidade ou dúvida..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary font-montserrat font-semibold"
                size="lg"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-montserrat font-semibold">
                    ✅ Mensagem enviada com sucesso!
                  </p>
                  <p className="text-green-600 text-sm mt-1">
                    Entraremos em contato em breve.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-montserrat font-semibold">
                    ❌ Erro ao enviar mensagem
                  </p>
                  <p className="text-red-600 text-sm mt-1">
                    Tente novamente ou entre em contato pelo WhatsApp.
                  </p>
                </div>
              )}
            </form>

            {/* WhatsApp CTA */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-montserrat font-semibold text-green-800 mb-1">
                    Prefere falar pelo WhatsApp?
                  </h3>
                  <p className="text-sm text-green-600">
                    Atendimento rápido e direto para suas dúvidas
                  </p>
                </div>
                <Button 
                  onClick={() => window.open(generateWhatsAppLink('Olá! Gostaria de mais informações sobre os produtos da Toque Ideal.'), '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white font-montserrat font-semibold"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-gray-900 mb-1">Telefone</h3>
                    <a 
                      href={generateWhatsAppLink('Olá! Gostaria de falar sobre o telefone.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 font-lato hover:underline"
                    >
                      {contactInfo.phoneFormatted} (WhatsApp)
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-gray-900 mb-1">E-mail</h3>
                    <a 
                      href={generateEmailLink('Contato via Site Toque Ideal')}
                      className="text-gray-600 font-lato hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-gray-900 mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-600 font-lato">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                Redes Sociais
              </h2>

              <div className="flex space-x-4">
                <a 
                  href={contactInfo.socialMedia.instagram.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a 
                  href={contactInfo.socialMedia.facebook.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a 
                  href={contactInfo.whatsapp.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                </a>
              </div>

              <p className="text-gray-600 font-lato mt-4 text-sm">
                Siga-nos nas redes sociais para ver nossos últimos trabalhos e novidades!
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                Localização
              </h2>
              
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 font-lato">
                    Mapa interativo<br />
                    <span className="text-sm">Em breve</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato

