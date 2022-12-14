//reducer is pure function it take two parameter
//1.state
//2.action
//reducer update or create store based on action types
import { GM, GN } from './message.action'
let initialState = {
    msg: "Hello...."
}
let messageReducer = (state = initialState, action) => {
    console.log(action)
    console.log(action.type)
    switch (action.type) {
        case 'GM':
            return { msg: "Hello,Good Morning" }
        case 'GN':
            return { msg: "Hello,Good Night" }
        default:
            return state
    }

}
export { messageReducer }