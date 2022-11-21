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
    constructor(id, name, amount, email, loc) {
        super(name, email, loc)
        this.id = id;
        this.amount = amount
    }
}
let a1 = new Savings_Account(101, "Rahul", 5000, 'Rahul@pm.com', 'Noida')
class Current_Account extends Account {
    constructor(id, name, amount, email, loc) {
        super(name, email, loc)
    }
}
let a2 = new Current_Account(102, "Rahul", 25000, 'Rahul@pm.com', "Noida")
console.log(a1)
console.log(a2)