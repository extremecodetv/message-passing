const Account = require('./models/Account')

const main = () => {
    let name
    let balance
    let account = Account(100)

    balance = account('withdraw', 10)
    balance = account('withdraw', 20)
    balance = account('withdraw', 20)

    account('setFirstName', 'Extreme')
    account('setLastName', 'Code')
    
    account('notExistedMethod')

    name = account('getName')

    console.log('Name: ')
    console.log(name)

    console.log('Balance: ')
    console.log(balance)
}

main()
