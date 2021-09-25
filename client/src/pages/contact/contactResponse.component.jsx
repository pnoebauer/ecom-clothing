import React from 'react';

import {Link} from 'react-router-dom';

import {AlertContainer, LinkButton, LinkButtonContainer} from './contact.styles';

const ResponseMessage = ({sentMessage}) => (
	<AlertContainer>
		{sentMessage === 'success' ? (
			<>
				<h2>Thank you for your request!</h2>
				<p>Your message has been successfully sent. We will contact you very soon!</p>
			</>
		) : sentMessage === 'fail' ? (
			<>
				<h2>Unable to send message</h2>
				<p>Please try again later ...</p>
			</>
		) : (
			<span>Sending ...</span>
		)}

		{sentMessage !== 'pending' ? (
			<LinkButtonContainer>
				<LinkButton as={Link} to='/shop'>
					Return to Shop
				</LinkButton>
			</LinkButtonContainer>
		) : null}
	</AlertContainer>
);

export default ResponseMessage;
