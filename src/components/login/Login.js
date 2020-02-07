import React, { useState } from 'react';
import { Form, Field, withFormik, validateYupSchema } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import api from '../../utils/api';
import './Login.scss';

const Login = (props) => {
	const [ data, setData ] = useState({
		username: '',
		password: ''
	});

	return (
		<div className="login-container">
			Log in
			<Form className="form-container">
				<Field className="username username-password" type="text" name="username" placeholder="Username..." />
				<Field className="password username-password" type="text" name="password" placeholder="Password..." />
				<button type="submit">Login</button>
			</Form>
			<Link className="back" to="/">{`${'<<'} Back`}</Link>
		</div>
	);
};

export default withFormik({
	mapPropsToValues(values) {
		return {
			username: values.username || '',
			password: values.password || ''
		};
	},
	validationSchema: yup.object().shape({
		username: yup.string().required(),
		password: yup.string().required()
	}),
	validateOnChange: false,
	validateOnBlur: false,
	handleSubmit: (values, { props, resetForm }) => {
		api()
			.post('/users/login', values)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				resetForm();
				// console.log('sub', res);
				props.history.push('/user_matched');
			})
			.catch((err) => {
				return err.response;
			});
	}
})(Login);
