import styled from 'styled-components';

export const BorderlessButton = styled.button`
	color: ${(props) => props.theme.text};
	border-radius: 10px;
	height: 47px;
	width: 120px;
	border: none;
	font-size: 1.125rem;
	display: flex;
	align-items: center;
	padding: 0 10px;
	align-self: flex-start;
	background: none;
	margin-bottom: 90px;
	cursor: pointer;

	svg {
		font-size: 2rem;
		margin-right: 16px;
	}
`;
