import React from 'react';

import {Link} from 'react-router-dom';

import {AlertContainer, LinkButton, LinkButtonContainer} from './contact.styles';

const ResponseMessage = ({handleLinkClick}) => (
	<AlertContainer>
		<h2>Thank you for your request!</h2>
		<p>Your message has been successfully sent. We will contact you very soon!</p>

		<LinkButtonContainer>
			<LinkButton as={Link} to='/shop'>
				Return to Shop
			</LinkButton>
		</LinkButtonContainer>
	</AlertContainer>
);

export default ResponseMessage;
