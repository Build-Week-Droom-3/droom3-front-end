import api from '../../utils/api';

export const API_POSTS_START = 'API_POSTS_START';
export const API_POSTS_SUCCESS = 'API_POSTS_SUCCESS';
export const API_POSTS_FAILURE = 'API_POSTS_FAILURE';

export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

export const fetchAPI = () => (dispatch) => {
	dispatch({ type: API_START });

	api()
		.get('/user')
		.then((res) => {
			console.log(res);
			dispatch({ type: API_SUCCESS, payload: res.data });
		})
		.catch(() => {
			console.log();
			dispatch({ type: API_FAILURE });
		});
};

export const postAPI = (payload) => (dispatch) => {
	dispatch({ type: API_POSTS_START });

	api()
		.post('/user/:id', payload)
		.then((res) => {
			dispatch({ type: API_POSTS_SUCCESS, payload: res.data });
		})
		.catch(() => {
			dispatch({ type: API_POSTS_FAILURE });
		});
};
