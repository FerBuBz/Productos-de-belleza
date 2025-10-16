import { gallery } from '../data/gallery'

export default function Gallery() {
  return (
    <section id="galeria" className="py-16">
      <div className="container-padded">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Galería</h2>
          <p className="text-gray-600">Algunos de nuestros trabajos recientes</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-sm">
              <img src={src} alt={`Uñas ${i + 1}`} className="w-full h-44 md:h-56 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

