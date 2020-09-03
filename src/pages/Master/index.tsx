import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { MasterContext } from '../../contexts/MasterContext';

import Button from '../../components/Button';
import GoBack from '../../components/GoBack';

import { MasterStyled, MasterInfo, MasterImageWrapper } from './Master.styled';

interface MasterProps extends RouteComponentProps<any> {
	master?: string | null;
	image?: string | undefined;
	link?: string;
	theme?: string;
}

const Master: React.FC<MasterProps> = ({ history, link, theme }) => {
	const masterContext = useContext(MasterContext);
	const { isLoading, master, loadDataRace, image, resetMaster } = masterContext;

	useEffect(() => {
		if (!master) {
			history.push('/');
		}
	}, [master]);

	return (
		<MasterStyled id="master" theme={theme}>
			<GoBack text="back" onClick={() => resetMaster()} />
			<Button
				className={theme === 'dark' ? 'clear' : 'black'}
				onClick={() => loadDataRace()}
				disabled={isLoading}
			>
				{isLoading ? 'Loading...' : 'Choose your path again, Padawan'}
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
