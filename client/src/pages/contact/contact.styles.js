import styled, {css} from 'styled-components/macro';

const formParagraphStyles = css`
	margin: 0;
	font-family: 'Mukta Mahee', sans-serif;
	font-weight: 200;
	font-size: 12px;
	color: rgba(74, 86, 96, 1);
`;

export const ContactPageContainer = styled.div`
	/* position: relative;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw; */
	width: 60%;
	margin: auto;
	background: #52c1f7;
	box-sizing: border-box;
	border-radius: 4px;
	box-shadow: 0 0 10px 0 rgba(82, 193, 247, 0.6);
`;

export const MainFormContainer = styled.div`
	max-width: 700px;
	margin-left: auto;
	margin-right: auto;
	padding: 1em;
	box-sizing: border-box;
`;

export const TitleHeader = styled.h1`
	margin: 8px;
	margin-top: 1px;
	font-family: 'Mukta Mahee', sans-serif;
	font-weight: 400;
	font-size: 16px;
	color: #fff;
	text-align: center;
`;

export const Wrapper = styled.div`
	background: #fff;
	border-radius: 5px;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
	padding: 27.5px;
	box-sizing: border-box;
`;

export const ContactFormContainer = styled.form`
	display: grid;
	grid-gap: 20px;
	grid-template-areas:
		'name'
		'email'
		'message';

	@media (min-width: 500px) {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			'name name'
			'email email'
			'message message';
	}
`;

export const ContactUsHeader = styled.h3`
	margin: 0 0 30px;
	font-family: 'Mukta Mahee', sans-serif;
	font-weight: 400;
	font-size: 14px;
	color: #5dc3f2;
`;

export const RequiredFieldContainer = styled.p`
	${formParagraphStyles}
	grid-column: 1 / 2;

	color: rgba(74, 86, 96, 0.75);
	align-self: center;
	justify-self: start;
`;

export const ButtonContainer = styled.p`
	${formParagraphStyles}
	grid-column: 2 / 3;

	align-self: center;
	justify-self: end;
`;

export const SubmitButton = styled.button`
	font-family: 'Mukta Mahee', sans-serif;
	font-weight: 400;
	font-size: 12px;
	color: #fff;
	background: #5dc3f2;
	width: 90px;
	height: 30px;
	border: 0;
	border-radius: 15px;

	&:hover,
	&:focus {
		background: #49b0e7;
		color: #fff;
		outline: 0;
		transition: background-color 0.3s ease-out;
		cursor: pointer;
	}
`;

export const AlertContainer = styled.div`
	padding: 15px;

	width: 60%;
	margin: auto;
	margin-top: 10%;
	font-family: 'Mukta Mahee', sans-serif;
	font-size: 18px;
	background: #52c1f7;
	box-sizing: border-box;
	border-radius: 4px;
	box-shadow: 0 0 10px 0 rgba(82, 193, 247, 0.6);
	text-align: center;
	color: #fff;
`;

export const LinkButtonContainer = styled.div`
	/* max-width: 700px; */
	margin-left: auto;
	margin-right: auto;
	padding: 1em;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-end;
`;

export const LinkButton = styled.button`
	font-family: 'Mukta Mahee', sans-serif;
	font-weight: 400;
	font-size: 16px;
	color: #5dc3f2;
	background: #fff;
	/* width: 390px; */
	/* float: right; */
	padding: 5px;
	height: 40px;
	border: 0;
	border-radius: 2px;

	&:hover,
	&:focus {
		background: #52c1f7;
		color: #fff;
		outline: 0;
		transition: background-color 0.3s ease-out;
		cursor: pointer;
	}
`;

export const SpanAsteriks = styled.span`
	color: #5dc3f2;
`;

export const NameFieldContainer = styled.div`
	${formParagraphStyles}
	grid-area: name;
	grid-column: 1 / 3;
`;

export const EmailFieldContainer = styled.div`
	${formParagraphStyles}
	grid-area: email;
	grid-column: 1 / 3;
`;

export const MessageFieldContainer = styled.div`
	${formParagraphStyles}
	grid-area: message;
	grid-column: 1 / 3;
`;

export const InputField = styled.input`
	font-family: 'Mukta Mahee', sans-serif;
	font-weight: 200;
	font-size: 14px;
	width: 100%;
	padding: 0.4em 0.8em;
	background: rgba(249, 250, 250, 0.5);
	border: 1px solid rgba(74, 86, 96, 0.1);
	border-radius: 2.5px;
	outline-color: #5dc3f2;
	box-sizing: border-box;
`;

export const LabelContainer = styled.label`
	display: block;
`;
