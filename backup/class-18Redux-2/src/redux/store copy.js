//what is store? redux store? - global store or collection of states
//how to create store?
//what basis we are creating store ie reducer
import { messageReducer } from './Message/message.reducer'
import { productReducer } from './Product/product.reducer'
import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
let store = createStore(productReducer, composeWithDevTools())
//let store = createStore(messageReducer)
export { store }