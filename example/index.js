const Account = require('./models/Account')

const main = () => {
    let name
    let balance
    let accont = Account(100)

    balance = accont('withdraw', 10)
    balance = accont('withdraw', 20)
    balance = accont('withdraw', 20)

    accont('setFirstName', 'Extreme')
    accont('setLastName', 'Code')
    
    accont('notExistedMethod')

    name = accont('getName')

    console.log('Name: ')
    console.log(name)

    console.log('Balance: ')
    console.log(balance)
}

main()
