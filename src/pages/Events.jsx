import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock, ExternalLink, Users, Award } from 'lucide-react'

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Feiras & Eventos
          </h1>
          <p className="text-xl text-gray-600 font-lato leading-relaxed max-w-3xl mx-auto">
            A Toque Ideal está presente nos principais eventos do setor de decoração, 
            levando ao público e parceiros as últimas tendências em design e inovação.
          </p>
        </div>

        {/* Main Event - ABCasa Fair */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-primary to-teal-600 text-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-montserrat font-bold mb-2">ABCasa Fair 2025</h2>
                <p className="text-lg opacity-90">A maior feira de decoração da América Latina</p>
              </div>
              <div className="text-right">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-2xl font-bold">13-16</div>
                  <div className="text-sm">AGOSTO</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-4">
                  Informações do Evento
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-lato font-medium text-gray-900">13 a 16 de Agosto de 2025</p>
                      <p className="text-sm text-gray-600">4 dias de evento</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-lato font-medium text-gray-900">10h às 20h (13-15/08)</p>
                      <p className="text-sm text-gray-600">10h às 17h (16/08)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-lato font-medium text-gray-900">Expo Center Norte</p>
                      <p className="text-sm text-gray-600">São Paulo - SP - Brasil</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-lato font-medium text-gray-900">Evento B2B</p>
                      <p className="text-sm text-gray-600">Exclusivo para profissionais do setor</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-4">
                  Segmentos em Destaque
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Decoração',
                    'Utilidades Domésticas',
                    'Flores',
                    'Têxtil para Casa',
                    'Presentes',
                    'Papelaria'
                  ].map((segment) => (
                    <div key={segment} className="bg-gray-50 rounded-lg p-3 text-center">
                      <p className="text-sm font-lato font-medium text-gray-700">{segment}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <p className="font-lato font-medium text-primary">Destaque da Toque Ideal</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Venha conhecer nossas últimas criações em vidro decorativo e 
                    as tendências que estão transformando o mercado de decoração.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://abcasafair.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button className="btn-primary font-montserrat font-semibold">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visitar Site Oficial
                  </Button>
                </a>
                
                <a 
                  href="https://abcasafair.com.br/planta-da-feira/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="outline" className="font-montserrat font-semibold">
                    <MapPin className="mr-2 h-4 w-4" />
                    Ver Planta da Feira
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-montserrat font-bold mb-4">
            Você é nosso convidado!
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Participe dos principais eventos do setor de decoração e conheça de perto nossas últimas criações.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-montserrat font-semibold mb-2">Networking</h3>
              <p className="text-sm opacity-80">Conecte-se com profissionais do setor</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="font-montserrat font-semibold mb-2">Novidades</h3>
              <p className="text-sm opacity-80">Conheça nossos lançamentos em primeira mão</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-montserrat font-semibold mb-2">Parcerias</h3>
              <p className="text-sm opacity-80">Oportunidades de negócios exclusivas</p>
            </div>
          </div>

          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-montserrat font-semibold"
          >
            Entre em Contato
          </Button>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8 text-center">
          <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-4">
            Receba novidades e convites para eventos
          </h3>
          <p className="text-gray-600 font-lato mb-6">
            Seja o primeiro a saber sobre nossa participação em feiras e eventos especiais.
          </p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="btn-primary font-montserrat font-semibold">
              Cadastrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events

