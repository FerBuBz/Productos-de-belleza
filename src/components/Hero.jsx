import { waLink } from '../config'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 to-white pointer-events-none" />
      <div className="container-padded pt-16 md:pt-24 pb-12 md:pb-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Uñas hermosas, cuidado profesional
            </h1>
            <p className="mt-4 text-gray-600">
              Manicure, pedicure, gel y acrílicas con un enfoque en higiene, detalle y estilo. Agenda tu cita hoy mismo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={waLink('Hola, quiero agendar una cita ✨')} className="btn btn-primary">
                Agendar por WhatsApp
              </a>
              <a href="#servicios" className="btn btn-outline">Ver servicios</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-200 to-brand-400 opacity-20 absolute inset-4 blur-2xl" />
            <img
              className="relative w-full h-auto rounded-3xl shadow-lg"
              src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop"
              alt="Manicure profesional"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

