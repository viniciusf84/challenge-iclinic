import styled from 'styled-components';

export const BorderlessButton = styled.button`
	font-size: 1.125rem;
	color: ${(props) => props.theme.text};
	border-radius: 10px;
	border: none;
	height: 47px;
	width: 120px;
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
