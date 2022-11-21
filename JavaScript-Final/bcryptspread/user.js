const bcrypt = require('bcrypt')
let user = {
    name: "Rahul Gandhi",
    email: "rahul@gmail.com",
    cc: '4444555566667777',
    password: "ILoveIndia"
}
let salt = bcrypt.genSaltSync(10);
let new_CC = bcrypt.hashSync(user.cc, salt)
let new_Password = bcrypt.hashSync(user.password, salt)
/* console.log(user.cc)
console.log(new_CC) */
console.log(user)
user = {
    ...user, cc: new_CC, password: new_Password
}
console.log(user)