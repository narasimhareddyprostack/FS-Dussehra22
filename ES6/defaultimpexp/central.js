let tax = 18
let cal_Cal = () => {
    console.log("No Tax! enjoy")
}
class Tax {
    constructor() {
        console.log("Tax - class from Central.js - const method")
    }
}

//export default Tax;  ES6

module.exports = Tax