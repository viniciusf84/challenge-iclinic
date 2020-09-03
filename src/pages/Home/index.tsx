import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { MasterContext } from '../../contexts/MasterContext';

import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';
import { Container } from '../../components/Container';

import { HomeStyled } from './Home.styled';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
	const masterContext = useContext(MasterContext);
	const { master, link, loadDataRace, resetMaster } = masterContext;

	useEffect(() => {
		if (link !== '/') {
			history.push(link);
		}
	}, [link]);

	return (
		<HomeStyled>
			<Container>
				<PageTitle>
					Welcome to <strong>iClinic</strong>
				</PageTitle>
				<p className="uppercase">Frontend Challenge</p>

				<Button className="uppercase primary" onClick={() => loadDataRace()}>
					Entrar
				</Button>
			</Container>
		</HomeStyled>
	);
};

export default Home;
