import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionOverview from './collection-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';


const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionLoaded(state)
});

// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));
const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;