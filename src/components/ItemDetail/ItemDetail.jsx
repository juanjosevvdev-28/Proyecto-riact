import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({ item }) {
  const [agregado, setAgregado] = useState(false)
  const [cantidad, setCantidad] = useState(0)

  const handleAdd = (count) => {
    setCantidad(count)
    setAgregado(true)
  }

  return (
    <div className="item-detail">
      <img src={item.image} alt={item.title} className="item-detail-img" />
      <div className="item-detail-info">
        <h2>{item.title}</h2>
        <p className="item-detail-price">${item.price.toLocaleString('es-AR')}</p>
        <p className="item-detail-desc">{item.description}</p>
        <p className="item-detail-stock">Stock disponible: {item.stock} unidades</p>

        {!agregado ? (
          <ItemCount stock={item.stock} onAdd={handleAdd} />
        ) : (
          <div className="item-detail-confirm">
            <p>{cantidad} unidad{cantidad > 1 ? 'es' : ''} agregada{cantidad > 1 ? 's' : ''} al carrito</p>
            <Link to="/" className="item-detail-btn">Seguir comprando</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemDetail
