import { UserActionTypes } from './user.types';

const setCurrentUser = (payload) => {
	return {
		type: UserActionTypes.SET_CURRENT_USER,
		payload
	}
}

export default setCurrentUser;