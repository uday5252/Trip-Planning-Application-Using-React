import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { myAuth, myProvider } from '../firebasedata'
import { useNavigate } from "react-router-dom"

// props ==> setLoggedIn={setIsLoggedIn}

function Login(props) 
{
    console.log(window)
    
    const navigate = useNavigate()
   
    function login()
    {
        // Logic to display the popup will all gmails id's
        signInWithPopup(myAuth, myProvider)
        .then(function()
        {
            // Logic to extract Username and Email ID
            let username = myAuth.currentUser.displayName
            let email = myAuth.currentUser.email

            console.log(username, email)
            props.setLoggedIn(true)

            // Navigate to Home Page(/home)
            navigate("/home")
            // useNavigate("/home")
            
        })
        .catch(function(error)
        {
            console.log(error)
        })

    }

  return (
    <div>
        <button style={{width: "15%"}} onClick={login}>Continue with Google</button>
    </div>
  )
}

export default Login
