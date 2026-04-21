import { Link } from 'react-router-dom'
import './ItemCard.css'

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} className="item-card-img" />
      <div className="item-card-body">
        <h3 className="item-card-title">{item.title}</h3>
        <p className="item-card-price">${item.price.toLocaleString('es-AR')}</p>
        <Link to={`/item/${item.id}`} className="item-card-btn">Ver detalle</Link>
      </div>
    </div>
  )
}

export default ItemCard
