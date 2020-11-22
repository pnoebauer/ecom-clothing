import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	CartIconContainer,
	IconContainer,
	ItemCountContainer
} from './cart-icon.styles';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCart, totalItemQuantity }) => (
	<CartIconContainer onClick={toggleCart}>
		<IconContainer as={Icon} />
		<ItemCountContainer>{totalItemQuantity}</ItemCountContainer>
	</CartIconContainer>
);

const mapDispatchToProps = dispatch => {
	return {
		toggleCart: () => dispatch(toggleCartHidden())
	};
};

const mapStateToProps = createStructuredSelector({
	totalItemQuantity: selectCartItemsCount
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);