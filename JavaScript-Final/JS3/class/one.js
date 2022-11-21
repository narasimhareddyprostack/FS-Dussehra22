class Account {
    min_Bal = 500;
    amount;
    open_Account() {

    }
    deposit_Amount(amount) {
        this.amount = amount
        console.log(amount)
    }

}

let a1 = new Account();
console.log(a1)
a1.open_Account()
a1.deposit_Amount(50000)
console.log(a1)
