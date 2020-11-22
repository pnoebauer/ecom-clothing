import { ShopActionTypes } from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

//for thunk: instead of the action returning an object, a function is returned that has the dispatch in it (similar to mapDispatchToProps)
// thunk will invoke the function and fire those dispatch calls

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = error => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: error
})

//below function will be passed into the components
export const fetchCollectionsStartAsync = () => {
	return dispatch => {
			const collectionRef = firestore.collection('collections');
			////immediately after the asynch function starts dispatch fetchCollectionsStart so that the reducer is updated to FETCH_COLLECTIONS_START
			dispatch(fetchCollectionsStart()); 
			
			collectionRef.get().then(snapshot => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
			}).catch(error => dispatch(fetchCollectionsFailure));
	}
}