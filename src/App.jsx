import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QuoteProvider } from './context/QuoteContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Quote from './pages/Quote'
import './App.css'

function App() {
  return (
    <QuoteProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />
              <Route path="/orcamento" element={<Quote />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QuoteProvider>
  )
}

export default App
