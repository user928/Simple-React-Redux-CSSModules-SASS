import actionTypes from '../constants/actionTypes';

export default function reducer(state = 0, action) {
	switch (action.type) {
		case actionTypes.INCREMENT_NUM:
			return state + 1;
		case actionTypes.DECREMENT_NUM:
			return state - 1;
		case actionTypes.RESET_NUM:
			return (state = 0);
		default:
			return state;
	}
}
