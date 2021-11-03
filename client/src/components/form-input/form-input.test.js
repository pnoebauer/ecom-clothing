import React from 'react';
import {shallow} from 'enzyme';

import FormInput from './form-input.component';
import {FormInputContainer, FormInputLabel} from './form-input.styles';

describe('FormInput component tests', () => {
	let wrapper;
	let mockHandleChange;

	beforeEach(() => {
		mockHandleChange = jest.fn();

		const mockProps = {
			label: 'email',
			value: 'test@gmail.com',
			handleChange: mockHandleChange,
		};

		wrapper = shallow(<FormInput {...mockProps} />);
	});

	test('render FormInput component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('call handleChange method when input changes', () => {
		wrapper.find(FormInputContainer).simulate('change');

		expect(mockHandleChange).toHaveBeenCalled();
	});

	test('render FormInputLabel if there is a label', () => {
		expect(wrapper.exists(FormInputLabel)).toBe(true);
	});

	test('do not render FormInputLabel if there is no label', () => {
		const mockNewProps = {
			label: '',
			value: 'test@gmail.com',
			handleChange: mockHandleChange,
		};

		const newWrapper = shallow(<FormInput {...mockNewProps} />);

		expect(newWrapper.exists(FormInputLabel)).toBe(false);
	});
});
