import fetchDrinks from './src/fetchDrinks.js'
import displayDrink from './src/displaySingleDrink.js'
const baseURL = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const presentDrink = async () => {
  const id = localStorage.getItem('drink')
  console.log(id)

  const drink = await fetchDrinks(baseURL + id)
  displayDrink(drink)

  console.log(response)
}

window.addEventListener('DOMContentLoaded', presentDrink)
