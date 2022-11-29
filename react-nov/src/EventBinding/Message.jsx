import React, { Component } from 'react'

class Message extends Component {
    state = {
        msg: "Hello,...."
    }
    updateHandler = (value) => {
        this.setState({ msg: value })
    }


    render() {
        return (
            <div>
                <h2>Message Value:{this.state.msg}</h2>
                <button onClick={this.updateHandler.bind(this, "GM")}>GM</button>
                <button onClick={this.updateHandler.bind(this, "GA")}>GA</button>
                <button onClick={this.updateHandler.bind(this, "GN")}>GN</button>
            </div>
        )
    }
}

export default Message
