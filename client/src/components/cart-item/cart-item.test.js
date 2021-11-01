import React from 'react';
import {shallow} from 'enzyme';
import CartItem from './cart-item.component';
import {ItemDetailsContainer} from './cart-item.styles';

describe('CartItem component tests', () => {
	const mockItem = {
		imageUrl: 'www.testImage.com',
		price: 10,
		name: 'hats',
		quantity: 2,
	};
	const wrapper = shallow(<CartItem item={mockItem} />);

	test('render CartItem component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('display correct info', () => {
		const {price, quantity, name} = mockItem;

		const priceText = wrapper.find('.price').text();
		expect(priceText).toEqual(`${quantity} x $${price}`);

		const nameText = wrapper.find('.name').text();
		expect(nameText).toEqual(`${name}`);
	});
});
