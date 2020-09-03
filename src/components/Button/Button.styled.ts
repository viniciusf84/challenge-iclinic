import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const ButtonStyled = styled.button`
	border-radius: 10px;
	height: 56px;
	min-width: 189px;
	border: none;
	font-weight: bold;
	font-size: 1rem;
	padding: 0 42px;
	cursor: pointer;

	&.uppercase {
		text-transform: uppercase;
	}

	&.primary {
		background-color: ${colors.primary};
		color: ${colors.clear};
		padding: 0;
	}

	&.clear {
		background-color: ${colors.clear};
		color: ${colors.dark};
	}

	&.black {
		background-color: ${colors.dark};
		color: ${colors.light};
	}
`;
