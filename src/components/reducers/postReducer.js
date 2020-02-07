import { API_POSTS_START, API_POSTS_SUCCESS, API_POSTS_FAILURE } from '../actions';

const initialState = {
	name: '',
	isLoading: false,
	error: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case API_POSTS_START:
			return {
				...state,
				isLoading: true
			};
		case API_POSTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				name: action.payload
			};
		case API_POSTS_FAILURE:
			return {
				...state,
				isLoading: false
			};
		default:
			return state;
	}
}
