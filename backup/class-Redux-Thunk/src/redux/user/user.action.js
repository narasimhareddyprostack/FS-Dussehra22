import Axios from 'axios'
//action types
const USER_REQ = 'USER_REQ'
const USER_SUCCESS = 'USER_SUCCESS'
const USER_FAIL = 'USER_FAIL'
//action
let user_Req = () => {
    console.log("Third - Test Case 3")
    return { type: USER_REQ }
}
let user_Success = (user) => {
    console.log("Fourth - Test Case 4")
    return { type: USER_SUCCESS, payload: user }
}
let user_Failure = () => {
    return { type: USER_FAIL, payload: "failred" }
}
let user_Action = () => {
    console.log("Second - Test Case -2 ")
    return async (dispatch) => {
        dispatch(user_Req())
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data)
                dispatch(user_Success(res.data))
            })
            .catch(() => {
                dispatch(user_Failure())
            })

    }
}

export { USER_REQ, USER_SUCCESS, USER_FAIL, user_Action } 