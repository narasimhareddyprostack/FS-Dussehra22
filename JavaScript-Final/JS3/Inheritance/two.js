class Account {
    constructor() {
        console.log("Account class Const")
    }
}
class Savings_Account extends Account {
    constructor() {
        super()
        console.log("Savings Class Const")
    }
}
new Savings_Account()
//class Current_Account extends Account { }