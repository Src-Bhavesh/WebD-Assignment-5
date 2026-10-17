import { Link } from 'react-router'
import './NotFound.css'

function NotFound() {
  return (
    <main>
      <article>
        <h1>Page not found</h1>
        <Link to='/'>Go  Home</Link>
      </article>
    </main>
  )
}

export default NotFound
