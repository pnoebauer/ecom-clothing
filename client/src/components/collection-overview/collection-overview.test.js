import React from 'react';
import {shallow} from 'enzyme';
import {CollectionOverview} from './collection-overview.component';
import CollectionPreview from '../collection-preview/collection-preview.component';

const mockCollections = [
	{
		routeName: 'hats',
		id: '5XnhLO3MJTywoST6lftW',
		title: 'Hats',
		items: [
			{
				id: 1,
				imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
				price: 25,
				name: 'Brown Brim',
			},
			{
				imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
				id: 2,
				name: 'Blue Beanie',
				price: 18,
			},
		],
	},
	{
		routeName: 'sneakers',
		id: '6Ezkl920BOYZl5rzZ3ea',
		title: 'Sneakers',
		items: [
			{
				name: 'Adidas NMD',
				price: 220,
				id: 10,
				imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
			},
		],
	},
];

describe('<CollectionOverview /> testing', () => {
	test('render CollectionOverview component', () => {
		expect(
			shallow(<CollectionOverview collections={mockCollections} />)
		).toMatchSnapshot();
	});

	test('renders a CollectionPreview component for each element in the provided collections array ', () => {
		const expectedNumber = mockCollections.length;
		const wrapper = shallow(<CollectionOverview collections={mockCollections} />);
		wrapper.find(CollectionPreview);
		// const result = wrapper.find(CollectionItem);
		// console.log(wrapper.debug());
		// console.log(result.debug());

		expect(wrapper.find(CollectionPreview)).toHaveLength(expectedNumber);
	});
});
