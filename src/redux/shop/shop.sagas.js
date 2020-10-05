import { takeEvery, call, put } from 'redux-saga/effects'; //listens to every actions of a specific type that is passed to it

import { ShopActionTypes } from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); //call: arg1 is a function, rest the args for that function
		yield put(fetchCollectionsSuccess(collectionsMap)); //put saga's equivalent to dispatch
	}
	catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	} 
	// collectionRef
	// 	.get()
	// 	.then(snapshot => {
	// 		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
	// 		dispatch(fetchCollectionsSuccess(collectionsMap));
	// 	})
	// 	.catch(error => dispatch(fetchCollectionsFailure));
}

export function* fetchCollectionsStart() {
	yield takeEvery(
		ShopActionTypes.FETCH_COLLECTIONS_START, 
		fetchCollectionsAsync
	);
}