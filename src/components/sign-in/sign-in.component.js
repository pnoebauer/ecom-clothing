import React from 'react';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({email: '', password: ''});
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<input 
						required 
						type='email' 
						name='email' 
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<label>Email</label>
					<input 
						required	
						type='password' 
						name='password'  
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<label>Password</label>
					<input type='submit' value='Submit'/>
				</form>
			</div>
		)
	}
}

export default SignIn;