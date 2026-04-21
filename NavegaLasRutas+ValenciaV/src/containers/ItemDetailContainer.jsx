import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productos'
import ItemDetail from '../components/ItemDetail/ItemDetail'

function ItemDetailContainer() {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    setError(false)

    getProductById(itemId)
      .then((data) => {
        setItem(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })

  }, [itemId])

  if (loading) {
    return <p className="loading">Cargando producto...</p>
  }

  if (error) {
    return <p className="loading">Producto no encontrado.</p>
  }

  return <ItemDetail item={item} />
}

export default ItemDetailContainer
