function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(`please check "${selection}" selector, no element exist `)
}

function Counter(element, value) {
  this.counter = element
  this.value = value
  this.resetBtn = element.querySelector('.reset')
  this.increaseBtn = element.querySelector('.increase')
  this.decreaseBtn = element.querySelector('.decrease')
  this.DOMvalue = element.querySelector('.value')
  this.DOMvalue.textContent = this.value
}

Counter.prototype.increase = function () {
  console.log(this)
  this.value++
  this.DOMvalue.textContent = this.value
}
Counter.prototype.decrease = function () {
  console.log(this)
  this.value--
  this.DOMvalue.textContent = this.value
}
Counter.prototype.reset = function () {
  console.log(this)
  this.value = 0
  this.DOMvalue.textContent = this.value
}

const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)

firstCounter.increase()
