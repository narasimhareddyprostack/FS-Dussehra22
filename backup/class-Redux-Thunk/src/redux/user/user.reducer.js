//import Action tyeps 
import { USER_REQ, USER_SUCCESS, USER_FAIL } from './user.action'
let initialState = {
    users: [],
    message: ""
}

let user_Reducer = (state = initialState, action) => {
    console.log("Five - Test Case 5")
    let { type, payload } = action;
    switch (type) {
        case 'USER_REQ':
            return { ...state, }
        case 'USER_SUCCESS':
            return { ...state, user: payload }
        case 'USER_FAIL':
            return { ...state, message: payload }

        default:
            return state
    }

}
export { user_Reducer }