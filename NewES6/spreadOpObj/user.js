let user = {
    id: 101,
    name: "Rahul Gandhi",
    email: "rahul@gmail.com"
}
let details = {
    email: 'rahul@ibm.com',
    loc: "Bangalore",
    address: "Inida"
}

let user_Details = {
    ...user,
    ...details
}
console.log(user_Details)