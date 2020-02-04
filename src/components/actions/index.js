import axios from 'axios';

export const API_POSTS_START = 'API_POSTS_START';
export const API_POSTS_SUCCESS = 'API_POSTS_SUCCESS';
export const API_POSTS_FAILURE = 'API_POSTS_FAILURE';

export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

export const fetchAPI = () => (dispatch) => {
	dispatch({ type: API_START });

	axios.get().then((res) => {}).catch(() => {});
};
