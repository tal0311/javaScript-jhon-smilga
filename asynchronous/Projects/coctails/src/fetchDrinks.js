import { showLoading } from './toggleLoading.js'

const fetchDrinks = async (url) => {
  console.log(url)
  showLoading()
  try {
    const response = await fetch(url)
    console.log('response from fetch drinks:', response)

    const data = await response.json()
    console.log(data)

    return data
  } catch (error) {
    console.log('error here:', 'in catch block on fetchDrinks')
    console.log(error)
  }
}

export default fetchDrinks
