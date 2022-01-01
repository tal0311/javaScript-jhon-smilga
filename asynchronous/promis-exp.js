// random photo
//https://awik.io/generate-random-images-unsplash-without-using-api/

function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    throw Error('Not a valid selector')
  }
}

const one = getElement('.one')
const tow = getElement('.tow')
const three = getElement('.three')
const btn = getElement('.btn')

btn.addEventListener('click', () => console.log('ok'))

const promise = new Promise((resolve, reject) => {
  let value = true
  if (value) {
    resolve(['your data'])
  } else {
    reject('rejected: access from catch')
  }
})
console.log('promise:', promise)

promise.then((data) => console.log(data)).catch((err) => console.log(err))
