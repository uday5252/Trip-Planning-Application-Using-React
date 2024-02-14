
// Create a COMPONENT
// props 

import { render } from "react-dom"
import { Header } from "./COMPONENTS/Header"
import Navbar from "./COMPONENTS/Navbar"

function App()
{
   return(
    <div>
        <Navbar/>
    </div>
   ) 
}

render(<App/>, document.querySelector("#root"))

// index.js --> index.html ==> render() --> library (react-dom)


