import React from 'react'
import Navbar from './Navbar/Navbar'
import Products from './Products/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="products" element={<Products />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
