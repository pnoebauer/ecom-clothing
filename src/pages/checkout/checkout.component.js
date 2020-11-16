import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	CartTotalContainer,
	TestWarningContainer
} from './checkout.styles';

import { selectCartItems, selectCartItemsCost } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, cartCost }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<HeaderBlockContainer>
				<span>Product</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Description</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Quantity</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Price</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Remove</span>
			</HeaderBlockContainer>
		</CheckoutHeaderContainer>
		{
			cartItems.map(cartItem => 
				<CheckoutItem 
					key={cartItem.id}
					cartItem={cartItem}
				/>
			)
		}
		<CartTotalContainer>
			TOTAL: ${cartCost}
		</CartTotalContainer>
		<TestWarningContainer>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
		</TestWarningContainer>
		<StripeCheckoutButton price={cartCost}/>
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartCost: selectCartItemsCost
})

export default connect(mapStateToProps)(CheckoutPage);