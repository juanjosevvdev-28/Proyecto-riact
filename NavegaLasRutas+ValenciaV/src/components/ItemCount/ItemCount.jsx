import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1)

  const incrementar = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrementar = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button className="item-count-add" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
