import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

// const CollectionPage = ({ collection, match }) => {
// 	console.log(collection, match.params.collectionId);
const CollectionPage = ({ collection }) => {
	console.log(collection);
	return (
		<div className='collection'>
			<h2>CATEGORY PAGE</h2>
		</div>
	);
}

//ownProps -> props of component that is wrapped into connection
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);