import React from 'react';
import {shallow} from 'enzyme';
import {CollectionOverview} from './collection-overview.component';

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

test('should render CollectionOverview component', () => {
	expect(shallow(<CollectionOverview collections={mockCollections} />)).toMatchSnapshot();
});
