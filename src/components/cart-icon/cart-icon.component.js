import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCart }) => (
	<div className='cart-icon' onClick={toggleCart}>
		<Icon className='icon'/>
		<span className='item-count'>0</span>
	</div>
);

const mapDispatchToProps = dispatch => {
	return {
		toggleCart: () => dispatch(toggleCartHidden())
	};
};

export default connect(null,mapDispatchToProps)(CartIcon);