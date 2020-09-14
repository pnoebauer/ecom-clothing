import React from 'react';

//withRouter avoid props tunneling, router props such as history are only passed to first child;
//to avoid passing from one child to the next to reach its final destination child,
// withRouter (a HOC) is a function that returns a new component with the same characteristics except 
// that it also has access to all the router props 
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ( { title, imageUrl, size, history, linkUrl, match } ) => {
	return (
		<div
    	className={`${size} menu-item`}
    	onClick={() => history.push(`${match.url}${linkUrl}`)}
  	>
			<div 
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className = 'content'>
				<h1 className = 'title'>{title.toUpperCase()}</h1>
				<span className = 'subtitle'>SHOP NOW</span>
			</div>
		</div>
	)
};

export default withRouter(MenuItem);