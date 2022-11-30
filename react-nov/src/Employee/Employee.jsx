import React, { Component } from 'react'
import users from './userdata'
class Employee extends React.Component {
    render() {
        return <>
            <div className="container">
                <div className="row">
                    <pre>{JSON.stringify(users)}</pre>
                    <div className="col-md-8">
                        <table className="table">
                            <thead className="bg-danger text-white">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email </th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return <tr key={index}>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.gender}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Employee