import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/productos'
import ItemList from '../components/ItemList/ItemList'

function ItemListContainer() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts(categoryId)
      .then((data) => {
        setItems(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })

  }, [categoryId])

  if (loading) {
    return <p className="loading">Cargando productos...</p>
  }

  return <ItemList items={items} />
}

export default ItemListContainer
