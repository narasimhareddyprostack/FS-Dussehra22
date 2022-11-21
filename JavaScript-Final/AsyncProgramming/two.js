let sum = (a, b) => {
    return a + b
}
let multi = (a, b) => {
    return a * b
}
let calc = (a, b, callback) => {
    return callback(a, b)
}
let r1 = calc(10, 20, sum)
let r2 = calc(10, 20, multi)
//let r3 = calc(10, 20, () => { })
let r3 = calc(10, 20, (a, b) => { return a - b })
console.log(r1)
console.log(r2)
console.log(r3)