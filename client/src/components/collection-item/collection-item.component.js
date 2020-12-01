import React from 'react';

import { connect } from 'react-redux';

import {
	CollectionItemContainer,
	ImageContainer,
	AddButton,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer
} from './collection-item.styles';

import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
	const {name, price, imageUrl} = item;
	return (
		<CollectionItemContainer>
			<ImageContainer 
				className='image'
				style={{
						backgroundImage: `url(${imageUrl})`
					}}
			/>
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton inverted onClick={() => addItem(item)} >Add to Cart</AddButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		addItem: item => dispatch(addItemToCart(item))
	};
};

export default connect(null, mapDispatchToProps)(CollectionItem);