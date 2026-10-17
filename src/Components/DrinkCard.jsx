import { Link } from 'react-router'
import './DrinkCard.css'

function DrinkCard({ drink, isfav, changefav }){
  let heart = '♡'

  if (isfav){
    heart = '♥'
  }

  return (
    <article>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <button onClick={() => changefav(drink)}>
        {heart}
      </button>
      <h2>{drink.strDrink}</h2>
      <Link to={`/drinks/${drink.idDrink}`}>View recipe</Link>
    </article>
  )
}

export default DrinkCard
