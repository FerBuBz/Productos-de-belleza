export const products = [
  {
    id: 'p1',
    name: 'Aceite para cutícula',
    price: 12000,
    img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'p2',
    name: 'Lima profesional',
    price: 8000,
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'p3',
    name: 'Esmalte gel mini',
    price: 15000,
    img: 'https://images.unsplash.com/photo-1611930021860-baf0c53e75d7?q=80&w=600&auto=format&fit=crop',
  },
]

export const formatCOP = (value) =>
  value.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })

