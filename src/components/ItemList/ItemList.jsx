import ItemCard from '../ItemCard/ItemCard'
import './ItemList.css'

function ItemList({ items }) {
  if (items.length === 0) {
    return <p className="loading">No hay productos en esta categoría.</p>
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemList
