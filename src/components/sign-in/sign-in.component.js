import React from 'react';
import { connect } from 'react-redux';

import {
	SignInContainer,
	TitleContainer,
	ButtonsContainer
} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	};

	handleSubmit = async event => {
		event.preventDefault();
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;

		emailSignInStart(email, password);
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		const { googleSignInStart } = this.props;
		return (
			<SignInContainer>
				<TitleContainer>I already have an account</TitleContainer>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						required 
						label='Email'
						type='email' 
						name='email' 
						value={this.state.email}
						handleChange={this.handleChange}
					/>
					<FormInput 
						required	
						label='Password'
						type='password' 
						name='password'  
						value={this.state.password}
						handleChange={this.handleChange}
					/>
					<ButtonsContainer>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		)
	}
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})) //dispatch the email/password object
});

export default connect(null, mapDispatchToProps)(SignIn);