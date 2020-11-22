import React from 'react';
import { connect } from 'react-redux';

import {
	SignUpContainer,
	TitleContainer
} from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if(password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		const { signUpStart } = this.props;
		
		signUpStart(email,password,displayName);
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ 
			[name]: value
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<SignUpContainer>
				<TitleContainer>I do not have an account</TitleContainer>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						required 
						label='Display Name'
						type='text' 
						name='displayName' 
						value={displayName}
						handleChange={this.handleChange}	
					/>
					<FormInput 
						required 
						label='Email'
						type='email' 
						name='email' 
						value={email}	
						handleChange={this.handleChange}	
					/>
					<FormInput 
						required 
						label='Password'
						type='password' 
						name='password' 
						value={password}
						handleChange={this.handleChange}		
					/>
					<FormInput 
						required 
						label='Confirm Password'
						type='password' 
						name='confirmPassword' 
						value={confirmPassword}	
						handleChange={this.handleChange}	
					/>
					<CustomButton type='submit'>Sign up</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
};

const mapDispatchToProps = dispatch => ({
	signUpStart: (email,password,displayName) => dispatch(signUpStart({ email,password,displayName }))
})

export default connect(null,mapDispatchToProps)(SignUp);