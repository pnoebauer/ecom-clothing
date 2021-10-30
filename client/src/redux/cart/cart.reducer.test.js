import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

const initialState = {
	hidden: true,
	items: [],
};

describe('cartReducer', () => {
	test('return initial state', () => {
		expect(cartReducer(undefined, {})).toEqual(initialState);
	});

	test('TOGGLE_CART_HIDDEN', () => {
		expect(
			cartReducer(undefined, {type: CartActionTypes.TOGGLE_CART_HIDDEN}).hidden
		).toBe(false);
	});

	test('adding an item should increase quantity by 1', () => {
		const mockItem = {id: 1};

		const mockPrevState = {
			hidden: true,
			items: [
				{id: 1, quantity: 5},
				{id: 2, quantity: 2},
			],
		};

		expect(
			cartReducer(mockPrevState, {type: CartActionTypes.ADD_ITEM, payload: mockItem})
				.items[0].quantity
		).toEqual(6);
	});

	test('removing item should decrease its quantity by 1', () => {
		const mockItem = {id: 1, quantity: 5};

		const mockPrevState = {
			hidden: true,
			items: [
				{id: 1, quantity: 5},
				{id: 2, quantity: 2},
			],
		};

		expect(
			cartReducer(mockPrevState, {
				type: CartActionTypes.REMOVE_ITEM,
				payload: mockItem,
			}).items[0].quantity
		).toEqual(4);
	});

	test('clear item from chart if quantity is one and REMOVE_ITEM is triggered', () => {
		const mockItem = {id: 1, quantity: 1};

		const mockPrevState = {
			hidden: true,
			items: [
				{id: 1, quantity: 1},
				{id: 2, quantity: 2},
			],
		};

		const reducedState = cartReducer(mockPrevState, {
			type: CartActionTypes.REMOVE_ITEM,
			payload: mockItem,
		});

		const numberItemsBefore = mockPrevState.items.length;
		const numberItemsAfter = reducedState.items.length;

		expect(numberItemsBefore - numberItemsAfter).toEqual(1);

		expect(reducedState.items.includes(item => item.id === 1)).toEqual(false);
	});

	test('clear cart on CLEAR_CART', () => {
		const mockPrevState = {
			hidden: true,
			cartItems: [
				{id: 1, quantity: 5},
				{id: 2, quantity: 10},
			],
		};

		expect(
			cartReducer(mockPrevState, {
				type: CartActionTypes.CLEAR_CART,
			}).items.length
		).toEqual(0);
	});
});
