import {
	FETCHING_CART,
	ADD_TO_CART_SUCCESS,
	CLEAR_ERROR_MESSAGE,
	FETCHING_CART_SUCCESS,
	FETCHING_CART_FAILURE,
	PAY_TOTAL_FAILURE,
	PAID_TOTAL_SUCCESSFULLY
} from '../actions/types';

const initialState = {
	cart: [],
	error: '',
	isFetching: false,
	message: ''
};
export default function cart(state = initialState, action) {
	const { type } = action;
	switch (type) {
		case FETCHING_CART:
			return {
				...state,
				isFetching: true
			};

		case ADD_TO_CART_SUCCESS:
			return { cart: action.cart }
			;
		case CLEAR_ERROR_MESSAGE:
			return {
				...state,
				message: '',
				error: ''
			};

		case FETCHING_CART_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};

		case FETCHING_CART_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: '',
				cart: action.cart
			};

		case PAY_TOTAL_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};

		case PAID_TOTAL_SUCCESSFULLY:
			return {
				...state,
				isFetching: false,
				error: ''
			};

		default:
			return state;
	}
}
