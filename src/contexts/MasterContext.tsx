import React, { createContext, useState, useEffect } from 'react';

import { getCharacterInfo } from '../services';

interface MasterContextData {
	master: string | null;
	link: string;
	loadDataRace(): Promise<void>;
	resetMaster(): void;
}

const MasterContext = createContext<MasterContextData>({} as MasterContextData);

const MasterProvider: React.FC = ({ children }) => {
	const [masterName, setMasterName] = useState<string | null>(null);
	const [link, setLink] = useState<string>('/');

	async function loadDataRace(): Promise<void> {
		const race = await Promise.race([
			getCharacterInfo('1'), // Light Side
			getCharacterInfo('4'), // Dark Side
		]);

		setMasterName(race.data.name);
	}

	function resetMaster() {
		setMasterName(null);
	}

	useEffect(() => {
		if (!!masterName) {
			setLink(masterName === 'Luke Skywalker' ? 'lightside' : 'darkside');
		} else {
			setLink('/');
		}
	}, [masterName]);

	return (
		<MasterContext.Provider
			value={{
				master: masterName,
				link: link,
				loadDataRace,
				resetMaster,
			}}
		>
			{children}
		</MasterContext.Provider>
	);
};

export { MasterContext, MasterProvider };
