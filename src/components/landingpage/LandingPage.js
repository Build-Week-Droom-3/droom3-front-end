import React from "react"
import { Link } from "react-router-dom"

function LandingPage(){
    return(
        <div>
            <Link to="/login">Login</Link>

            <Link to="/user_register">Employee</Link>
            <Link to="/company_register">Company</Link>

        </div>
    )
}




export default LandingPage