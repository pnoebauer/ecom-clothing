import directoryReducer, {INITIAL_STATE} from './directory.reducer';

describe('directoryReducer', () => {
	test('return initial state', () => {
		expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
	});
});
