import React from 'react';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
	HeaderContainer, 
	LogoContainer, 
	OptionsContainer, 
	OptionLink, 
	OptionDiv 
} from './header.styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.js';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';


const Header = ({ currentUser, hideCartDropdown }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo className='logo'/>
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'> 
				SHOP
			</OptionLink>
			<OptionLink to='/shop'> 
				CONTACT
			</OptionLink>
			{
				currentUser ?
				<OptionDiv onClick={() => auth.signOut()} >SIGN OUT</OptionDiv>
				:
				<OptionLink to='/signin'>SIGN IN</OptionLink>
			}
			<CartIcon/>
		</OptionsContainer>
		{
			hideCartDropdown ?
			null 
			:
			<CartDropdown />
		}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hideCartDropdown: selectCartHidden
});

export default connect(mapStateToProps)(Header);