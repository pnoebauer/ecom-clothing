import React from 'react';
import {shallow} from 'enzyme';

import {Directory} from './directory.component';
import MenuItem from '../menu-item/menu-item.component';

// test('render Directory component', () => {
// 	expect(5).toBe(5);
// });

const mockSections = [
	{
		title: 'hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		id: 1,
		linkUrl: 'shop/hats',
	},
	{
		title: 'jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		id: 2,
		linkUrl: 'shop/jackets',
	},
];

describe('<Directory /> testing', () => {
	test('render Directory component', () => {
		expect(shallow(<Directory sections={mockSections} />)).toMatchSnapshot();
	});

	test('renders a MenuItem component for each element in the provided sections array ', () => {
		const expectedNumber = mockSections.length;
		const wrapper = shallow(<Directory sections={mockSections} />);
		// const result = wrapper.find(MenuItem);
		// console.log(wrapper.debug());
		// console.log(result.debug());

		expect(wrapper.find(MenuItem)).toHaveLength(expectedNumber);
	});
});
