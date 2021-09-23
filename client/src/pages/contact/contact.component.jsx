import React from 'react';

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

	// handleSubmit = (e) => {
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

	handleChange = event => {
		const {id, value} = event.currentTarget;
		this.setState({[id]: value});
	};

	render() {
		const {name, email, message} = this.state;
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
									name='name'
									id='name'
									required
									value={name}
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
								<button type='submit'>Submit</button>
							</p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactPage;

// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyD5bCyvYm5adElW2tllyfYH-CXnyQdUxVY",
//     authDomain: "contactform-2086d.firebaseapp.com",
//     databaseURL: "https://contactform-2086d.firebaseio.com",
//     projectId: "contactform-2086d",
//     storageBucket: "contactform-2086d.appspot.com",
//     messagingSenderId: "35839015044"
//   };
//   firebase.initializeApp(config);

//   // Reference messages collection
//   var messagesRef = firebase.database().ref('messages');

//   // Listen for form submit
//   document.getElementById('contactForm').addEventListener('submit', submitForm);

//   // Submit form
//   function submitForm(e){
//     e.preventDefault();

//     //Get value
//     var name = getInputVal('name');
//     var company = getInputVal('company');
//     var email = getInputVal('email');
//     var phone = getInputVal('phone');
//     var message = getInputVal('message');

//     // Save message
//     saveMessage(name, company, email, phone, message);

//     // Show alert
//     document.querySelector('.alert').style.display = 'block';

//     // Hide alert after 3 seconds
//     setTimeout(function(){
//       document.querySelector('.alert').style.display = 'none';
//     },3000);

//     // Clear form
//     document.getElementById('contactForm').reset();
//   }

//   // Function to get form value
//   function getInputVal(id){
//     return document.getElementById(id).value;
//   }

//   // Save message to firebase
//   function saveMessage(name, company, email, phone, message){
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//       name: name,
//       company: company,
//       email: email,
//       phone: phone,
//       message: message
//     });
//   }
