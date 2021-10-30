import directoryReducer, {initialState} from './directory.reducer';

describe('directoryReducer', () => {
	test('return initial state', () => {
		expect(directoryReducer(undefined, {})).toEqual(initialState);
	});
});
