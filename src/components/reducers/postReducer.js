import { API_POSTS_START, API_POSTS_SUCCESS, API_POSTS_FAILURE } from '../actions';

const initialState = {
	name: '',
	isLoading: false,
	error: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
