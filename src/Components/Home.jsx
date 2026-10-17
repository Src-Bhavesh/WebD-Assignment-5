import { Link } from 'react-router'
import './Home.css'

function Home() {
  return (
    <main>
      <section>
        <p>GOOD DRINKS, NO ALCOHOL</p>
        <h1>A little refreshment<br />for every kind of day.</h1>
        <p>Find your new favourite from our menu of fresh, alcohol-free drinks.</p>
        <Link to='/drinks'>See menu</Link>
      </section>
    
    </main>
  )
}

export default Home
