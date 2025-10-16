export const CONFIG = {
  businessName: 'Belleza Nails Spa (posible nombre)',
  phoneE164: '573194503745',
  instagram: 'https://instagram.com/tu_instagram',
  maps: 'https://maps.google.com/?q=Belleza+Nails+Spa',
  address: 'Tu dirección en la ciudad',
}

export function waLink(message = 'Hola, quiero agendar una cita ✨') {
  const text = encodeURIComponent(message)
  return `https://wa.me/${CONFIG.phoneE164}?text=${text}`
}