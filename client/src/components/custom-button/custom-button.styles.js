import styled, {css} from 'styled-components';

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	border: 1px solid black;
	box-shadow: inset 0 5px 2px -9px rgba(0, 0, 0, 0.4),
		0 3px 6px 0 rgba(255, 255, 255, 0.3);
	color: black;
	text-shadow: 0 2px 5px white;

	&:hover {
		background-color: black;
		color: white;
		border: none;
		box-shadow: inset 0 5px 2px -9px rgba(255, 255, 255, 0.2),
			0 3px 6px 0 rgba(0, 0, 0, 0.1);
		text-shadow: 0 2px 5px black;
	}

	&:active {
		box-shadow: inset 0 2px 2px -9px rgba(255, 255, 255, 0.2),
			0 1px 6px 0 rgba(0, 0, 0, 0.1);
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;
	border: none;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const getButtonStyles = props => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 12px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	outline: none;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	${getButtonStyles};

	&:active {
		transform: scale(0.98);
	}
`;
