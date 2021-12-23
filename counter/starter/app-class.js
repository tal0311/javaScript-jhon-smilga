function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(`please check "${selection}" selector, no element exist `)
}

class Counter {
  constructor(element, value) {
    this.counter = element
    this.value = value
    this.resetBtn = element.querySelector('.reset')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.DOMvalue = element.querySelector('.value')
    this.DOMvalue.textContent = this.value

    // bind this to all functions
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)
    this.increaseBtn.addEventListener('click', this.increase)
    this.decreaseBtn.addEventListener('click', this.decrease)
    this.resetBtn.addEventListener('click', this.reset)
  }

  increase() {
    console.log(this)
    this.value++
    this.DOMvalue.textContent = this.value
  }
  decrease() {
    this.value--
    this.DOMvalue.textContent = this.value
  }
  reset() {
    this.value = 0
    this.DOMvalue.textContent = this.value
  }
}

const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)

firstCounter.increase()
firstCounter.increase()
