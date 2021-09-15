import React from 'react';
import axios from 'axios';

import './contact.styles.css';

class ContactPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
		};
	}

	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	axios({
	// 		method: 'POST',
	// 		url: 'http://localhost:3002/send',
	// 		data: this.state,
	// 	}).then(response => {
	// 		if (response.data.status === 'success') {
	// 			alert('Message Sent.');
	// 			this.resetForm();
	// 		} else if (response.data.status === 'fail') {
	// 			alert('Message failed to send.');
	// 		}
	// 	});
	// }

	// resetForm() {
	// 	this.setState({name: '', email: '', message: ''});
	// }

	render() {
		return (
			<div class='container'>
				<h1 class='title'>Contact Form</h1>
				<div class='wrapper animated bounceInLeft'>
					<div class='contact'>
						<h3 class='contact-us'>Contact Us</h3>
						<div class='alert'>Your message has been sent!</div>
						<form id='contactForm'>
							<p class='name-field'>
								<label>
									Name <span>*</span>
								</label>
								<input type='text' name='name' id='name' required />
							</p>
							<p class='company-field'>
								<label>Company</label>
								<input type='text' name='company' id='company' />
							</p>
							<p class='email-field'>
								<label>
									Email <span>*</span>
								</label>
								<input type='email' name='email' id='email' required />
							</p>
							<p class='phone-field'>
								<label>Phone</label>
								<input type='text' name='phone' id='phone' />
							</p>
							<p class='message-field full'>
								<label>Message</label>
								<textarea name='message' rows='5' id='message'></textarea>
							</p>
							<p class='required-field'>
								Required field <span>*</span>
							</p>
							<p class='submit-button'>
								<button type='submit'>Submit</button>
							</p>
						</form>
					</div>
				</div>
			</div>
		);
	}

	onNameChange(event) {
		this.setState({name: event.target.value});
	}

	onEmailChange(event) {
		this.setState({email: event.target.value});
	}

	onMessageChange(event) {
		this.setState({message: event.target.value});
	}
}

export default ContactPage;
