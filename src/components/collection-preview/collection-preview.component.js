import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ( { title, items}) => (
	<div className='collection-preview'>
		<h1>{title}</h1>
		<div className='preview'>
			{
				items.map(item => {
					return (
						<div key={item.id}>
							{item.name}

						</div>
					)
				})
			}
		</div>
	</div>
)

export default CollectionPreview;