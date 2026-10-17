import { Link } from 'react-router'
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <Link to='/'>bhavesh naaa banaya </Link>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/drinks'>Menu</Link>
        <Link to='/favourites'>favourites</Link>
      </nav>
    </header>
  )
}

export default Navbar
