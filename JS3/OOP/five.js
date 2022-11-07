class Account {
    min_Bal = 500
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount() {
        console.log("Amount - deposited")
    }
    get_Bal() {
        console.log("Server Busy")
    }
    get_St() {
        console.log("Deposit more")
    }
    withdrawl() {
        console.log("Insufficient funds")
    }
    close_Account() {
        console.log("Go to Hell")
    }
}
let a1 = new Account()
console.log(a1.min_Bal)
a1.open_Account()
a1.deposit_Amount()
a1.get_Bal()
a1.get_St()
a1.withdrawl()
a1.close_Account()