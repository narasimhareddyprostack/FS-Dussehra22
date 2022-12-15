//combile reducer
import { combineReducers } from 'redux'
import { messageReducer } from './Message/message.reducer'
import { productReducer } from './Product/product.reducer'
let rootReducer = combineReducers({ message: messageReducer, product: productReducer });
export { rootReducer }

//store
/*
{
 message:{
      msg:"Hello"
 },
 product:{
    product_Name: "Iphone 12",
    price: 45000,
    image: '',
    qty: 1
 }

}
*/