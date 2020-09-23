import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import setCurrentUser from './redux/user/user.actions';


class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			//userAuth is null when signed out
			if(userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				
				userRef.onSnapshot(snapShot => {
					// this.setState({
					// 	currentUser: {
					// 		id: snapShot.id,
					// 		...snapShot.data()
					// 	}
					// });
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
  				<Route exact path='/signin' component={SignInAndSignUpPage} />
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

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);