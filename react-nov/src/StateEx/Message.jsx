import React, { Component } from 'react'

class Message extends Component {
    state = {
        msg: "Hello,,,,,"
    }
    gmHandler = () => {
        this.setState({ msg: "Good Morning" })
    }
    gnHandler = () => {
        this.setState({ msg: "Goood Night" })
    }
    render() {
        console.log("First time")
        return <div>
            <h1>Message Value:{this.state.msg}</h1>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}

export default Message
