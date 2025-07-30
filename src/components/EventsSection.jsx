import { Button } from '@/components/ui/button'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'

const EventsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Feiras & Eventos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Invitation */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-6 leading-tight">
              VOCÊ É NOSSO
              <br />
              CONVIDADO
            </h3>
            <p className="text-lg font-lato mb-6 opacity-90">
              Participe dos principais eventos do setor de decoração 
              e conheça de perto nossas últimas criações.
            </p>
            <Button 
              variant="secondary"
              className="bg-white text-teal-600 hover:bg-gray-100 font-montserrat font-semibold"
            >
              Ver Eventos
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Side - Event Info */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h4 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                  Receba novidades
                  <br />
                  e lançamentos
                </h4>
                <p className="text-gray-600 font-lato">
                  da Toque Ideal
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="h-5 w-5 text-teal-600" />
                <span className="font-lato">Fimarmac</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h5 className="font-montserrat font-semibold text-gray-900 mb-2">
                  Próximo Evento: ABCasa Fair 2024
                </h5>
                <p className="text-sm text-gray-600 font-lato">
                  O maior evento de decoração do Brasil. 
                  Venha conhecer nossas novidades!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">
            Receba novidades
            <br />
            e lançamentos
            <br />
            da Toque Ideal
          </h3>
          
          <div className="max-w-md mx-auto mt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="E-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-lato"
              />
              <Button className="btn-primary font-montserrat font-semibold px-8">
                Cadastrar
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 font-lato text-sm mb-4">
              Mensagem
            </p>
            <textarea
              placeholder="Deixe sua mensagem..."
              rows="3"
              className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-lato resize-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection

