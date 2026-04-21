import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>La página que buscás no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default NotFound
