import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from '../collection/collection.component';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

	componentDidMount() {
		const { retrieveCollections } = this.props;
		retrieveCollections();
	}

	render() {
		const { match, isCollectionLoaded } = this.props;

		return (
			<div className='shop-page'>
				<Route 
					exact 
					path={`${match.path}`} 
					component={CollectionOverviewContainer} 
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
	retrieveCollections: () => dispatch(fetchCollectionsStartAsync())
});

const mapStateToProps = createStructuredSelector({
	isCollectionLoaded: selectIsCollectionLoaded
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);