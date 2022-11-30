import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    render() {
        return (
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-6">

                        <form action="">
                            <label htmlFor="">Email Id</label>
                            <input type="text" /> <br /><br />
                            <label htmlFor="">Password</label>
                            <input type="text" /> <br /><br />
                            <input type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
