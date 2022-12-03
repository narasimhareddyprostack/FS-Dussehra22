import React from 'react'
import Employee from './Employee'
class User extends React.Component {
    message = "GM"
    user = {
        user_Name: "Rahul",
        email: "rahul@gmail.com",
        sal: 'No Salary'
    }
    render() {
        return (
            <div>
                <h1> User Component</h1>
                <hr />
                <Employee sagnik={true} user={this.user} />

            </div>
        )
    }
}

export default User
