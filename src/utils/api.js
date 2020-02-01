import axios from 'axios';

export function getToken() {
	return localStorage.getItem('token');
}
