import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.js';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';


const Header = ({ currentUser, hideCartDropdown }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo'/>
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'> 
				SHOP
			</Link>
			<Link className='option' to='/shop'> 
				CONTACT
			</Link>
			{
				currentUser ?
				<div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>
				:
				<Link className='option' to='/signin'>SIGN IN</Link>
			}
			<CartIcon/>
		</div>
		{
			hideCartDropdown ?
			null 
			:
			<CartDropdown />
		}
	</div>
);

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state),
	hideCartDropdown: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);