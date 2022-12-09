import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          React Routing
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            {/*    <li className="nav-list">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li> */}
            {/*  <li className="nav-list">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li> */}
            {/*    <li className="nav-list">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li> */}
            {/*   <li className="nav-list">
              <Link className="nav-link" to="/message">
                Message
              </Link>
            </li> */}
            <li className="nav-list">
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            {/*   <li className="nav-list">
              <Link className="nav-link" to="/digital">
                Digital
              </Link>
            </li> */}
            {/* <li className="nav-list">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li> */}
            <li className="nav-list">
              <Link className="nav-link" to="/ref">
                useRef Hook
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link" to="/reflogin">
                useRef Hook - Login
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link" to="/reducer">
                useReducer-Hook
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
