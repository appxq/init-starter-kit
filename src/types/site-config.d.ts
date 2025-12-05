export {};

declare global {
	interface Window {
		readonly APP_CONFIG: {
			readonly SERVER_HOST: string;
			readonly API_PATH: string;
			readonly ASSETS_PATH: string;
			readonly REFRESH_TOKEN: number;
			readonly API_URL: string;
			readonly ASSETS_URL: string;
			readonly APP_IMG_LOGO: string;
			readonly APP_SVG_LOGO: string;
			readonly APP_LOGO_TYPE: string;
			readonly APP_NAME: string;
			readonly APP_SLOGAN: string;
			readonly APP_VERSION: string;
		};
	}
}
