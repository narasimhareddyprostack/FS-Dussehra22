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
        console.log(this.acc_Amount)
        this.acc_Amount = this.acc_Amount + x
    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
    withdrawl() { }
    close_Account() { }
}

let a1 = new Account(102, "Priyanka", 50000)
console.log(a1)
a1.deposit_Amount(600000)
console.log(a1)
console.log(a1.get_Bal())