import React from "react"
import { Link } from "react-router-dom"

function LandingPage(){
    return(
        <div>
            <Link to="/login">Login</Link>

            <Link to="/user_register">Employee Register</Link>
            <Link to="/company_register">Company Register</Link>

            <Link to="/user_profile">User Profile</Link>
            <Link to="/company_profile">Company Profile</Link>
        </div>
    )
}




export default LandingPage