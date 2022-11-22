import ReactDOM from 'react-dom'
import App from './App'
//ReactDOM.render(1,2)
//ReactDOM.render(what you want to render,where you want render)
//ReactDOM.render("Hello,GM", document.getElementById('rajni'))
ReactDOM.render(<div><h1>Hello,GM...</h1><h2>Hello,GE</h2></div>, document.getElementById('rajni'))
ReactDOM.render(<App />, document.getElementById('root'))