import DrinkCard from './DrinkCard'
import './Favourite.css'

function Favourite({favorites, changefav}) {
  let favoriteList

  if(favorites.length === 0){
    favoriteList = <p>favorite nhi hai koii</p>
  } 
  else{
    favoriteList=(
      <section>
        {favorites.map((drink)=>(
          <DrinkCard key={drink.idDrink} drink={drink} isfav={true} changefav={changefav} />
        ))}
      </section>
    )
  }

  return (
    <main>
      <section>
        <header>
          <p>YOUR COLLeCTION</p>
          <h1>Favourites</h1>
        </header>
        {favoriteList}
      </section>
    </main>
  )
}

export default Favourite
