import React, { useReducer } from 'react'
let initialState = {
    message: "Hello!"
}
let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GM':
            return { message: "Good Morning" }
        case 'GA':
            return { message: "Good Afternoon" }
        case 'GN':
            return { message: "Good Night" }
    }
}
const MessageEx = () => {
    let [state, dispatch] = useReducer(reducer, initialState)
    //let [state, setState] = useState(initialState)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                           
                            <h3>{state.message}</h3>
                        </div>
                        <div className="card-body">
                            <button onClick={() => { dispatch({ type: "GM" }) }} className="btn btn-success mr-2">GM</button>
                            <button onClick={() => { dispatch({ type: "GA" }) }} className="btn btn-warning mr-2">GA</button>
                            <button onClick={() => { dispatch({ type: "GN" }) }} className="btn btn-primary">GN</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MessageEx
