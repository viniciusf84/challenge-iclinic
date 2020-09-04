import styled from 'styled-components';
import { breakpoints } from '../../styles/variables';

export const MasterStyled = styled.section`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.pageBackground};
	color: ${(props) => props.theme.text};
	transition: 0.4s ease-in background-color;

	p {
		font-size: 2.25rem;
		line-height: 2.75rem;
		text-align: center;
		width: 300px;

		@media (min-width: ${breakpoints.mobile}px) {
			width: auto;
		}
	}
`;

export const MasterInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 625px;

	button.action {
		color: ${(props) => props.theme.buttonText};
		width: 375px;
		order: 3;

		@media (min-width: ${breakpoints.mobile}px) {
			order: 1;
		}
	}

	.message {
		height: 103px;
		display: flex;
		align-items: center;
		margin-bottom: 34px;
		order: 2;

		@media (min-width: ${breakpoints.mobile}px) {
			margin-bottom: 0;
			order: 3;
		}
	}
`;

export const MasterImageWrapper = styled.figure`
	width: 302px;
	height: 302px;
	border-radius: 50%;
	background-size: cover;
	overflow: hidden;
	margin: 90px 0 18px;
	order: 1;

	@media (min-width: ${breakpoints.mobile}px) {
		width: 380px;
		height: 380px;
		order: 2;
	}
`;
