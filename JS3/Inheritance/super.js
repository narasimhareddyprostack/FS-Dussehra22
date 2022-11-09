class Account {
    acc_Name;
    acc_Email;
    acc_Loc;
    constructor(name, email, loc) {
        this.acc_Name = name;
        this.acc_Email = email
        this.acc_Loc = loc
    }
}
class Savings_Account extends Account {
    id;
    amount;
    min_Bal = 500
    constructor(id, name, amount, email, loc) {
        super(name, email, loc)
        this.id = id;
        this.amount = amount
    }
    get_Bal() {
        return this.amount - this.min_Bal
    }
}
let a1 = new Savings_Account(101, "Rahul", 5000, 'Rahul@pm.com', 'Noida')
class Current_Account extends Account {
    min_Bal = 25000
    constructor(id, name, amount, email, loc) {
        super(name, email, loc)
        this.amount = amount
        this.id = id
    }
    get_Bal() {
        return this.amount - this.min_Bal
    }
}
let a2 = new Current_Account(102, "Rahul", 25000, 'Rahul@pm.com', "Noida")
console.log(a1.get_Bal())
console.log(a2.get_Bal())