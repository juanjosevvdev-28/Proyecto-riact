const productos = [
  { id: 1, title: 'iPhone 15 Pro', price: 1299, category: 'smartphones', description: 'El iPhone más avanzado con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR de 6.1 pulgadas.', stock: 10, image: 'https://via.placeholder.com/300x200?text=iPhone+15+Pro' },
  { id: 2, title: 'Samsung Galaxy S24', price: 999, category: 'smartphones', description: 'Smartphone Android flagship con pantalla Dynamic AMOLED 2X, procesador Snapdragon 8 Gen 3 y batería de 4000mAh.', stock: 8, image: 'https://via.placeholder.com/300x200?text=Galaxy+S24' },
  { id: 3, title: 'MacBook Air M2', price: 1099, category: 'laptops', description: 'Laptop ultradelgada con chip M2 de Apple, pantalla Liquid Retina de 13.6 pulgadas y hasta 18 horas de batería.', stock: 5, image: 'https://via.placeholder.com/300x200?text=MacBook+Air+M2' },
  { id: 4, title: 'Dell XPS 15', price: 1499, category: 'laptops', description: 'Laptop premium con pantalla OLED 4K de 15.6 pulgadas, Intel Core i7 de 13a gen y GPU NVIDIA RTX 4060.', stock: 4, image: 'https://via.placeholder.com/300x200?text=Dell+XPS+15' },
  { id: 5, title: 'iPad Pro 12.9', price: 1099, category: 'tablets', description: 'Tablet profesional con chip M2, pantalla Liquid Retina XDR y compatibilidad con Apple Pencil de 2a generación.', stock: 7, image: 'https://via.placeholder.com/300x200?text=iPad+Pro' },
  { id: 6, title: 'Samsung Galaxy Tab S9', price: 799, category: 'tablets', description: 'Tablet Android con pantalla Dynamic AMOLED 2X de 11 pulgadas, resistente al agua y polvo (IP68).', stock: 6, image: 'https://via.placeholder.com/300x200?text=Galaxy+Tab+S9' },
  { id: 7, title: 'Sony WH-1000XM5', price: 349, category: 'audio', description: 'Auriculares inalámbricos con cancelación de ruido líder en la industria, 30 horas de batería y audio de alta resolución.', stock: 12, image: 'https://via.placeholder.com/300x200?text=Sony+WH1000XM5' },
  { id: 8, title: 'AirPods Pro 2', price: 249, category: 'audio', description: 'Auriculares in-ear con cancelación activa de ruido, audio espacial personalizado y hasta 6 horas de escucha.', stock: 15, image: 'https://via.placeholder.com/300x200?text=AirPods+Pro+2' },
]

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        const filtrados = productos.filter((p) => p.category === categoryId)
        resolve(filtrados)
      } else {
        resolve(productos)
      }
    }, 800)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === parseInt(id))
      if (producto) {
        resolve(producto)
      } else {
        reject('Producto no encontrado')
      }
    }, 800)
  })
}

export const getCategories = () => {
  return [
    { id: 'smartphones', label: 'Smartphones' },
    { id: 'laptops', label: 'Laptops' },
    { id: 'tablets', label: 'Tablets' },
    { id: 'audio', label: 'Audio' },
  ]
}
