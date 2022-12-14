import React from 'react'
import { gmAction, gnAction } from '../redux/Message/message.action'
import { useDispatch, useSelector } from 'react-redux'

const Message = () => {
    let dispatch = useDispatch();
    let msg = useSelector((state) => {
        return state.msg
    })
    // let msg = 'Hello'
    let gmHandler = () => {
        //view to action
        //dispatch an action
        console.log("First - view to action")
        dispatch(gmAction())
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }
    return (
        <div>
            <pre>{JSON.stringify(msg)}</pre>
            <h1>Message : {msg}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message
