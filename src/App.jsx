import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <Gallery />
        <Services />
      </main>
      <Footer />
    </div>
  )
}

