// const result = document.querySelector('#result')
// console.log('result:', result)
// const allChildren = [...result.children]
// console.log((allChildren[1].innerHTML = 'ok '))

// const head2 = document.querySelector('h2')
// console.log('head2:', head2)

// const parent = head2.parentElement
// parent.style.color = 'red'

// const first = document.querySelector('.first')
// console.log('first:', (first.nextSibling.nextSibling.style.color = 'red'))

// const last = document.querySelector('.last')
// console.log('last:', (last.previousSibling.previousSibling.style.color = 'red'))

// const first2 = document.querySelector('.first')
// console.log('first2:', (first2.nextElementSibling.style.color = 'blue'))

// const nodeValue = first2.nextElementSibling.childNodes[0].textContent
// console.log('first2:', nodeValue)

// const text = first2.textContent
// console.log('text:', text)

// const =document.querySelector('')

// const link = document.querySelector('#link')

// const first = document.querySelector('.first')
// const idValue = first.getAttribute('id')
// console.log('classValue:', idValue)

// const last = link.nextElementSibling
// last.setAttribute('href', 'first.html')

// last.textContent = 'i also have class of first'
// const links = document.querySelectorAll('.first')
// console.log('links:', links)

// const first = document.querySelector('#first')
// const second = document.querySelector('#second')
// const third = document.querySelector('#third')

// // const classValue = (first.className = 'text')
// // const classValue2 = (first.className = 'color')

// const classValue = third.classList
// // second.className = 'text color'
// // third.classList.add('color')
// // third.classList.add('text')
// third.classList.add('text', 'color')
// third.classList.remove('text')

// let result = third.classList.contains('color')
// console.log('result:', result)

// console.log(classValue)

// const result = document.querySelector('#result')
// const first = document.querySelector('#first')

// let bodyDiv = document.createElement('div')
// let text = document.createTextNode('simple body div')

// bodyDiv.appendChild(text)

// result.appendChild(bodyDiv)
// // ///////////////////////////////////
// const heading = document.createElement('h2')
// const headingText = document.createTextNode('dynamic heading')
// heading.appendChild(headingText)
// heading.classList.add('text')
// result.insertBefore(heading, bodyDiv)

// result.insertBefore(bodyDiv, first)

// const smallHeading = document.createElement('h6')
// const smallText = document.createTextNode('im small heading')
// smallHeading.classList.add('color')

// smallHeading.appendChild(smallText)
// result.replaceChild(smallHeading, bodyDiv)

// console.log('result children:', result.children)

const h2 = document.createElement('h2')
h2.innerText = 'dynamic text'

document.body.prepend(h2)
