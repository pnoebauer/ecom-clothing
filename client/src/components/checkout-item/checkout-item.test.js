import React from 'react';
import {shallow} from 'enzyme';
import {CheckoutItem} from './checkout-item.component';
import {RemoveButtonContainer} from './checkout-item.styles';

describe('CheckoutItem component tests', () => {
	let wrapper;
	let mockAddItem;
	let mockClearItem;
	let mockRemoveItem;

	const mockItem = {
		imageUrl: 'www.testImage.com',
		price: 10,
		name: 'hats',
		quantity: 2,
	};

	beforeEach(() => {
		mockClearItem = jest.fn();
		mockAddItem = jest.fn();
		mockClearItem = jest.fn();
		mockRemoveItem = jest.fn();

		const mockProps = {
			cartItem: mockItem,
			clearItem: mockClearItem,
			addItem: mockAddItem,
			removeItem: mockRemoveItem,
		};

		wrapper = shallow(<CheckoutItem {...mockProps} />);
	});

	test('render CheckoutItem component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('display correct info', () => {
		const {quantity} = mockItem;

		const quantityText = wrapper.find('span').text();
		expect(quantityText).toEqual(`${quantity}`);
	});

	test('call mockAddItem when the #addItem button is clicked', () => {
		wrapper.find('#addItem').simulate('click');
		expect(mockAddItem).toHaveBeenCalled();
		expect(mockAddItem).toHaveBeenCalledWith(mockItem);
	});

	test('call mockRemoveItem when the #removeItem button is clicked', () => {
		// const result = wrapper.find(CartDropdownButton);
		// console.log(result.debug());
		wrapper.find('#removeItem').simulate('click');
		expect(mockRemoveItem).toHaveBeenCalled();
		expect(mockRemoveItem).toHaveBeenCalledWith(mockItem);
	});

	test('call mockClearItem when the RemoveButtonContainer is clicked', () => {
		// const result = wrapper.find(CartDropdownButton);
		// console.log(result.debug());
		wrapper.find(RemoveButtonContainer).simulate('click');
		expect(mockClearItem).toHaveBeenCalled();
		expect(mockClearItem).toHaveBeenCalledWith(mockItem);
	});
});
