import { useState } from 'react'
import { useQuote } from '../context/QuoteContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Trash2, Plus, Minus, MessageCircle, Mail, ShoppingCart } from 'lucide-react'

const Quote = () => {
  const { items, removeItem, updateQuantity, clearQuote, getTotalItems, sendWhatsAppQuote } = useQuote()
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(item)
    } else {
      updateQuantity(item, newQuantity)
    }
  }

  const handleSendWhatsApp = () => {
    sendWhatsAppQuote(customerInfo)
  }

  const handleSendEmail = () => {
    // Implementar envio por email
    const subject = 'Solicitação de Orçamento - Toque Ideal'
    const body = `Nome: ${customerInfo.name}\nE-mail: ${customerInfo.email}\nTelefone: ${customerInfo.phone}\n\nMensagem: ${customerInfo.message}\n\nProdutos:\n${items.map((item, index) => `${index + 1}. ${item.code} - ${item.dimensions} (Qtd: ${item.quantity})`).join('\n')}`
    
    const mailtoUrl = `mailto:contato@toqueideal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Seu orçamento está vazio
            </h1>
            <p className="text-lg text-gray-600 font-lato mb-8">
              Adicione produtos do nosso catálogo para solicitar um orçamento.
            </p>
            <Button 
              onClick={() => window.location.href = '#catalogo'}
              className="btn-primary font-montserrat font-semibold"
              size="lg"
            >
              Ver Catálogo
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Monte seu Orçamento
          </h1>
          <p className="text-lg text-gray-600 font-lato">
            Revise os produtos selecionados e envie sua solicitação de orçamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Products List */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-montserrat font-semibold text-gray-900">
                Produtos Selecionados ({getTotalItems()})
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={clearQuote}
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Limpar
              </Button>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.code} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-montserrat font-semibold text-gray-900">
                      {item.code}
                    </h3>
                    <p className="text-sm text-gray-600 font-lato">
                      {item.dimensions}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-montserrat font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item)}
                      className="text-red-600 hover:bg-red-50 h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-montserrat font-semibold text-gray-900 mb-6">
              Suas Informações
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  className="font-lato"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="font-lato"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  placeholder="(11) 99999-9999"
                  className="font-lato"
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  value={customerInfo.message}
                  onChange={handleInputChange}
                  placeholder="Informações adicionais sobre seu projeto..."
                  rows={4}
                  className="font-lato"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <Button
                onClick={handleSendWhatsApp}
                className="w-full btn-primary font-montserrat font-semibold"
                size="lg"
                disabled={!customerInfo.name || !customerInfo.email}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar pelo WhatsApp
              </Button>

              <Button
                onClick={handleSendEmail}
                variant="outline"
                className="w-full font-montserrat font-semibold"
                size="lg"
                disabled={!customerInfo.name || !customerInfo.email}
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar por E-mail
              </Button>
            </div>

            <p className="text-xs text-gray-500 font-lato mt-4 text-center">
              * Campos obrigatórios. Entraremos em contato em até 24 horas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote

