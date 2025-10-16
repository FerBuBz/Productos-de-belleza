import { CONFIG } from '../config'

export default function Footer() {
  return (
    <footer id="contacto" className="py-10 border-t border-pink-100">
      <div className="container-padded flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} {CONFIG.businessName}. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <a className="text-brand-600 hover:underline" href={CONFIG.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a className="text-brand-600 hover:underline" href={CONFIG.maps} target="_blank" rel="noreferrer">Google Maps</a>
        </div>
      </div>
    </footer>
  )
}

