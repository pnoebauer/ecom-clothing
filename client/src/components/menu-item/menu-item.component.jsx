import React from 'react';

//withRouter avoids props tunneling, router props such as history are only passed to first child;
//to avoid passing from one child to the next to reach its final destination child,
// withRouter (a HOC) is a function that returns a new component with the same characteristics except
// that it also has access to all the router props
import {withRouter} from 'react-router-dom';

import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentTitle,
	ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
	<MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
		<ContentContainer>
			<ContentTitle>{title.toUpperCase()}</ContentTitle>
			<ContentSubtitle>SHOP NOW</ContentSubtitle>
		</ContentContainer>
	</MenuItemContainer>
);

export default withRouter(MenuItem);
