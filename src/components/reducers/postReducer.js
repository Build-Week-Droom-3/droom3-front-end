import { FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../actions';

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
