import CartActionTypes from './cart.types';

import {addItemAndSetQuantity, clearItemFromCart, removeItemFromCart} from './cart.utils';

const initialState = {
	hidden: true,
	items: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				items: addItemAndSetQuantity(state.items, action.payload),
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				items: removeItemFromCart(state.items, action.payload),
			};
		case CartActionTypes.CLEAR_ITEM:
			return {
				...state,
				items: clearItemFromCart(state.items, action.payload),
			};
		case CartActionTypes.CLEAR_CART:
			return {
				...state,
				items: [],
			};
		case CartActionTypes.SET_CART_FROM_FIREBASE:
			return {
				...state,
				items: action.payload,
			};
		default:
			return state;
	}
};

export default cartReducer;
