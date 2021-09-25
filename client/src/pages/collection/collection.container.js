import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionLoaded(state), //MUST BE isLoading to work as this is the prop that is used in WithSpinner
});

// const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));
const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
