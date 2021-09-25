import CartActionTypes from './cart.types';

export const toggleCartHidden = () => {
	return {
		type: CartActionTypes.TOGGLE_CART_HIDDEN,
	};
};

export const addItemToCart = payload => {
	return {
		type: CartActionTypes.ADD_ITEM,
		payload,
	};
};

export const removeItemFromCart = payload => {
	return {
		type: CartActionTypes.REMOVE_ITEM,
		payload,
	};
};

export const clearItemFromCart = payload => {
	return {
		type: CartActionTypes.CLEAR_ITEM,
		payload,
	};
};

export const clearCart = () => {
	return {
		type: CartActionTypes.CLEAR_CART,
	};
};

export const updateCartInFirebase = () => ({
	type: CartActionTypes.UPDATE_CART_IN_FIREBASE,
});

export const setCartFromFirebase = cartItems => ({
	type: CartActionTypes.SET_CART_FROM_FIREBASE,
	payload: cartItems,
});
