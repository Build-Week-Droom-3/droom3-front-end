import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

function CompanyProfile() {
	const [ jobs, setJobs ] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		api()
			.get('/jobs')
			.then((res) => {
				console.log('company', res);
			})
			.catch((err) => {
				console.log(err);
			});
	});
	return <div>This is company profile!</div>;
}

export default CompanyProfile;
