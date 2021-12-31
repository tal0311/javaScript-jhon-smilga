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

    this.modal = getElement('.modal')
    this.modalImg = getElement('.main-img')
    this.imageName = getElement('.image-name')
    this.modalImgs = getElement('.modal-images')
    this.closeBtn = getElement('.close-btn')
    this.nextBtn = getElement('.next-btn')
    this.prevBtn = getElement('.prev-btn')

    // SELF REFERENCE POINTS TO GALLERY
    // let self = this
    // bind functions
    this.closeModal = this.closeModal.bind(this)
    this.prevImage = this.prevImage.bind(this)
    this.nextImage = this.nextImage.bind(this)

    this.container.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('img')) {
          this.openModel(e.target, this.list)
        }
      }.bind(this)
    )
  }
  openModel(selectedImage, list) {
    this.setMainImage(selectedImage)
    this.modalImgs.innerHTML = list
      .map((image) => {
        return ` <img
        src="${image.src}"
        title="${image.title}"
        class="${
          selectedImage.dataset.id === image.dataset.id
            ? 'modal-img selected'
            : 'modal-img'
        }"
        data-id="${image.dataset.id}"
        alt="nature"
      />`
      })
      .join('')

    this.modal.classList.add('open')
    this.closeBtn.addEventListener('click', this.closeModal)
    this.nextBtn.addEventListener('click', this.nextImage)
    this.prevBtn.addEventListener('click', this.prevImage)
  }
  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src
    this.imageName.textContent = selectedImage.title
  }
  closeModal() {
    this.modal.classList.remove('open')
    this.closeBtn.removeEventListener('click', this.closeModal)
    this.nextBtn.removeEventListener('click', this.nextImage)
    this.prevBtn.removeEventListener('click', this.prevImage)
  }
  nextImage() {}
  prevImage() {}
}

let nature = new Gallery(getElement('.nature'))
let city = new Gallery(getElement('.city'))

console.log(nature, city)
