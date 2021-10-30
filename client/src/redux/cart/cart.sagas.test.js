import {takeLatest, put} from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import {clearCart} from './cart.actions';
import {clearCartOnSignOut, onSignOutSuccess, onUserSignIn} from './cart.sagas';

describe('on signout success saga', () => {
	test('trigger on SIGN_OUT_SUCCESS', async () => {
		const generator = onSignOutSuccess();
		expect(generator.next().value).toEqual(
			takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
		);
	});
});

describe('clear cart on signout saga', () => {
	test('fire the clearCart action', () => {
		const generator = clearCartOnSignOut();
		expect(generator.next().value).toEqual(put(clearCart()));
	});
});
