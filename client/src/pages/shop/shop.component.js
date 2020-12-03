import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './shop.styles';

const CollectionPageContainer = lazy(() => import('../collection/collection.container'));
const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'));

class ShopPage extends React.Component {

	componentDidMount() {
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
	}

	render() {
		const { match } = this.props;

		return (
			<ShopPageContainer>
				<Suspense fallback={<Spinner />} >
					<Route 
						exact 
						path={`${match.path}`} 
						component={CollectionOverviewContainer}
					/>
					<Route 
						path={`${match.path}/:collectionId`} 
						component={CollectionPageContainer} 
					/>
				</Suspense>
			</ShopPageContainer>
		);
	};
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);