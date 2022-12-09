import React, { useState } from 'react'

const Message = () => {
    let [msg, setMsg] = useState("HEllo");
    let gmHandler = () => {
        setMsg("GM Rahul Gandhi")
    }
    let gnHandler = () => {
        setMsg("GN Rahul Ji")
    }
    return (
        <div>
            <h1>Message Component : {msg}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message
