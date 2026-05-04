export const PEDIDOS_YA_URL =
  'https://www.pedidosya.com.ec/restaurantes/machala/san-viernes-960d8690-6fb1-4c00-9128-f78662db631c-menu'

export const MAPS_URL =
  'https://www.google.com/maps/place/San+Viernes/@-3.2556301,-79.9632539,17z'

export const locations = [
  {
    id: 'matriz',
    tag: 'Matriz',
    tagClass: 'tag-o',
    name: 'Local Principal',
    address: 'Av. 25 de Junio e./ Ayacucho y Santa Rosa\nMachala, El Oro',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.78!2d-79.9632539!3d-3.2556301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90330f3d0d95d7f7%3A0x3ca0c8dd105cebd!2sSan%20Viernes!5e0!3m2!1ses!2sec!4v1',
  },
  {
    id: 'sucursal',
    tag: 'Sucursal',
    tagClass: 'tag-b',
    name: 'Local Las Palmeras',
    address: 'Av. Las Palmeras e./ Pasaje y Boyacá\nMachala, El Oro',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.78!2d-79.9632539!3d-3.2556301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90330f3d0d95d7f7%3A0x3ca0c8dd105cebd!2sSan%20Viernes!5e0!3m2!1ses!2sec!4v1',
  },
]

export const hours = [
  { day: 'Lun', open: '14:15', close: '23:30', highlight: false },
  { day: 'Mar', open: '19:30', close: '23:00', highlight: false },
  { day: 'Mié', open: '14:15', close: '23:30', highlight: false },
  { day: 'Jue', open: '17:00', close: '22:00', highlight: false },
  { day: 'Vie', open: '14:15', close: '23:59', highlight: true },
  { day: 'Sáb', open: '16:15', close: '19:00', highlight: false },
  { day: 'Dom', open: '17:00', close: '18:45', highlight: false },
]
