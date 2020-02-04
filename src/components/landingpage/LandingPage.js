import React from "react"
import "./LandingPage.scss"
import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <div className="landing-page-container">
            <div className="login-register-container">
                <Link className="login login-register" to="/login">Login</Link>
                <a className="register login-register" href="#register">Register</a>
                <div class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Stuff in modal</p>
                    </div>
                </div>
            </div>
            
            <div className="user-company-register-container">
                <div className="phrase-landing">Are you a/an</div>
                <Link className="user-register user-company-register" to="/user_register">Employee?</Link>
                <Link className="company-register user-company-register"to="/company_register">Company?</Link>
            </div>
           
        </div>
    )
}




export default LandingPage