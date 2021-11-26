import "styled-components"


declare module "styled-components" {
	export interface DefaultTheme {
		borderRadius: string;

		colors: {
				blue: string;
				lightOrange: string;
				softBlue: string;
				lightRed: string;
				limeGreen: string;
				violet: string;
				softOrange: string;
				veryDarkBlue: string;
				darkBlue: string;
				desaturatedBlue: string;
				paleBlue: string;	
			}
		}
	}

