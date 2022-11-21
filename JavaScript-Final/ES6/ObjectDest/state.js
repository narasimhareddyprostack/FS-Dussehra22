let state = {
    product: {
        id: 101,
        name: "Iphone",
        price: 50000,
        color: {
            color1: 'Gray',
            color2: 'red'
        }
    }
}

console.log(state.product.name)
let { product } = state
let { name, color } = product
console.log(name)
console.log(color)