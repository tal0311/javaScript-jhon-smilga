function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  )
}

class Gallery {
  constructor(element) {
    this.container = element
    this.list = [...element.querySelectorAll('.img')]
    console.log('this.list:', this.list)
    this.modal = getElement('.modal')
    this.modalImg = getElement('.modal-img')
    this.modalImgs = getElement('.modal-images')
    this.closeBtn = getElement('.close-btn')
    this.nextBtn = getElement('.next-btn')
    this.prevBtn = getElement('.prev-btn')

    // SELF REFERENCE POINTS TO GALLERY
    // let self = this
    // bind functions

    this.container.addEventListener(
      'click',
      function (e) {
        console.log(self)
        this.openModel()
      }.bind(this)
    )
  }
  openModel() {
    this.modal.classList.add()
    console.log('open modal')
  }
}

let nature = new Gallery(getElement('.nature'))
let city = new Gallery(getElement('.city'))

console.log(nature, city)
