import styled from 'styled-components';
import { rgba } from 'polished';
import { breakpoints, colors } from '../../styles/variables';

export const MasterStyled = styled.section`
	background-color: ${(props) => props.theme.pageBackground};
	color: ${(props) => props.theme.text};
	transition: 0.4s ease-in background-color;

	p {
		font-size: 2rem;
		line-height: 2.45rem;
		text-align: center;
		width: 300px;

		@media (min-width: ${breakpoints.phone}px) {
			font-size: 2.25rem;
			line-height: 2.75rem;
		}

		@media (min-width: ${breakpoints.mobile}px) {
			width: auto;
		}
	}
`;

export const MasterInfo = styled.div`
	max-width: 625px;

	button.action {
		color: ${(props) => props.theme.buttonText};
		width: 280px;
		order: 3;
		font-size: 0.8rem;

		@media (min-width: ${breakpoints.phone}px) {
			width: 347px;
			font-size: 1rem;
		}

		@media (min-width: ${breakpoints.mobile}px) {
			order: 1;
		}
	}

	.message {
		height: 103px;
		margin-bottom: 10px;
		order: 2;

		@media (min-width: ${breakpoints.phone}px) {
			margin-bottom: 34px;
		}

		@media (min-width: ${breakpoints.mobile}px) {
			margin-bottom: 0;
			order: 3;
		}
	}
`;

export const MasterImageWrapper = styled.figure`
	width: 280px;
	height: 280px;
	border-radius: 50%;
	background-color: ${rgba(colors.clear, 0.3)};
	overflow: hidden;
	margin: 0 0 34px;
	order: 1;

	img {
		max-width: 100%;
	}

	@media (min-width: ${breakpoints.phone}px) {
		width: 302px;
		height: 302px;
	}

	@media (min-width: ${breakpoints.mobile}px) {
		margin: 91px 0 18px;
		width: 380px;
		height: 380px;
		order: 2;
	}
`;
