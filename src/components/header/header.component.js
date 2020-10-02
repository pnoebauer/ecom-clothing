import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
	HeaderContainer, 
	LogoContainer, 
	OptionsContainer, 
	OptionContainer
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
			<OptionContainer as={Link} to='/shop'> 
				SHOP
			</OptionContainer>
			<OptionContainer as={Link} to='/shop'> 
				CONTACT
			</OptionContainer>
			{
				currentUser ?
				<OptionContainer onClick={() => auth.signOut()} >SIGN OUT</OptionContainer>
				:
				<OptionContainer as={Link} to='/signin'>SIGN IN</OptionContainer>
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