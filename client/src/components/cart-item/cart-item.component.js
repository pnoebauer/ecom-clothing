import React from 'react';

import { 
	CartItemContainer, 
	ImageContainer, 
	ItemDetailsContainer
} from './cart-item.styles';

const CartItem = ({ item }) => {
	const {imageUrl, name, price, quantity} = item;
	return (
		<CartItemContainer>
			<ImageContainer src={imageUrl} alt='item' />
   			<ItemDetailsContainer>
				<span className='name'>{name}</span>
				<span className='price'>{quantity} x ${price}</span>
			</ItemDetailsContainer>
		</CartItemContainer>
	);
}
export default CartItem;