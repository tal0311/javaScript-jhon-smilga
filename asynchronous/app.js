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
const url = 'https://source.unsplash.com/random/'
const imageContainer = getElement('.img-container')

btn.addEventListener('click', () =>
  loadImage(url).then((data) => console.log(data))
)

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.addEventListener('load', () => console.log('ok'))
    img.addEventListener('error', () => console.log('image loaded'))
    img.src = url
  })
}
