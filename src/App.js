import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		// this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		// 	//userAuth is null when signed out
		// 	if(userAuth) {
		// 		const userRef = await createUserProfileDocument(userAuth);	
		// 		userRef.onSnapshot(snapShot => {
		// 			setCurrentUser({
		// 					id: snapShot.id,
		// 					...snapShot.data()
		// 			});
		// 		});
		// 	}
		// 	//userAuth === null (sign out)
		// 	else {
		// 		setCurrentUser(userAuth);
		// 	}
		// });
	};

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	};

  render() {
  	const { currentUser } = this.props;
    return (
      <div>
      	<Header />
  			<Switch>
  				<Route exact path='/' component={HomePage} />
  				<Route path='/shop' component={ShopPage} />
  				<Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)} />
  				<Route exact path='/checkout' component={CheckoutPage} />
  			</Switch>
      </div>
    );
	}
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);