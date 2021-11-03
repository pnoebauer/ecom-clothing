import React from 'react';
import {shallow} from 'enzyme';

import {Header} from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionContainer,
} from './header.styles';

describe('Header component', () => {
	let wrapper;
	let mockSignOutStart;

	beforeEach(() => {
		mockSignOutStart = jest.fn();

		const mockProps = {
			hideCartDropdown: true,
			currentUser: {
				uid: '123',
			},
			signOutStart: mockSignOutStart,
		};

		wrapper = shallow(<Header {...mockProps} />);
	});

	test('render Header component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('if currentUser is present', () => {
		test('render sign out link', () => {
			expect(wrapper.find(OptionContainer).at(2).text()).toEqual('SIGN OUT');
		});

		test('call signOutStart method when link is clicked', () => {
			wrapper.find(OptionContainer).at(2).simulate('click');

			expect(mockSignOutStart).toHaveBeenCalled();
		});
	});

	describe('if currentUser is null', () => {
		test('render sign in link', () => {
			const mockProps = {
				hideCartDropdown: true,
				currentUser: null,
				signOutStart: mockSignOutStart,
			};

			const newWrapper = shallow(<Header {...mockProps} />);

			expect(newWrapper.find(OptionContainer).at(2).text()).toEqual('SIGN IN');
		});
	});

	describe('if hideCartDropdown is true', () => {
		test('do not render CartDropdown', () => {
			expect(wrapper.exists(CartDropdown)).toEqual(false);
		});
	});

	describe('if currentUser is null', () => {
		test('render CartDropdown', () => {
			const mockProps = {
				hideCartDropdown: false,
				currentUser: null,
				signOutStart: mockSignOutStart,
			};

			const newWrapper = shallow(<Header {...mockProps} />);

			expect(newWrapper.exists(CartDropdown)).toEqual(true);
		});
	});
});
