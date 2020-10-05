import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { googleSignInSuccess, googleSignInFailure } from './user.actions';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider); //same as in .utils
		const userRef = yield call(createUserProfileDocument, user); //equ. to (App.js): const userRef = await createUserProfileDocument(userAuth);
		const userSnapshot = yield userRef.get();
		yield put(googleSignInSuccess({ 
			id: userSnapshot.id,
			...userSnapshot.data()
		}));
		//equ. to (App.js):
		// 			setCurrentUser({
		// 					id: snapShot.id,
		// 					...snapShot.data()
		// 			});
		// 		});
	}
	catch(error) {
		yield put(googleSignInFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
	yield all([call(onGoogleSignInStart)]);
}