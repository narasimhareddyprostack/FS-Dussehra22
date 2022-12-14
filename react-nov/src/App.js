import React from 'react'
import Message from './Message/Message'
import { Provider } from 'react-redux'
import Product from './Product/Product'
import { store } from './redux/store'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <nav className="navbar navbar-dark bg-dark">
                    <a href="#" className="navbar-brand">React Redux</a>
                </nav>
                <h1>App Component</h1>
                <hr />
                <Product />
            </Provider>

        </div>
    )
}

export default App
