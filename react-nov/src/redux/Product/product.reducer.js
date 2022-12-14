import { DECR, INCR } from './product.action'
let initialState = {
    product_Name: "Iphone 12",
    price: 45000,
    image: '',
    qty: 1
}
let productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCR':
            return { ...state, qty: state.qty + 1 }
        case 'DECR':
            return { ...state, qty: state.qty - 1 }
        default:
            return state
    }
}
export { productReducer }