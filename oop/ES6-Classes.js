class Account {
  constructor(fullName, balance) {
    ;(this.fullName = fullName), (this.balance = balance)
  }
  deposit(amount) {
    this.balance += amount
    return console.log(amount)
  }
}

const tal = new Account('tal amit', 100)
tal.sayFullName = function () {
  console.log(`hallo ${this.fullName}, nice to see you`)
}

tal.sayFullName()

const dor = new Account('dor amit', 150)
console.log('dor:', dor)
