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
import { auth, createUserProfileDocument, addCollectionsAndDocuments } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { selectCollectionsOverview } from './redux/shop/shop.selectors';


class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser, collectionsArray } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			//userAuth is null when signed out
			if(userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
					});
				});
			}
			//userAuth === null (sign out)
			else {
				setCurrentUser(userAuth);
			}

			// addCollectionsAndDocuments('collections', collectionsArray); //adds collection with whole SHOP_DATA array
			//destructure to only return the array's objects with title and items
			addCollectionsAndDocuments('collections', collectionsArray.map(({ title, items }) => {
				return {title, items};
			}));
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

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

const mapDispatchToProps = dispatch => {
	return {
		setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
	};
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionsArray: selectCollectionsOverview
});

export default connect(mapStateToProps, mapDispatchToProps)(App);