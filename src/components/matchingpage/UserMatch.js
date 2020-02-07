import React, { useState } from 'react';
import api from '../../utils/api';

function UserMatch() {
	const initialJob = {
		name: '',
		company: '',
		type: '',
		description: ''
	};

	const [ jobs, setJobs ] = useState(initialJob);

	const handleChange = (event) => {
		setJobs({ ...jobs, [event.target.name]: event.target.value });
	};
	const handleSubmit = (e, values, { setStatus }) => {
		e.preventDefault();
		api()
			.post('/jobs', values)
			.then((res) => {
				setStatus(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		resetForm(e);
	};

	const resetForm = () => {
		setJobs(initialJob);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input onChange={handleChange} type="text" name="name" placeholder="Name" value={jobs.name} />
			<input onChange={handleChange} type="text" name="company" placeholder="Company" value={jobs.company} />
			<input
				onChange={handleChange}
				type="text"
				name="description"
				placeholder="description"
				value={jobs.description}
			/>

			<button type="submit">Submit</button>
		</form>
	);
}

export default UserMatch;
