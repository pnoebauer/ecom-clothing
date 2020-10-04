import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
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
	retrieveCollections: () => dispatch(fetchCollectionsStartAsync())
});

const mapStateToProps = createStructuredSelector({
	isCollectionLoaded: selectIsCollectionLoaded
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);