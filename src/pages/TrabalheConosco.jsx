import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Upload, Linkedin, Mail, Phone, User, FileText, Send } from 'lucide-react'
import { useSanity } from '../contexts/SanityContext'

const TrabalheConosco = () => {
  const { submitJobApplication } = useSanity()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    linkedin: "",
    area: "",
    experiencia: "",
    mensagem: "",
    curriculo: null // Adicionar campo para o arquivo do currículo
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [curriculoFileName, setCurriculoFileName] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB
        alert("O arquivo deve ter no máximo 5MB.")
        setFormData(prev => ({ ...prev, curriculo: null }))
        setCurriculoFileName("")
        return
      }
      setFormData(prev => ({ ...prev, curriculo: file }))
      setCurriculoFileName(file.name)
    } else {
      setFormData(prev => ({ ...prev, curriculo: null }))
      setCurriculoFileName("")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Enviar para o Sanity CMS
      await submitJobApplication({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        linkedin: formData.linkedin,
        area: formData.area,
        experiencia: formData.experiencia,
        mensagem: formData.mensagem,
        curriculo: formData.curriculo // Passar o arquivo para a função de envio
      })

      setSubmitStatus("success")
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        linkedin: "",
        area: "",
        experiencia: "",
        mensagem: "",
        curriculo: null
      })
      setCurriculoFileName("")
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const areas = [
    "Vendas",
    "Produção",
    "Design",
    "Marketing",
    "Administrativo",
    "Logística",
    "Atendimento ao Cliente",
    "Outros"
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Trabalhe Conosco
          </h1>
          <p className="text-xl text-gray-600 font-lato leading-relaxed max-w-3xl mx-auto">
            Faça parte da equipe Toque Ideal e ajude-nos a criar peças únicas que transformam ambientes. 
            Buscamos profissionais apaixonados por qualidade e inovação.
          </p>
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2">Excelência</h3>
            <p className="text-gray-600 font-lato text-sm">
              Buscamos sempre a perfeição em cada detalhe dos nossos produtos e processos
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2">Colaboração</h3>
            <p className="text-gray-600 font-lato text-sm">
              Valorizamos o trabalho em equipe e a troca de experiências entre nossos colaboradores
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">✨</span>
            </div>
            <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2">Inovação</h3>
            <p className="text-gray-600 font-lato text-sm">
              Incentivamos a criatividade e a busca por soluções inovadoras em todos os setores
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              Envie seu Currículo
            </h2>
            <p className="text-gray-600 font-lato">
              Preencha o formulário abaixo e faça parte da nossa equipe
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
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

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-1" />
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  <Linkedin className="inline h-4 w-4 mr-1" />
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://linkedin.com/in/seu-perfil"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Área de Interesse *
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecione uma área</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Experiência (anos)
                </label>
                <select
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecione</option>
                  <option value="0-1">0-1 anos</option>
                  <option value="2-3">2-3 anos</option>
                  <option value="4-5">4-5 anos</option>
                  <option value="6-10">6-10 anos</option>
                  <option value="10+">Mais de 10 anos</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                <FileText className="inline h-4 w-4 mr-1" />
                Mensagem
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Conte-nos um pouco sobre você, suas experiências e por que gostaria de trabalhar na Toque Ideal..."
              />
            </div>

            <div>
              <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                <Upload className="inline h-4 w-4 mr-1" />
                Currículo (PDF)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  {curriculoFileName ? `Arquivo selecionado: ${curriculoFileName}` : `Clique para fazer upload ou arraste seu arquivo aqui`}
                </p>
                <p className="text-xs text-gray-500">Apenas arquivos PDF, máximo 5MB</p>
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  id="curriculum"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="curriculum"
                  className="inline-block mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  Selecionar Arquivo
                </label>
              </div>
            </div>

            <div className="text-center pt-6">
              <Button 
                type="submit" 
                className="btn-primary font-montserrat font-semibold px-8 py-3"
                size="lg"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Enviando..." : "Enviar Currículo"}
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-800 font-montserrat font-semibold">
                  ✅ Candidatura enviada com sucesso!
                </p>
                <p className="text-green-600 text-sm mt-1">
                  Agradecemos seu interesse. Entraremos em contato em breve.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                <p className="text-red-800 font-montserrat font-semibold">
                  ❌ Erro ao enviar candidatura
                </p>
                <p className="text-red-600 text-sm mt-1">
                  Ocorreu um erro ao enviar sua candidatura. Por favor, tente novamente.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-xl font-montserrat font-bold mb-4">
            Dúvidas sobre as vagas?
          </h3>
          <p className="mb-6 opacity-90">
            Entre em contato conosco através dos nossos canais oficiais
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-100 font-montserrat font-semibold"
            >
              <Mail className="mr-2 h-4 w-4" />
              rh@toqueideal.com.br
            </Button>
            
            <Button 
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-100 font-montserrat font-semibold"
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrabalheConosco

