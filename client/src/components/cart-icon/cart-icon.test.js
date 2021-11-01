import React from 'react';
import {shallow} from 'enzyme';
import {CartIcon} from './cart-icon.component';
import {CartIconContainer, ItemCountContainer} from './cart-icon.styles';

describe('CartIcon component', () => {
	let wrapper;
	let mockToggleCart;
	beforeEach(() => {
		mockToggleCart = jest.fn();

		const mockProps = {
			totalItemQuantity: 0,
			toggleCart: mockToggleCart,
		};

		wrapper = shallow(<CartIcon {...mockProps} />);
	});

	test('render CartIcon component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('call toggleCart when icon is clicked', () => {
		wrapper.find(CartIconContainer).simulate('click');
		expect(mockToggleCart).toHaveBeenCalled();
	});

	test('render the totalItemQuantity as the text', () => {
		const itemCount = parseInt(wrapper.find(ItemCountContainer).text());
		expect(itemCount).toBe(0);
	});
});
