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
}

const Master: React.FC<MasterProps> = ({ history, link }) => {
	const masterContext = useContext(MasterContext);
	const { isLoading, master, loadDataRace, image, resetMaster } = masterContext;

	useEffect(() => {
		// back to home
		if (!master) {
			history.push('/');
		}
	}, [master]);

	return (
		<MasterStyled id="master">
			<GoBack className="back" text="back" onClick={() => resetMaster()} />

			<MasterInfo>
				<Button
					className="action"
					onClick={() => loadDataRace()}
					disabled={isLoading}
				>
					{isLoading ? 'Loading...' : 'Choose your path again, Padawan'}
				</Button>

				{!isLoading && master && (
					<MasterImageWrapper
						className="animate__animated animate__fadeIn"
						style={{ backgroundImage: `url(${image})` }}
					></MasterImageWrapper>
				)}

				<div className="message">
					{!isLoading && (
						<p className="animate__animated animate__fadeIn">
							Your master is <strong>{master}</strong>
						</p>
					)}
				</div>
			</MasterInfo>
		</MasterStyled>
	);
};

export default Master;
