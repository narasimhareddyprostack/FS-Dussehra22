import React from 'react'
let Counter = () => {
    let [counter, setCounter] = React.useState(10);
    return <React.Fragment>
        <h1>Counter Comp</h1>

        <button onClick={() => {
            setCounter(counter - 1)
        }}>-</button>
        {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+</button>
    </React.Fragment>
}
export default Counter