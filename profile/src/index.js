import ReactDom from 'react-dom'
import App from './App'  // import this component
import './index.css'

ReactDom.render(<App/>, document.querySelector("#root"))  // render component <App/> with tag root
