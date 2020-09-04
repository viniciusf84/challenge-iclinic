import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;
		pageBackground: string;
		text: string;
		buttonBackground: string;
		hoverButtonBackground: string;
		buttonText: string;
	}
}
