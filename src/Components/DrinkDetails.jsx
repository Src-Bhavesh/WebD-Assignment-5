import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import './DrinkDetails.css'

function DrinkDetails() {
  const params = useParams()
  const drinkId = params.id
  const navigate = useNavigate()
  const [info, setDrinkInfo] = useState({})

  useEffect(()=>{
    const getDrink = async ()=>{
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`).catch(() => null)
    

      const data = await response.json()

    
      setDrinkInfo(data.drinks[0])
      
    }

    getDrink()
  }, [drinkId])

 

  return (
    <main>
      <article>
        <button type='button' onClick={() => navigate(-1)}>Back</button>
        <img src={info.strDrinkThumb} alt={info.strDrink}/>
        <section>
          <h1>{info.strDrink}</h1>
          <p>{info.strCategory}</p>
          <p>Glass: {info.strGlass}</p>
          <h2>Ingredients</h2>
          <ul>
            {info.strIngredient1 && <li>{info.strMeasure1} {info.strIngredient1}</li>}
            {info.strIngredient2 && <li>{info.strMeasure2} {info.strIngredient2}</li>}
            {info.strIngredient3 && <li>{info.strMeasure3} {info.strIngredient3}</li>}
            {info.strIngredient4 && <li>{info.strMeasure4} {info.strIngredient4}</li>}
            {info.strIngredient5 && <li>{info.strMeasure5} {info.strIngredient5}</li>}
            {info.strIngredient6 && <li>{info.strMeasure6} {info.strIngredient6}</li>}
            {info.strIngredient7 && <li>{info.strMeasure7} {info.strIngredient7}</li>}
            {info.strIngredient8 && <li>{info.strMeasure8} {info.strIngredient8}</li>}
            {info.strIngredient9 && <li>{info.strMeasure9} {info.strIngredient9}</li>}
            {info.strIngredient10 && <li>{info.strMeasure10} {info.strIngredient10}</li>}
            {info.strIngredient11 && <li>{info.strMeasure11} {info.strIngredient11}</li>}
            {info.strIngredient12 && <li>{info.strMeasure12} {info.strIngredient12}</li>}
            {info.strIngredient13 && <li>{info.strMeasure13} {info.strIngredient13}</li>}
            {info.strIngredient14 && <li>{info.strMeasure14} {info.strIngredient14}</li>}
            {info.strIngredient15 && <li>{info.strMeasure15} {info.strIngredient15}</li>}
          </ul>
          <h2>Instructions</h2>
          <p>{info.strInstructions}</p>
        </section>
      </article>
    </main>
  )
}

export default DrinkDetails
