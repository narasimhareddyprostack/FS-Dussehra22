import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link className="navbar-brand" to="/">React Product CRUD</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="/products">Get Products</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/Admin">Admin</Link></li>
            </ul>
        </div>
    </nav>
}

export default Navbar
