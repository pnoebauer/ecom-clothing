import React from 'react';
import {shallow} from 'enzyme';
import {CollectionItem} from './collection-item.component';
import {AddButton} from './collection-item.styles';

describe('CollectionItem component tests', () => {
	let wrapper;
	let mockAddItem;

	const mockItem = {
		imageUrl: 'www.testImage.com',
		price: 10,
		name: 'hats',
	};

	beforeEach(() => {
		mockAddItem = jest.fn();

		const mockProps = {
			item: mockItem,
			addItem: mockAddItem,
		};

		wrapper = shallow(<CollectionItem {...mockProps} />);
	});

	test('render CollectionItem component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('call mockAddItem when the AddButton is clicked', () => {
		wrapper.find(AddButton).simulate('click');
		// expect(mockAddItem).toHaveBeenCalled();
		expect(mockAddItem).toHaveBeenCalledWith(mockItem);
	});
});
