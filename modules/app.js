import { people } from './utils/data.js'

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

function showPeople() {
  let newPeople = people
    .map((person) => {
      const { name, job } = person
      return `<p>this is ${name} he is a <strong>${job}</strong> </p>`
    })
    .join(' ')

  container.innerHTML = newPeople
}

btn.addEventListener('click', showPeople)
