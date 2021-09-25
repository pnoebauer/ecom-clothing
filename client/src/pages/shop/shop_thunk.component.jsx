import React from 'react';
import {Route} from 'react-router';
import {connect} from 'react-redux';

import CollectionPageContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
	componentDidMount() {
		const {retrieveCollections} = this.props;
		retrieveCollections();
	}

	render() {
		const {match} = this.props;

		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	retrieveCollections: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
