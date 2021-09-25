import {takeLatest, call, put, all} from 'redux-saga/effects'; //listens to every actions of a specific type that is passed to it

import {ShopActionTypes} from './shop.types';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); //call: arg1 is a function, rest the args for that function
		yield put(fetchCollectionsSuccess(collectionsMap)); //put saga's equivalent to dispatch
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)]);
}
