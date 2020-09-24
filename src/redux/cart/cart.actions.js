import { UserActionTypes } from './cart.types';

const toggleCartHidden = () => {
	return {
		type: UserActionTypes.TOGGLE_CART_HIDDEN
	};
};

export default toggleCartHidden;