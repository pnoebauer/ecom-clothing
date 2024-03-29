import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.items);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems =>
	cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
);

export const selectCartItemsCost = createSelector([selectCartItems], cartItems =>
	cartItems.reduce(
		(totalCost, cartItem) => totalCost + cartItem.price * cartItem.quantity,
		0
	)
);

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);
