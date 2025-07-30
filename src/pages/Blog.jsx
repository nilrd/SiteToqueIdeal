import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tendências em Decoração com Vidro para 2025",
      excerpt: "Descubra as principais tendências que estão moldando o futuro da decoração com peças em vidro e como incorporá-las em seus projetos.",
      author: "Equipe Toque Ideal",
      date: "15 de Janeiro, 2025",
      image: "/fotosinstagram/fotosinstagram/post_insta (2).jpg",
      category: "Tendências"
    },
    {
      id: 2,
      title: "Como Escolher Peças de Vidro para Diferentes Ambientes",
      excerpt: "Um guia completo para selecionar as peças certas de acordo com o estilo e função de cada ambiente da sua casa ou projeto.",
      author: "Luana Andrade",
      date: "10 de Janeiro, 2025",
      image: "/fotosinstagram/fotosinstagram/post_insta (3).jpg",
      category: "Dicas"
    },
    {
      id: 3,
      title: "A Arte de Moldar Vidro: Processo e Técnicas",
      excerpt: "Conheça os bastidores da criação das peças Toque Ideal e as técnicas artesanais que garantem a qualidade única dos nossos produtos.",
      author: "Devid Bomfim",
      date: "5 de Janeiro, 2025",
      image: "/fotosinstagram/fotosinstagram/post_insta (4).jpg",
      category: "Processo"
    },
    {
      id: 4,
      title: "Cuidados e Manutenção de Peças em Vidro",
      excerpt: "Dicas essenciais para manter suas peças de vidro sempre brilhantes e conservadas, prolongando sua durabilidade e beleza.",
      author: "Equipe Toque Ideal",
      date: "28 de Dezembro, 2024",
      image: "/fotosinstagram/fotosinstagram/post_insta (5).jpg",
      category: "Cuidados"
    },
    {
      id: 5,
      title: "Projetos Inspiradores: Vidro na Decoração Moderna",
      excerpt: "Explore projetos reais que utilizaram peças Toque Ideal para criar ambientes únicos e sofisticados.",
      author: "Equipe Toque Ideal",
      date: "20 de Dezembro, 2024",
      image: "/fotosinstagram/fotosinstagram/post_insta (9).jpg",
      category: "Projetos"
    },
    {
      id: 6,
      title: "ABCasa Fair 2024: Novidades e Lançamentos",
      excerpt: "Relembre os destaques da nossa participação na maior feira de decoração da América Latina e conheça nossos lançamentos.",
      author: "Equipe Toque Ideal",
      date: "15 de Dezembro, 2024",
      image: "/fotosinstagram/fotosinstagram/post_insta (10).jpg",
      category: "Eventos"
    }
  ]

  const categories = ["Todos", "Tendências", "Dicas", "Processo", "Cuidados", "Projetos", "Eventos"]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Blog Toque Ideal
          </h1>
          <p className="text-xl text-gray-600 font-lato leading-relaxed max-w-3xl mx-auto">
            Descubra tendências, dicas de decoração e os bastidores da criação das nossas peças únicas em vidro.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              className={`font-montserrat font-medium ${
                category === "Todos" 
                  ? "btn-primary" 
                  : "border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                  {blogPosts[0].category}
                </span>
                <span className="text-sm text-gray-500 font-lato">Destaque</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900 mb-4">
                {blogPosts[0].title}
              </h2>
              
              <p className="text-gray-600 font-lato mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
                
                <Button className="btn-primary font-montserrat font-semibold">
                  Ler Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-montserrat font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 font-lato text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary font-montserrat font-medium">
                    Ler Mais
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Não perca nenhuma novidade!
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Receba nossos artigos, dicas de decoração e lançamentos diretamente no seu e-mail.
          </p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button 
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-100 font-montserrat font-semibold"
            >
              Assinar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

