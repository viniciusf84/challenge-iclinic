import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const HomeStyled = styled.section`
	color: ${colors.primary};
	text-align: center;

	p {
		margin-bottom: 162px;

		&.uppercase {
			font-size: 0.875rem;
			letter-spacing: 0.35em;
			line-height: 17px;
			text-transform: uppercase;
		}
	}

	button.start {
		animation-delay: 0.6s;
	}
`;
