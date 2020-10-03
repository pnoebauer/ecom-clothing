import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';



const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { setCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		//live listener - always runs when first fired or an update occurs
		collectionRef.onSnapshot(async snapshot => {
			// console.log('snapshot', snapshot);
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			// console.log('collectionsMap', collectionsMap);
			setCollections(collectionsMap); //set state to the collectionsMap
		})
	}

	render() {
		const { match, isCollectionLoaded } = this.props;

		return (
			<div className='shop-page'>
				<Route 
					exact 
					path={`${match.path}`} 
					render={props => (
						<CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />
					)} 
				/>
				<Route 
					path={`${match.path}/:collectionId`} 
					render={props => (
						<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
					)} 
				/>
			</div>
		);
	};
};

const mapDispatchToProps = dispatch => ({
	setCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

const mapStateToProps = createStructuredSelector({
	isCollectionLoaded: selectIsCollectionLoaded
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);