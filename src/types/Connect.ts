export interface ConnectProject {
	license_token: string | null;
	register_id: string | null;
	form_basic?: number;
	form_pro?: number;
	sql_builder?: number;
	api_builder?: number;
	report_builder?: number;
	license_limit?: number;
	license_expire?: string | null;
}
