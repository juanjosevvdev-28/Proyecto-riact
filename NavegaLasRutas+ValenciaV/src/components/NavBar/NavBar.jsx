import { Link } from 'react-router-dom'
import { getCategories } from '../../services/productos'
import './NavBar.css'

function NavBar() {
  const categories = getCategories()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">TechStore</Link>
      <ul className="navbar-links">
        <li>
          <Link to="/">Todos los productos</Link>
        </li>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link to={`/category/${cat.id}`}>{cat.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
