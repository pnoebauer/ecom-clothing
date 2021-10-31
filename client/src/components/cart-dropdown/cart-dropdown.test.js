import React from 'react';
import {shallow} from 'enzyme';

import {CartDropdown} from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownButton, EmptyMessageContainer} from './cart-dropdown.styles';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

describe('CartDropdown component', () => {
	let wrapper;
	let mockHistory;
	let mockDispatch;
	const mockCartItems = [{id: 1}, {id: 2}, {id: 3}];

	beforeEach(() => {
		mockHistory = {
			push: jest.fn(),
		};

		mockDispatch = jest.fn();

		const mockProps = {
			cartItems: mockCartItems,
			history: mockHistory,
			dispatch: mockDispatch,
		};

		wrapper = shallow(<CartDropdown {...mockProps} />);
	});

	test('render CartDropdown component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('call history.push when the button is clicked', () => {
		// const result = wrapper.find(CartDropdownButton);
		// console.log(result.debug());

		wrapper.find(CartDropdownButton).simulate('click');
		expect(mockHistory.push).toHaveBeenCalled();
		expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
	});

	test('renders a CartItem component for each element in the provided cartItems array ', () => {
		expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
	});

	test('render EmptyMessageContainer if cartItems is empty', () => {
		const mockProps = {
			cartItems: [],
			history: mockHistory,
			dispatch: mockDispatch,
		};

		const newWrapper = shallow(<CartDropdown {...mockProps} />);
		// console.log(newWrapper.debug());
		expect(newWrapper.exists(EmptyMessageContainer)).toBe(true);
	});
});
