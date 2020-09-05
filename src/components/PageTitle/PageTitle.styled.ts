import styled from 'styled-components';
import { breakpoints } from '../../styles/variables';

export const PageTitle = styled.h1`
	font-weight: normal;
	font-size: 3rem;
	line-height: 88px;
	height: 88px;
	margin-left: -25px;

	b {
		font-weight: 700;
	}

	@media (min-width: ${breakpoints.mobile}px) {
		font-size: 4.5rem;
	}
`;
