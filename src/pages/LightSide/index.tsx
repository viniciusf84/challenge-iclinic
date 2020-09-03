import React, { useContext } from 'react';

import { MasterContext } from '../../contexts/MasterContext';

import Master from '../../components/Master';
import imgSkywalker from '../../assets/images/luke-skywalker.png';

const LightSide: React.FC = () => {
	const masterContext = useContext(MasterContext);
	const { master, link, loadDataRace, resetMaster } = masterContext;

	return (
		<Master
			master={master}
			theme="light"
			image={imgSkywalker}
			buttonAction={() => loadDataRace()}
		/>
	);
};

export default LightSide;
