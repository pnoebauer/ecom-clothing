import React from 'react';

import {addMessage} from '../../firebase/firebase.utils';

import './contact.styles.css';

class ContactPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			email: '',
			message: '',
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const {userName, email, message} = this.state;

		try {
			const res = await addMessage({userName, email, message});
			console.log({res});
			alert('Message Sent.');
		} catch (e) {
			console.log({e});
			alert('Message failed to send.');
		}
	};

	resetForm = () => this.setState({name: '', email: '', message: ''});

	handleChange = event => {
		const {id, value} = event.currentTarget;
		this.setState({[id]: value});
	};

	render() {
		const {userName, email, message} = this.state;
		return (
			<div className='container'>
				<h1 className='title'>Contact Form</h1>
				<div className='wrapper animated bounceInLeft'>
					<div className='contact'>
						<h3 className='contact-us'>Contact Us</h3>
						<div className='alert'>Your message has been sent!</div>
						<form id='contactForm'>
							<p className='name-field'>
								<label>
									Name <span>*</span>
								</label>
								<input
									type='text'
									name='userName'
									id='userName'
									required
									value={userName}
									onChange={this.handleChange}
								/>
							</p>

							<p className='email-field'>
								<label>
									Email <span>*</span>
								</label>
								<input
									type='email'
									name='email'
									id='email'
									required
									value={email}
									onChange={this.handleChange}
								/>
							</p>

							<p className='message-field full'>
								<label>Message</label>
								<textarea
									name='message'
									rows='5'
									id='message'
									value={message}
									onChange={this.handleChange}
								/>
							</p>
							<p className='required-field'>
								Required field <span>*</span>
							</p>
							<p className='submit-button'>
								<button type='submit' onSubmit={this.handleSubmit}>
									Submit
								</button>
							</p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactPage;
