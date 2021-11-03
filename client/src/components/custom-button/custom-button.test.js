import React from 'react';
import {shallow} from 'enzyme';

import CustomButton from './custom-button.component';
import {CustomButtonContainer} from './custom-button.styles';

describe('CustomButton component tests', () => {
	let wrapper;
	let mockClick;

	const mockChildren = 'Sample Input';
	const mockClassName = 'test';

	beforeEach(() => {
		mockClick = jest.fn();

		const mockProps = {
			className: mockClassName,
			onClick: mockClick,
		};

		wrapper = shallow(<CustomButton {...mockProps}>{mockChildren}</CustomButton>);
	});

	test('render CustomButton component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('call mockAddItem when the AddButton is clicked', () => {
		wrapper.find(`.${mockClassName}`).simulate('click');
		expect(mockClick).toHaveBeenCalled();
	});
});
