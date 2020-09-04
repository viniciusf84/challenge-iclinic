import styled from 'styled-components';
import { rgba } from 'polished';
import { colors } from '../../styles/variables';

export const ButtonStyled = styled.button`
	color: ${(props) => props.theme.buttonText};
	background-color: ${(props) => props.theme.buttonBackground};
	border-radius: 10px;
	min-height: 56px;
	min-width: 189px;
	border: none;
	font-weight: bold;
	font-size: 1rem;
	padding: 0 42px;
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

	&.clear {
		background-color: ${colors.clear};
		color: ${colors.dark};

		&:hover {
			background-color: ${rgba(colors.clear, 0.7)};
		}
	}

	&.black {
		background-color: ${colors.dark};
		color: ${colors.light};
		transition: color 0.3s ease-out;

		&:disabled {
			background-color: ${rgba(colors.dark, 0.3)};
			color: ${colors.light};
		}

		&:hover {
			color: ${rgba(colors.clear, 0.7)};
		}
	}
`;
