const App = require("./App")

App.createUser("isaac@email.com", "Isaac Pontes")
App.createUser("lucas@email.com", "Lucas Queiroga")
App.createUser("juliana@email.com", "Juliana Conde")

App.deposit("isaac@email.com", 100)

App.transfer("isaac@email.com", "lucas@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("juliana@email.com", 1000, 4)

console.table(App.findUser("isaac@email.com"))
console.table(App.findUser("isaac@email.com").account)
console.table(App.findUser("lucas@email.com"))
console.table(App.findUser("lucas@email.com").account)
console.table(App.findUser("juliana@email.com"))
console.table(App.findUser("juliana@email.com").account)
console.table(App.findUser("juliana@email.com").account.loans[0].installments)