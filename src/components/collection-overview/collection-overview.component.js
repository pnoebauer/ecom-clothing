import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
	<div className='collection-overview'>
		{Object.entries(collections).map(([key, { id, ...otherCollectionProps }]) => (
			<CollectionPreview key={id} {...otherCollectionProps}/>
		))}
	</div>
); 

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);

// {collections.map(({ id, ...otherCollectionProps }) => (
// 			<CollectionPreview key={id} {...otherCollectionProps}/>
// 		))}