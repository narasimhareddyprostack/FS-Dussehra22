import React from 'react'

function CompB(props) {
    return (
        <div>
            <h1>Component B</h1>
            <pre>{JSON.stringify(props)}</pre>

            <h2>Employee Name:{props.employee}</h2>
            <h2>Employee Salary:{props.esal}</h2>
            <h2>Employee Location:{props.location[1]}</h2>

        </div>
    )
}

export default CompB
