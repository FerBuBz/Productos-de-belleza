import { CONFIG, waLink } from '../config'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-pink-100">
      <nav className="container-padded flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-brand-500"></span>
          <span className="font-semibold text-gray-900">{CONFIG.businessName}</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#productos" className="hover:text-brand-600">Productos</a>
          <a href="#galeria" className="hover:text-brand-600">Galería</a>
          <a href="#servicios" className="hover:text-brand-600">Servicios</a>
          <a href="#contacto" className="hover:text-brand-600">Contacto</a>
          <a href={waLink()} className="btn btn-primary">Agendar</a>
        </div>
      </nav>
    </header>
  )
}

