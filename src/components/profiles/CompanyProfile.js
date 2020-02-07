import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Profile.scss';
import api from '../../utils/api';
function CompanyProfile(props) {
	const initialJob = {
		id: '',
		username: '',
		name: '',
		description: ''
	};

	const [ jobList, setJobList ] = useState(initialJob);

	const handleSubmit = (e) => {
		e.preventDefault();
		api().put(`/users/companies${setJobList}`, jobList).then((res) => {}).catch((err) => {
			console.log(err);
		});
	};

	useEffect(() => {}, []);

	const handleChange = (e) => {
		setJobList({
			[e.target.name]: e.target.value
		});
	};
	const handleDelete = (event, id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			api()
				.delete(`/users/${id}`)
				.then((res) => {
					props.history.push('/login');
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="profile-display">
				<h2>User Profile</h2>
				Username:<input
					type="text"
					name="username"
					placeholder="username"
					value={props.name}
					onClick={handleChange}
				/>
				<br />
				Password:{' '}
				<input type="text" name="password" placeholder="Password" value={props.name} onClick={handleChange} />
				<br />
				Email: <input type="text" name="email" placeholder="Email" value={props.name} onClick={handleChange} />
				<br />
				Skills:{' '}
				<input type="text" name="skills" placeholder="Skills" value={props.name} onClick={handleChange} />
				<br />
				Past Experiences:<input
					type="text"
					name="experiences"
					placeholder="Past Experiences"
					value={props.name}
					onClick={handleChange}
				/>
				<br />
				Occupation:{' '}
				<input
					type="text"
					name="occupation"
					placeholder="Occupation"
					value={props.name}
					onClick={handleChange}
				/>
				<br />
				Interests:{' '}
				<input type="text" name="interests" placeholder="Interests" value={props.name} onClick={handleChange} />
				<br />
				Others:{' '}
				<input type="text" name="others" placeholder="Others" value={props.name} onClick={handleChange} />
				<br />
				<Link to="/">
					<button type="Submit">Back</button>
				</Link>
				<button type="submit">Edit</button>
			</form>
			)}
		</div>
	);
}

export default CompanyProfile;
