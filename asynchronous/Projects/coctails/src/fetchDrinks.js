import { showLoading } from './toogleLoading.js'

const fetchDrinks = async (url) => {
  showLoading()
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(err)
  }
}

export default fetchDrinks
