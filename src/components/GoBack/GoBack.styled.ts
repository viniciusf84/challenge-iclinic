import styled from 'styled-components';

export const BorderlessButton = styled.button`
	color: ${(props) => props.theme.text};
	border-radius: 10px;
	border: none;
	height: 47px;
	width: 120px;
	font-size: 1.125rem;
	padding: 0 10px;
	align-self: flex-start;
	background: none;
	cursor: pointer;
	position: absolute;
	top: 35px;

	svg {
		font-size: 2rem;
		margin-right: 16px;
	}
`;
