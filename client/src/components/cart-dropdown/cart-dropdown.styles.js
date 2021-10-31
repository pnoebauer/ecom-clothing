import styled from 'styled-components/macro';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	border-radius: 6px;
	background-color: white;
	top: 80px;
	right: 40px;
	z-index: 5;
`;

export const CartItemsContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;

export const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartDropdownButton = styled(CustomButton)`
	margin-top: auto;
	font-size: 12px;
`;
