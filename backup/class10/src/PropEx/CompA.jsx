import React from 'react'
import CompB from './CompB'
function CompA() {
    let ename = "Rahul"
    let esal = 45000
    let eloc = ['Noida', 'Wayanad']
    return (
        <div>
            <h1>Component A</h1>
            <hr />
            <CompB employee={ename} esal={esal} location={eloc} />
        </div>
    )
}

export default CompA
