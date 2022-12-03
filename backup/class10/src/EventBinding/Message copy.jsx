import React, { Component } from 'react'

class Message extends Component {
    state = {
        msg: "Hello,...."
    }
    gmHanlder = () => {
        this.setState({
            msg: "GM,Rahul Ji"
        })
    }
    gaHanlder = () => {
        this.setState({ msg: "GA" })
    }
    gnHanlder = () => {
        this.setState({
            msg: "GN"
        })
    }
    render() {
        return (
            <div>
                <h2>Message Value:{this.state.msg}</h2>
                <button onClick={this.gmHanlder}>GM</button>
                <button onClick={this.gaHanlder}>GA</button>
                <button onClick={this.gnHanlder}>GN</button>
            </div>
        )
    }
}

export default Message
