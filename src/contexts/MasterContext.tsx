import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { getCharacterInfo } from '../services';

//themes
import home from '../styles/themes/home';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

//images
import imgVader from '../assets/images/darth-vader.png';
import imgSkywalker from '../assets/images/luke-skywalker.png';

interface MasterContextData {
	isLoading: boolean;
	master: string | null;
	theme: any;
	link: string;
	image: string | undefined;
	loadDataRace(): Promise<void>;
	resetMaster(): void;
}
interface ThemeProps {
	title: string;
	pageBackground: string;
	text: string;
	buttonBackground: string;
	hoverButtonBackground: string;
	buttonText: string;
}

const MasterContext = createContext<MasterContextData>({} as MasterContextData);

const MasterProvider: React.FC = ({ children }) => {
	const [masterName, setMasterName] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [masterImage, setMasterImage] = useState<string | undefined>(undefined);
	const [link, setLink] = useState<string>('/');
	const [theme, setTheme] = useState<ThemeProps>(home);

	async function loadDataRace(): Promise<void> {
		const getLightSideData = getCharacterInfo('1'); // Light Side
		const getDarkSideData = getCharacterInfo('4'); // Dark Side

		setIsLoading(true);
		const race = await Promise.race([getLightSideData, getDarkSideData]);

		setMasterName(race.data.name);
		setIsLoading(false);
	}

	function resetMaster() {
		setMasterName(null);
	}

	useEffect(() => {
		if (!!masterName) {
			setLink('master');
			setMasterImage(masterName === 'Luke Skywalker' ? imgSkywalker : imgVader);
			setTheme(masterName === 'Luke Skywalker' ? light : dark);
		} else {
			setLink('/');
			setMasterImage(undefined);
			setTheme(home);
		}
	}, [masterName]);

	return (
		<MasterContext.Provider
			value={{
				isLoading,
				master: masterName,
				theme,
				link: link,
				image: masterImage,
				loadDataRace,
				resetMaster,
			}}
		>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</MasterContext.Provider>
	);
};

export { MasterContext, MasterProvider };
