const Dispatcher = require('../../lib/core/Dispatcher')

const Account = (amount) => {
    let balance = amount
    let firstName = null
    let lastName = null
   
    const methods = {
      withdraw: (count) => {
        if (count > balance) {
          throw new Error('Not enough cash')
        }
   
        balance -= count
        return balance
      },
      deposit: (count) => {
        balance += count
        return balance
      },
      setFirstName: (name) => {
          firstName = name
          return firstName
      },
      setLastName: (name) => {
          lastName = name
          return lastName
      },
      getName: () => {
          return `${firstName} ${lastName}`
      }
    }
   
    return Dispatcher(methods)
}

module.exports = Account
