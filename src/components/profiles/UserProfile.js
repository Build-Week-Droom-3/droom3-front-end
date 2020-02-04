import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

function UserProfile() {
	const [ data, setData ] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		api().get();
	});
	return <div>This is user profile!</div>;
}

export default UserProfile;
