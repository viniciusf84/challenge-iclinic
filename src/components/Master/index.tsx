import React, { useEffect } from 'react';

import Button from '../Button';
import GoBack from '../GoBack';

import WhiteArrow from '../../assets/svg/white-arrow.svg';
import BlackArrow from '../../assets/svg/black-arrow.svg';

import { MasterStyled, MasterInfo, MasterImageWrapper } from './Master.styled';

interface MasterProps {
	master?: string | null;
	image?: string;
	link?: string;
	theme?: string;
	buttonAction?: any;
}

const Master: React.FC<MasterProps> = ({
	master,
	image,
	link,
	theme,
	buttonAction,
}) => {
	return (
		<MasterStyled theme={theme}>
			<GoBack text="back" icon={theme === 'dark' ? WhiteArrow : BlackArrow} />
			<Button
				className={theme === 'dark' ? 'clear' : 'black'}
				onClick={() => buttonAction()}
			>
				Choose your path again, Padawan
			</Button>

			<MasterInfo>
				<MasterImageWrapper>
					{!!master && <img src={image} alt={master} />}
				</MasterImageWrapper>

				<div className="message">
					<p>
						Your master is <strong>{master}</strong> {link}
					</p>
				</div>
			</MasterInfo>
		</MasterStyled>
	);
};

export default Master;
