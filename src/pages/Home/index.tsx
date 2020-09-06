import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { MasterContext } from '../../contexts/MasterContext';

import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';
import { Container } from '../../components/Container';

import { HomeStyled } from './Home.styled';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
	const masterContext = useContext(MasterContext);
	const { isLoading, link, loadDataRace } = masterContext;

	useEffect(() => {
		if (link !== '/') {
			history.push(link);
		}
	}, [link, history]);

	return (
		<HomeStyled id="home" className="animate__animated  animate__fadeIn">
			<Container className="flex__default">
				<PageTitle className="animate__animated  animate__fadeInDown">
					Welcome to <strong>iClinic</strong>
				</PageTitle>

				<p className="uppercase animate__animated animate__fadeIn">
					Frontend Challenge
				</p>

				<Button
					className="uppercase primary start animate__animated animate__fadeIn"
					onClick={() => loadDataRace()}
					disabled={isLoading}
				>
					Start
				</Button>
			</Container>
		</HomeStyled>
	);
};

export default Home;
