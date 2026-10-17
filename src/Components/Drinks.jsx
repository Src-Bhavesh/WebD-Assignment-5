import { useState } from 'react'
import DrinkCard from './DrinkCard'
import ErrorMessage from './ErrorMessage'
import './Drinks.css'

function Drinks({ drinks, err, favorites,changefav}){
  const [search, setSearch] = useState('')
  const yedrinks=[]

  for (let i = 0; i < drinks.length; i++) {
    const dname = drinks[i].strDrink.toLowerCase()
    if (dname.includes(search.toLowerCase())) {
      yedrinks.push(drinks[i])
    }
  }

  return (
    <main>
      <section>
        <header>
    
          <input
            type='search'
            placeholder='Search'
            onChange={(event)=>setSearch(event.target.value)}
          />
        </header>
        {err && <ErrorMessage err={err} />}
        {!err && yedrinks.length === 0 && <p>No drinks found</p>}
        <section>
          {yedrinks.map((drink) => {
            let isfav = false

            for(let i=0; i<favorites.length; i++){
              if(favorites[i].idDrink ===drink.idDrink){
                isfav = true
              }
            }

            return (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
                isfav={isfav}
                changefav={changefav}
              />
            )
          })}
        </section>
      </section>
    </main>
  )
}

export default Drinks
