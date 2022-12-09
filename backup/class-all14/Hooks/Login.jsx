import React, { useRef, useState } from 'react'

const Login = () => {
    let buttonTag = useRef(null)
    let [terms, setTerms] = useState(false)
    let acceptTermsHandler = (event) => {
        setTerms(event.target.checked)
        //buttonTag.current.disabled = !event.target.checked
        if (event.target.checked === true) {
            buttonTag.current.disabled = false
        }
        else {
            buttonTag.current.disabled = true
        }
    }
    return <div className="container">
        <pre>{JSON.stringify(terms)}</pre>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h4>Login</h4>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <input type="text" placeholder="Email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Password" className="form-control" />
                            </div>
                            <div className="form-check">
                                <input onClick={acceptTermsHandler} type="checkbox" className="form-input-check" /> Please accept Terms & Conditions
                            </div>
                            <div className="form-group">
                                <input ref={buttonTag} type="submit" className="btn btn-success" disabled />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login
