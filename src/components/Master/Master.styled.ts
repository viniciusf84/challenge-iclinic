import styled, { css } from 'styled-components';
import { colors } from '../../styles/variables';

export const MasterStyled = styled.section`
	display: flex;
	flex-direction: column;

	${(props) =>
		props.theme === 'dark' &&
		css`
			background-color: ${colors.dark};

			p {
				color: ${colors.clear};
			}
		`}

	${(props) =>
		props.theme === 'light' &&
		css`
			background-color: ${colors.light};
		`}

	p {
		font-size: 2.25rem;
		line-height: 2.75rem;
	}

	.message {
		height: 103px;
		display: flex;
		align-items: center;
	}
`;

export const MasterInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 625px;
`;

export const MasterImageWrapper = styled.figure`
	width: 380px;
	height: 380px;
	border-radius: 50%;
	background-size: cover;
	overflow: hidden;
	margin: 90px 0 18px;
`;
