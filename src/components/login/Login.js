import React, { useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../../utils/api';
import "./Login.scss"
const Login = (props) => {
	const [ data, setData ] = useState({
		username: '',
		password: ''
	});
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		api().post('/users/login', data).then((res) => {
			localStorage.setItem('token', res.data.token);
			console.log('sub', res);
			props.history.push('/user_profile');
		});
	};

	return (
		<div className="login-container">
			Log in
			<Form className="form-container" onSubmit={handleSubmit}>
				<Field
					className="username username-password"
					type="text"
					name="username"
					placeholder="Username..."
					value={data.username}
					onChange={handleChange}
				/>
				<Field
					className="password username-password"
					type="text"
					name="password"
					placeholder="Password..."
					value={data.password}
					onChange={handleChange}
				/>
				<button type="submit">Login</button>
			</Form>
			<Link className="back" to="/">{`${"<<"} Back`}</Link>
		</div>
	);
};

const FormikLogin = withFormik({
	mapPropsToValues() {
		return {
			username: '',
			password: ''
		};
	}
})(Login);

export default connect()(FormikLogin);
