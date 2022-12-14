//what is store? redux store? - global store or collection of states
//how to create store?
//what basis we are creating store ie reducer
import { messageReducer } from './Message/message.reducer'
import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
let store = createStore(messageReducer, composeWithDevTools())
//let store = createStore(messageReducer)
export { store }