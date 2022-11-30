import React, { Component } from 'react'
import employees from './data'

class Employee extends Component {
    render() {
        return (
            <div className="container">
                <h1>Employee Comp</h1>
                <pre>{JSON.stringify(employees)}</pre>

                <div className="row">
                    <div className="col-md-10">
                        <table className="table table-hover">
                            <thead className="bg-primary text-white">
                                <tr >
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>IP</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    employees.map((employee) => {
                                        return <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.first_name}</td>
                                            <td>{employee.last_name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.gender}</td>
                                            <td>{employee.ip_address}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default Employee
