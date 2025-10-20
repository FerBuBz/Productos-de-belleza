export const services = [
  { id: 's2', name: 'Uñas acrilicas', price: 90000 },
  { id: 's3', name: 'Retoque uñas acrilicas', price: 80000 },
  { id: 's4', name: 'Semi permanente con base ruber', price: 70000 },
  { id: 's4', name: '*Retoque* semi permanete con base', price: 65000 },
]

export const formatCOP = (value) =>
  value.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })

