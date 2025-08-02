import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 76, 85, 0.7), rgba(31, 76, 85, 0.7)), url("/fotosinstagram/fotosinstagram/post_insta (2).jpg")`
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
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/catalogo">
            <Button 
              size="lg" 
              className="btn-primary font-montserrat font-semibold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
            >
              Veja o Catálogo
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/catalogo-virtual">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 font-montserrat font-semibold text-lg px-8 py-4 hover:scale-105 transition-all duration-200"
            >
              Catálogo Virtual
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
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

