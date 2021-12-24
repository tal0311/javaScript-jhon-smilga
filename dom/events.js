const btns = document.querySelectorAll('.btn')
const h2 = document.querySelector('h2')

// btn.addEventListener('click', () => {
//   h1.innerHTML = 'you have changed the inner Html'
// })

// btn.addEventListener('click', changeColor)

// function changeColor() {
//   console.log('click')
//   if (h2.classList.contains('red')) {
//     h2.classList.remove('red')
//   } else h2.classList.add('red')
// }

// btns.forEach((btn) =>
//   btn.addEventListener('click', (e) => {
//     console.log(e.target)
//     e.currentTarget.style.color = 'green'
//     // e.target.style.color = 'green'
//   })
// )

const form = document.querySelector('form')
const btn = document.querySelector('.btn')
const input = document.querySelector('#name')

const input2 = document.querySelector('#password')

let users = []
form.addEventListener('submit', (e) => {
  e.preventDefault()

  let user = {
    [input.name]: input.value,
    [input2.name]: input2.value,
  }

  users = [...users, user]
})
