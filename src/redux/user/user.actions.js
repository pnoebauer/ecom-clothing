import { UserActionTypes } from './user.types';

export const setCurrentUser = (payload) => {
	return {
		type: UserActionTypes.SET_CURRENT_USER,
		payload
	}
}