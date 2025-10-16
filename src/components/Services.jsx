import { services, formatCOP } from '../data/services'
import { waLink } from '../config'

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-pink-50/40">
      <div className="container-padded">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Servicios</h2>
          <p className="text-gray-600">Calidad y bioseguridad garantizadas</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article key={s.id} className="card p-5 flex items-center justify-between gap-6">
              <div>
                <h3 className="font-medium text-gray-900">{s.name}</h3>
                <p className="text-brand-700 font-semibold">{formatCOP(s.price)}</p>
              </div>
              <a
                className="btn btn-primary whitespace-nowrap"
                href={waLink(`Hola, quiero agendar: ${s.name} (${formatCOP(s.price)})`)}
              >
                Agendar
              </a>
            </article>
          ))}
        </div>
        <div id="agendar" className="mt-10 text-center">
          <a href={waLink()} className="btn btn-primary">Agendar por WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

