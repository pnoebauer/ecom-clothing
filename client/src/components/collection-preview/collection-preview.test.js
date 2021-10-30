import React from 'react';
import {shallow} from 'enzyme';
import CollectionPreview from './collection-preview.component';

const mockProps = {
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
		{
			price: 30,
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			name: 'sneakers',
		},
		{
			price: 10,
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			id: 4,
			name: 'womens',
		},
		{
			price: 5,
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			id: 5,
			name: 'mens',
		},
	],
};

test('should render CollectionPreview component', () => {
	expect(shallow(<CollectionPreview {...mockProps} key={1} />)).toMatchSnapshot();
});
