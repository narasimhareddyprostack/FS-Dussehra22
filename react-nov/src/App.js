import React from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './User/User'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <nav className="navbar navbar-dark bg-dark">
                        <Link to="/">Redux Thunk Example</Link>
                        <div className="ml-auto">
                            <ul className="navbar-nav">
                                <li className="nav-list"><Link className="nav-link" to="/user">User</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <Routes>
                        <Route exact path="/user" element={<User />} />
                    </Routes>
                </Router>
            </Provider>
        </div>
    )
}

export default App
