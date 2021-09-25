//displays all items of the selected/routed product category

import React from 'react';
import {connect} from 'react-redux';

import {
	CollectionPageContainer,
	TitleContainer,
	ItemsContainer,
} from './collection.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) => {
	const {items, title} = collection;
	return (
		<CollectionPageContainer>
			<TitleContainer>{title}</TitleContainer>
			<ItemsContainer>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</ItemsContainer>
		</CollectionPageContainer>
	);
};

//ownProps -> props of component that is wrapped into connection
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
