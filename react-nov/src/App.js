import React from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './Products/Products'
import Admin from './Products/Admin'
import CreateProduct from './Products/CreateProduct'
const App = () => {
    return (
        <div>

            <Router>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link to="/">Redux Thunk Example</Link>
                    <div className="ml-auto">
                        <ul className="navbar-nav">
                            <li className="nav-list"><Link className="nav-link" to="/products">Products</Link></li>
                            <li className="nav-list"><Link className="nav-link" to="/create">Create Product</Link></li>
                            <li className="nav-list"><Link className="nav-link" to="/admin">Admin</Link></li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/products" element={<Products />} />
                    <Route exact path="/create" element={<CreateProduct />} />
                    <Route exact path="/admin" element={<Admin />} />
                </Routes>
            </Router>

        </div>
    )
}

export default App
