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
			{userdata.map((ele) => (
				<form onSubmit={handleSubmit} className="profile-display">
					<h2>User Profile</h2>
					Username:<div> {ele.name}</div>
					Password: <div>{ele.password}</div>
					Email: <div>{ele.email}</div>
					Skills: <div>{ele.skills}</div>
					Past Experiences: <div onClick={handleChange} />
					Occupation: <div>{ele.occupation}</div>
					Interests: <div>{ele.interests}</div>
					Others: <div>{ele.others}</div>
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
}

const mapDispatchToProps = {
	fetchAPI,
	postAPI
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
