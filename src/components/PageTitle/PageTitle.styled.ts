import styled from 'styled-components';
import { breakpoints } from '../../styles/variables';

export const PageTitle = styled.h1`
	font-weight: normal;
	font-size: 4rem;

	b {
		font-weight: 700;
	}

	@media (min-width: ${breakpoints.mobile}px) {
		font-size: 6rem;
	}
`;
