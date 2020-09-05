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
		// back home
		if (!master) {
			history.push('/');
		}
	}, [master, history]);

	return (
		<MasterStyled id="master" className="flex__default">
			<GoBack
				className="back flex__default row"
				text="back"
				onClick={() => resetMaster()}
			/>

			<MasterInfo className="flex__default">
				<Button
					className="action"
					onClick={() => loadDataRace()}
					disabled={isLoading}
				>
					{isLoading ? 'Loading...' : 'choose your path again, Padawan'}
				</Button>

				<MasterImageWrapper className="flex__default">
					{!isLoading && !!master && (
						<img
							src={image}
							alt={master}
							className="animate__animated animate__fadeIn"
						/>
					)}
				</MasterImageWrapper>

				<div className="message flex__default">
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
