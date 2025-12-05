export interface wsDataSend {
	from?: string;
	data: any;
	target?: string[];
	keyid?: string;
	method?: 'insert' | 'update' | 'delete' | 'view';
	sendto?: boolean;
	params?: any;
}

export interface wsDataReceive {
	from?: string;
	data: any;
	keyid?: string;
	method?: 'insert' | 'update' | 'delete' | 'view';
	sendto?: boolean;
	params?: any;
}

//module_notify
export interface SdNotify {
	type: 'success' | 'warning' | 'info' | 'error';
	title: string;
	message: string;
	detail?: string;
	tags?: string;
	mode?: 'target' | 'site' | 'unit' | 'broadcast';
	target?: string[];
	site?: string[];
	unit?: string[];
	created_by?: any;
	created_at?: string;
	updated_by?: any;
	updated_at?: string;
}
