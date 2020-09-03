import React, { useContext } from 'react';

import { MasterContext } from '../../contexts/MasterContext';

import Master from '../../components/Master';
import imgVader from '../../assets/images/darth-vader.png';

const DarkSide: React.FC = () => {
	const masterContext = useContext(MasterContext);
	const { master, link, loadDataRace, resetMaster } = masterContext;

	return (
		<Master
			master={master}
			theme="dark"
			image={imgVader}
			buttonAction={() => loadDataRace()}
		/>
	);
};

export default DarkSide;
