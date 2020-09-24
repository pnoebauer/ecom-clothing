import React from 'react';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => (
	<div className='cart-icon'>
		<Icon className='icon'/>
		<span className='item-count'>0</span>
	</div>
);

export default CartIcon;