import React from 'react';

import {addMessage} from '../../firebase/firebase.utils';

import {
	ContactPageContainer,
	MainFormContainer,
	TitleHeader,
	Wrapper,
	ContactUsHeader,
	ContactFormContainer,
	RequiredFieldContainer,
	ButtonContainer,
	SubmitButton,
	SpanAsteriks,
	AlertContainer,
	NameFieldContainer,
	EmailFieldContainer,
	MessageFieldContainer,
	InputField,
	LabelContainer,
} from './contact.styles';

import ResponseMessage from './contactResponse.component';

class ContactPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			email: '',
			message: '',
			sentMessage: null,
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const {userName, email, message} = this.state;
		// console.log({userName, email, message}, 'sending');
		try {
			const res = await addMessage({userName, email, message});
			// console.log({res});
			alert('Message Sent.');

			this.setState({sentMessage: true});
		} catch (e) {
			// console.log({e});
			// alert('Message failed to send.');

			this.setState({sentMessage: false});
		}
	};

	resetForm = () => this.setState({name: '', email: '', message: '', sentMessage: false});

	handleChange = event => {
		const {name, value} = event.currentTarget;
		this.setState({[name]: value});
	};

	handleLinkClick = () => {
		this.resetForm();
	};

	componentWillUnmount() {
		this.resetForm();
	}

	render() {
		const {userName, email, message, sentMessage} = this.state;
		return (
			<>
				{sentMessage === true ? (
					<ResponseMessage handleLinkClick={this.handleLinkClick} />
				) : (
					<ContactPageContainer>
						<MainFormContainer>
							<TitleHeader>Contact Form</TitleHeader>
							<Wrapper>
								<ContactUsHeader>Contact Us</ContactUsHeader>
								<ContactFormContainer>
									<NameFieldContainer>
										<LabelContainer>
											Name <SpanAsteriks>*</SpanAsteriks>
										</LabelContainer>
										<InputField
											type='text'
											name='userName'
											id='userName'
											required
											value={userName}
											onChange={this.handleChange}
										/>
									</NameFieldContainer>

									<EmailFieldContainer>
										<LabelContainer>
											Email <SpanAsteriks>*</SpanAsteriks>
										</LabelContainer>
										<InputField
											type='email'
											name='email'
											id='email'
											required
											value={email}
											onChange={this.handleChange}
										/>
									</EmailFieldContainer>

									<MessageFieldContainer>
										<LabelContainer>Message</LabelContainer>
										<InputField
											as='textarea'
											name='message'
											rows='5'
											id='message'
											value={message}
											onChange={this.handleChange}
										/>
									</MessageFieldContainer>
									<RequiredFieldContainer>
										Required field <SpanAsteriks>*</SpanAsteriks>
									</RequiredFieldContainer>
									<ButtonContainer>
										<SubmitButton type='submit' onClick={this.handleSubmit}>
											Submit
										</SubmitButton>
									</ButtonContainer>
								</ContactFormContainer>
							</Wrapper>
						</MainFormContainer>
					</ContactPageContainer>
				)}
			</>
		);
	}
}

export default ContactPage;
