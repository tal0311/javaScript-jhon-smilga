import fetchDrinks from './fetchDrinks.js'

const ShowDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url)

  // display drinks
  console.log(data)
}

export default ShowDrinks
