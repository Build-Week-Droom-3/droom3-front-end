import React, { useState, useEffect } from 'react';
import { userdata } from '../fakedata/data';
import { Link } from 'react-router-dom';
import './Profile.scss';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import { postAPI } from '../actions';

function UserProfile(props) {
	const [ profile, setProfile ] = useState({
		id: '',
		username: '',
		name: '',
		occupation: '',
		interest: '',
		experience: '',
		description: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postAPI();
	};

	const { fetchAPI } = props;

	useEffect(
		() => {
			fetchAPI();
		},
		[ fetchAPI ]
	);

	const handleChange = (e) => {
		setProfile({
			[e.target.name]: e.target.value
		});
	};

	return (
		<div>
			{userdata.map(() => (
				<form onSubmit={handleSubmit} className="profile-display">
					<h2>User Profile</h2>
					Username:<input type="text" name="username" placeholder="username" onClick={handleChange} />
					<br />
					Password: <input type="text" name="password" placeholder="Password" onClick={handleChange} />
					<br />
					Email: <input type="text" name="email" placeholder="Email" onClick={handleChange} />
					<br />
					Skills: <input type="text" name="skills" placeholder="Skills" onClick={handleChange} />
					<br />
					Past Experiences:<input
						type="text"
						name="experiences"
						placeholder="Past Experiences"
						onClick={handleChange}
					/>
					<br />
					Occupation: <input type="text" name="occupation" placeholder="Occupation" onClick={handleChange} />
					<br />
					Interests: <input type="text" name="interests" placeholder="Interests" onClick={handleChange} />
					<br />
					Others: <input type="text" name="others" placeholder="Others" onClick={handleChange} />
					<br />
					<Link to="/">
						<button type="Submit">Back</button>
					</Link>
					<button type="submit">Edit</button>
				</form>
			))}
		</div>
	);
}

function mapStateToProps(state) {
	console.log('state', state);
	return {
		fetch: state.fetchAPI
	};
}

const mapDispatchToProps = {
	fetchAPI,
	postAPI
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
