const NewsletterForm = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
          Receba Nossas Novidades
        </h2>
        <p className="text-lg text-gray-600 font-lato mb-8">
          Fique por dentro dos últimos lançamentos, eventos e dicas exclusivas da Toque Ideal.
        </p>
        <div className="max-w-xl mx-auto">
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-lato text-gray-800"
              aria-label="Seu melhor e-mail"
            />
            <button 
              type="submit"
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-teal-700 transition-colors"
            >
              Assinar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterForm


