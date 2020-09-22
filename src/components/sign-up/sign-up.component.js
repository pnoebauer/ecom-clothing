import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

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
		// console.log(displayName, email, password, confirmPassword, { displayName })

		if(password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
	        	email,
	        	password
	      	);
	      	// console.log(user, { displayName });
	      	await createUserProfileDocument(user, { displayName });

	      	this.setState({
	        	displayName: '',
	        	email: '',
	        	password: '',
	        	confirmPassword: ''
	      	});
		}
		catch (error) {
			console.log(error);
		}
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
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
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
			</div>
		);
	}
};

export default SignUp;