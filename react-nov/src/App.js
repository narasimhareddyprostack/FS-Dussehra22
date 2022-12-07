import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Counter from "./Hooks/Counter";
import Login from "./Forms/Login";
import Digital from "./Hooks/Digital";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Message from "./Hooks/Message";
import Product from "./Hooks/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/message" element={<Message />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/product" element={<Product />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
