import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Drinks from './Components/Drinks'
import DrinkDetails from './Components/DrinkDetails'
import Favourite from './Components/Favourite'
import NotFound from './Components/NotFound'

function App(){
  const [drinks, setDrinks] = useState([])
  const [favorites, setFavorites] = useState([])
  const [err, seterr] = useState('')

  useEffect(()=>{
    const getDrinks = async()=>{
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').catch(() => null)

      if (!res || !res.ok) {
        seterr('drinks load nhi ho rhaaaa ')
        return
      }

      const data = await res.json()
      setDrinks(data.drinks)
    }
    getDrinks()
  },[])

  

  const changefav = (drink)=>{
    let favhai = false
    const newfav = []

    for(let i = 0; i < favorites.length; i++){
      if(favorites[i].idDrink === drink.idDrink){
        favhai = true
      }
      else{
        newfav.push(favorites[i])
      }
    }

    if(!favhai){
      newfav.push(drink)
    }

    setFavorites(newfav)
  }

  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/drinks'
          element={
            <Drinks
              drinks={drinks}
              err={err}
              favorites={favorites}
              changefav={changefav}
            />
          }
        />
        <Route path='/drinks/:id' element={<DrinkDetails />} />
        <Route path='/favourites'element={<Favourite favorites={favorites} changefav={changefav} />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
