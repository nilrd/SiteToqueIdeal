import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QuoteProvider } from './context/QuoteContext'
import { SanityProvider } from './contexts/SanityContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import CatalogCMS from './pages/CatalogCMS'
import Quote from './pages/Quote'
import Events from './pages/Events'
import Blog from './pages/Blog'
import TrabalheConosco from './pages/TrabalheConosco'
import Contato from './pages/Contato'
import SobreNos from './pages/SobreNos'
import './App.css'

function App() {
  return (
    <SanityProvider>
      <QuoteProvider>
        <Router>
          <div className="min-h-screen">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<CatalogCMS />} />
                <Route path="/catalogo-antigo" element={<Catalog />} />
                <Route path="/catalogo-cms" element={<CatalogCMS />} />
                <Route path="/orcamento" element={<Quote />} />
                <Route path="/eventos" element={<Events />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/sobre-nos" element={<SobreNos />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </QuoteProvider>
    </SanityProvider>
  )
}

export default App

