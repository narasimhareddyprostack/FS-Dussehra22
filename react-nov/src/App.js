import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import ContactApp from './Contacts/ContactApp'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ContactApp />
            </div>
        )
    }
}

export default App
