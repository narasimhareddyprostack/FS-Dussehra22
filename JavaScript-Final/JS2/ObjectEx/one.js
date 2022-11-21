// let emp = {} //empty obj
/* let emp = {
    id: 101,
    name: "Rahul",
    get_Details: function () { }
} */
let emp = {
    id: 101,
    name: "Rahul",
    get_Details: () => { console.log("Display Details...") }
}
console.log(emp.id)
console.log(emp.name)
console.log(emp.sal) //undefined
emp.get_Details();
emp.get_SalaryDetails();