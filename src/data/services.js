export const services = [
  { id: 's1', name: 'Manicure Tradicional', price: 25000 },
  { id: 's2', name: 'Manicure + Gel', price: 45000 },
  { id: 's3', name: 'Uñas Acrílicas (corto)', price: 80000 },
  { id: 's4', name: 'Retoque Acrílicas', price: 60000 },
  { id: 's5', name: 'Pedicure Spa', price: 55000 },
]

export const formatCOP = (value) =>
  value.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })

