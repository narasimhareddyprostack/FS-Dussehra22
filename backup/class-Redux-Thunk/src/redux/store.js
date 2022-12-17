//how to create store?
import { createStore, applyMiddleware } from 'redux'
import { user_Reducer } from './user/user.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
let store = createStore(user_Reducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export { store }