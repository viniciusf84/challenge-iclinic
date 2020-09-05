import styled from 'styled-components';

export const ButtonStyled = styled.button`
	color: ${(props) => props.theme.buttonText};
	background-color: ${(props) => props.theme.buttonBackground};
	border-radius: 10px;
	min-height: 56px;
	min-width: 189px;
	border: none;
	font-weight: bold;
	font-size: 1rem;
	cursor: pointer;
	transition: background-color 0.3s ease-out;

	&:hover {
		background-color: ${(props) => props.theme.hoverButtonBackground};
	}

	&:disabled {
		cursor: not-allowed;
	}

	&.uppercase {
		text-transform: uppercase;
		font-size: 1.125rem;
		letter-spacing: 5px;
	}

	&.primary {
		padding: 0;
	}
`;
