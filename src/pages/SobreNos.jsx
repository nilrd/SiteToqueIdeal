const SobreNos = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Sobre a Toque Ideal
          </h1>
          <p className="text-xl text-gray-600 font-lato leading-relaxed">
            Há mais de 5 anos transformando ambientes através da arte em vidro
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <p className="text-lg font-lato leading-relaxed text-gray-700 mb-6">
              Há mais de 5 anos no mercado, a <strong className="text-primary">Toque Ideal</strong> é um projeto fruto 
              da parceria entre <strong>Devid Bomfim</strong> e <strong>Luana Andrade</strong>, que uniram suas 
              experiências para oferecer ao setor de decoração uma linha completa de produtos da mais alta qualidade.
            </p>

            <p className="text-lg font-lato leading-relaxed text-gray-700 mb-6">
              É com grande satisfação que apresentamos nossas coleções, desenvolvidas com um padrão único de 
              <strong className="text-primary"> modernidade, qualidade e design</strong>. Buscamos constantemente evoluir na arte de moldar vidros, 
              criando peças que vão muito além da decoração: <strong>são expressões de estilo, personalidade e sofisticação</strong>.
            </p>

            <p className="text-lg font-lato leading-relaxed text-gray-700 mb-6">
              Nossa trajetória é marcada pela atenção aos detalhes e pelo compromisso com a excelência. 
              Cada produto é tratado como único e exclusivo, para atender às expectativas dos clientes mais 
              exigentes e transformar ambientes com beleza, elegância e funcionalidade.
            </p>

            <p className="text-lg font-lato leading-relaxed text-gray-700">
              A Toque Ideal está presente nas principais feiras e eventos do setor, como a <strong className="text-primary">ABCasa Fair</strong>, 
              levando ao público e parceiros as últimas tendências em design e decoração. Nosso propósito é claro: 
              <strong> inovar sempre, criando produtos que encantam e transformam</strong>.
            </p>
          </div>

          {/* Founders Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-montserrat font-bold text-primary">DB</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">Devid Bomfim</h3>
              <p className="text-gray-600 font-lato">Sócio-fundador</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-montserrat font-bold text-primary">LA</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">Luana Andrade</h3>
              <p className="text-gray-600 font-lato">Sócia-fundadora</p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2">Inovação</h3>
              <p className="text-gray-600 font-lato text-sm">
                Sempre buscando novas formas de moldar o vidro e criar peças únicas
              </p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2">Qualidade</h3>
              <p className="text-gray-600 font-lato text-sm">
                Compromisso com a excelência em cada detalhe dos nossos produtos
              </p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2">Excelência</h3>
              <p className="text-gray-600 font-lato text-sm">
                Atendendo às expectativas dos clientes mais exigentes
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-montserrat font-bold mb-4">Nossa Trajetória</h2>
            <div className="flex items-center justify-center space-x-8">
              <div>
                <div className="text-3xl font-montserrat font-bold">5+</div>
                <div className="text-sm font-lato">Anos de Experiência</div>
              </div>
              <div className="w-px h-12 bg-white opacity-30"></div>
              <div>
                <div className="text-3xl font-montserrat font-bold">287</div>
                <div className="text-sm font-lato">Produtos no Catálogo</div>
              </div>
              <div className="w-px h-12 bg-white opacity-30"></div>
              <div>
                <div className="text-3xl font-montserrat font-bold">100%</div>
                <div className="text-sm font-lato">Artesanal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreNos

