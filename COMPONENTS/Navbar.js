import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Login"
import { Header } from './Header'


// /

function Navbar() 
{
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

   

    function pleaseLogout()
    {
      // Logic to go back to Login Page
      // console.log(window.location.pathname) ==> /
      setIsLoggedIn(false)
      window.location.pathname = "/login"
      

    }

  return (
    <div style={{fontSize: "35px"}}>
      <BrowserRouter>
         { isLoggedIn ? <div><Link to="/home">Home</Link> <button style={{width: "15%"}} onClick={pleaseLogout}>Logout</button></div> : <Link to="/login">Login</Link>}
         
          <Routes>
            <Route path="/login" element={<Login setLoggedIn={setIsLoggedIn}/>}></Route>
            <Route path="/home" element={<Header/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar


// useNavigate() annot be used inside a callback function 
// Routing
// RULE --> The components which are involved in routing, only in those components we can use useNavigate()