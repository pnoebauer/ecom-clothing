import { UserActionTypes } from './cart.types';

import { addItemAndSetQuantity, clearItemFromCart } from './cart.utils';

const initialState = {
	hidden: true,
	items: []
};

const cartReducer = (state=initialState, action) => {
	switch (action.type) {
		case UserActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case UserActionTypes.ADD_ITEM:
			return {
				...state,
				items: addItemAndSetQuantity(state.items, action.payload)
			};
		case UserActionTypes.CLEAR_ITEM:
			return {
				...state,
				items: clearItemFromCart(state.items, action.payload)
			};
		default:
			return state;
	}
}

export default cartReducer;


