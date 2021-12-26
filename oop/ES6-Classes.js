class Account {
  // WHATS INSIDE CONSTRUCTOR GOES INSIDE EVERY INSTANCE
  constructor(fullName, balance) {
    ;(this.fullName = fullName), (this.balance = balance)
  }
  // THIS WILL SHOW ON EVERY INSTANCE, SAME AS IN CONSTRUCTOR IT IS A GLOBAL PROPERTY FOR THE CLASS INSTANCES
  bank = 'LEUMI'
  // METHOD ON THE PROTOTYPE OF ACCOUNT CLASS
  deposit(amount) {
    this.balance += amount
    return console.log(
      `Hallo ${this.fullName}, you have deposited ${amount}ILS. your new balance is ${this.balance}ILS`
    )
  }
  withdrawal(amount) {
    this.balance -= amount
    return console.log(
      `Hallo ${this.fullName}, you have withdrawaled ${amount}ILS. your new balance is ${this.balance}ILS`
    )
  }
}

// CRATE NEW INSTANCE OF ACCOUNT
const tal = new Account('tal amit', 100)
tal.sayFullName = function () {
  console.log(`hallo ${this.fullName}, nice to see you`)
}

// PRIVET METHOD ON TAL INSTANCE
tal.sayFullName()

// CREATE ANOTHER INSTANCE OFF ACCOUNT
const dor = new Account('dor amit', 150)
console.log('dor:', dor)

// METHODS ON PROTOTYPE
dor.deposit(400)
tal.withdrawal(40)
tal.deposit(100)
// ///////////////////////////////////////////////

class Counter {
  constructor(count) {
    this.count = count
  }
  increment() {
    console.log(this)
    this.count++
    return console.log('this.count:', this.count)
  }
}

const btn = document.querySelector('button')

counterBind = new Counter(0)
console.log(counterBind)

// fail
// GOOD EXP BOUT YOU CAN'T REMOVE EVENT LISTENER.
// btn.addEventListener('click', counterBind.increment.bind(counterBind))

// BETTER WAY IS TO GO WHIT REFERENCE TO THE FUNCTION
let increment = counterBind.increment.bind(counterBind)

btn.addEventListener('click', increment)
