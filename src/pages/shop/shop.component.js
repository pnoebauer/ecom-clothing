import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

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
			setCollections(collectionsMap);
		})
	}

	render() {
		const { match } = this.props;
		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionOverview} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
			</div>
		);
	};
};

const mapDispatchToProps = dispatch => ({
	setCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);