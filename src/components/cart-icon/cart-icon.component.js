import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCart, totalItemQuantity }) => (
	<div className='cart-icon' onClick={toggleCart}>
		<Icon className='icon'/>
		<span className='item-count'>{totalItemQuantity}</span>
	</div>
);

const mapDispatchToProps = dispatch => {
	return {
		toggleCart: () => dispatch(toggleCartHidden())
	};
};

const mapStateToProps = state => {
	return { totalItemQuantity: selectCartItemsCount(state) };
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);