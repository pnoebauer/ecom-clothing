import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_Lf61aU5SbLtUpuxOS3gXVuNP';

	const onToken = token => {
		// console.log(token);
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then(response => {
				console.log('Response', response);
				alert('Payment Successful');
			})
			.catch(error => {
				console.log('Payment error: ', JSON.parse(error));
				alert(
					'There was an issue with your payment. Please make sure you use the provided credit card.'
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='ECOM Clothing'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
