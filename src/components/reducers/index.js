import { API_START, API_SUCCESS, API_FAILURE, API_POSTS_FAILURE } from '../actions/index';

const initialState = {
	fetch: [],
	title: '',
	isLoading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case API_START:
			return {
				...state,
				isLoading: true
			};
		case API_SUCCESS:
			return {
				...state,
				isLoading: false,
				fetch: action.payload
			};
		case API_POSTS_FAILURE:
			return {
				...state,
				isLoading: false
			};
		default:
			return state;
	}
};
