import React from 'react';
import {mount} from 'enzyme';

import ErrorBoundary from './error-boundary.component';

describe('ErrorBoundary component tests', () => {
	const wrapper = mount(
		<ErrorBoundary>
			<div>Output if there are no errors</div>
		</ErrorBoundary>
	);

	wrapper.setState({hasErrored: true});

	test('render ErrorBoundary component', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
