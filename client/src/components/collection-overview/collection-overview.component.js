//loops over all product categories and maps CollectionPreview of each category
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionOverviewContainer } from './collection-overview.styles';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsOverview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => (
	<CollectionOverviewContainer>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps}/>
		))}
	</CollectionOverviewContainer>
); 

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsOverview
});

export default connect(mapStateToProps)(CollectionOverview)