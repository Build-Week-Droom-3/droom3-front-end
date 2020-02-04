import React from 'react';
import { Redirect } from 'react-router-dom';

export default function LogOut(props) {
	localStorage.removeItem('token');
	return (
		<div>
			return <Redirect to="/login" />
		</div>
	);
}
