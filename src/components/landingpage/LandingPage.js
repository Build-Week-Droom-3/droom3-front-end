import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.scss"

function LandingPage() {
	return (
		<div className="landing-page-container">
			<div className="login-register-container">
				<div className="login-register">
					<Link to="/login">Login</Link>
					<div>Register</div>
					<div><Link to="/user_profile">User Profile</Link></div>
					<div><Link to="/company_profile">Company Profile</Link></div>
				</div>
			</div>
			<div className="user-company-register-container">
				<div className=".phrase-landing">Are you a/an</div>
					<Link className="user-company-register" to="/user_register">Employee</Link>
					<Link className="user-company-register" to="/company_register">Company</Link>
			</div>
		</div>
	);
}

export default LandingPage;
