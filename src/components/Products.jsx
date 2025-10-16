import { products, formatCOP } from '../data/products'

export default function Products() {
  return (
    <section id="productos" className="py-16 bg-pink-50/40">
      <div className="container-padded">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Productos</h2>
            <p className="text-gray-600">Pequeños esenciales para el cuidado en casa</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="card overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-44 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{p.name}</h3>
                <p className="mt-1 text-brand-700 font-semibold">{formatCOP(p.price)}</p>
                <div className="mt-4">
                  <button className="btn btn-outline w-full">Consultar disponibilidad</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

