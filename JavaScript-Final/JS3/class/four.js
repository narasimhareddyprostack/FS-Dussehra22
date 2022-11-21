class Account {
    acc_Id;
    acc_Name;
    acc_Amount;
    min_Bal = 500
    constructor(id, name, amount) {
        console.log("Special method-executing auto")
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Amount = amount
    }
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount(x) {
        console.log("testing", x)
        this.acc_Amount = this.acc_Amount + x
    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
    withdrawl() { }
    close_Account() { }
}
let a1 = new Account(101, "Rahul", 5000)
let a2 = new Account(102, "Priyanka", 50000)

a2.deposit_Amount(600000)

console.log(a1)
console.log(a2)
console.log(a2)
let r1 = a1.get_Bal()
let r2 = a2.get_Bal()
console.log(r1)
console.log(r2)