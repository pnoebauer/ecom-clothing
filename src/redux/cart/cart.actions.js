import { UserActionTypes } from './cart.types';

export const toggleCartHidden = () => {
	return {
		type: UserActionTypes.TOGGLE_CART_HIDDEN
	};
};

export const addItemToCart = (payload) => {
	return {
		type: UserActionTypes.ADD_ITEM,
		payload
	};
};

export const clearItemFromCart = (payload) => {
	return {
		type: UserActionTypes.CLEAR_ITEM,
		payload
	};
};