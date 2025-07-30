import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600"
        style={{
          background: `linear-gradient(135deg, #1F4C55 0%, #2A6B75 50%, #357A85 100%)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight">
          Decoração em vidro
          <br />
          que transforma
          <br />
          ambientes
        </h1>
        
        <p className="text-xl md:text-2xl font-lato mb-8 opacity-90 max-w-2xl mx-auto">
          Há mais de 5 anos criando peças únicas que vão além da decoração: 
          são expressões de estilo, personalidade e sofisticação.
        </p>
        
        <Link to="/catalogo">
          <Button 
            size="lg" 
            className="btn-primary font-montserrat font-semibold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
          >
            Veja o Catálogo
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

