import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user_Action } from '../redux/user/user.action'
const User = () => {
    let dispatch = useDispatch()
    let users = useSelector((state) => {
        return state
    })
    React.useEffect(() => {
        console.log("First - Test Case 1")
        dispatch(user_Action())
    }, [])
    return (
        <div className="container mt-5">
            <pre>{JSON.stringify(users)}</pre>
            <h1>User Component</h1>
            <div className="row">
                <div className="col-md-6">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(users).length > 0 ? <>
                                    {
                                        users.users.map((singleUser, index) => {
                                            return <tr key={index}>
                                                <td>{singleUser.id}</td>
                                                <td>{singleUser.name}</td>
                                                <td>{singleUser.email}</td>
                                                <td>{"All Good"}</td>
                                            </tr>
                                        })
                                    }

                                </> : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User
