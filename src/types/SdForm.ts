import { type OrderBy } from '~/types/SdGridType';

export interface SdFormType {
	dataid: string;
	form_name: string | null;
	form_detail: string | null;
	form_category: string;
	form_tag: Array<string>;
	form_icon: string | null;
	form_mobile: boolean;
	form_feature: string;
	feature_token: string;
	form_type: string;
	form_table: string;
	form_version: string | null;
	version_parent: string | null;
	version_count: number;
	version_description: string;
	joiner_field: JoinerField;
	form_license: string;
	form_model: string;
	form_approve: boolean;
	form_enable: boolean;
	form_options: FormOptions;
	form_share: FormShare;
	form_db: FormDb;
	form_event: FormEvent;
	created_by?: any;
	created_at?: string;
	updated_by?: any;
	updated_at?: string;
	_id?: string;
}

export interface FormOptions {
	data_manager: Array<string>;
	auto_save: boolean;
	popup_size: number;
	query_tool: string;
	unique_record: string;
	unique_submitted: boolean;
	unique_field: string;
	system_form: boolean;
	allowed_clone: boolean;
	display_fields: Array<string>;
	search_fields: Array<string>;
	enable_websocket: boolean;
}

export interface JoinerField {
	joiner_enable: boolean;
	form_parent: string;
	joiner_label: string;
	joiner_variable: string;
	insert_enable: boolean;
	view_enable: boolean;
	edit_enable: boolean;
	change_enable: boolean;
	joiner_size: number;
	joiner_placeholder: string;
	joiner_hint: string;
	form_id: any;
	field_name: string;
	label_fields: Array<string>;
	label_template: string;
	search_fields: Array<string>;
	ref_fields: Array<string>;
	sql_filter: string;
	order_by: Array<OrderBy>;
	ref_form: any;
}

export interface FormDb {
	api_url: string;
	autonum: any;
	schema: any;
	data_list: any;
	index: any;
}

export interface FormShare {
	form_sharing: string;
	form_assign: Array<string>;
	data_sharing: string;
	insert_policy: boolean;
	insert_assign: Array<string>;
	update_policy: boolean;
	update_assign: Array<string>;
	delete_policy: boolean;
	delete_assign: Array<string>;
	form_token?: FormToken;
}

export interface FormToken {
	token_enable: boolean;
	token_unique: boolean;
	token_edit: boolean;
	token_result: boolean;
	token_header: boolean;
	token_footer: boolean;
	token_code: string;
	token_uid: string;
	token_user: string;
	token_commit: boolean;
	token_commit_content: string;
}

export interface FormEvent {
	enable: boolean;
	data_validation: Array<string>;
	api_onevent: Array<any>;
	open_next_form: Array<any>;
	update_relational_fields: Array<any>;
	delete_children_record: Array<string>;
	harvest_data: Array<any>;
	after_save: string;
	after_delete: string;
	update_children: boolean;
}

export interface FormSchema {
	fieldName: string;
	label: string;
	defaultValue: any;
	type: string;
	subField?: any;
	component: string;
	componentName: string;
	hidden: boolean;
	required: boolean;
	readonly: boolean;
	disabled: boolean;
	hint: string;
	multiple: boolean;
	valueFormat: string | null;
	format: string | null;
	width?: string | number;
	align?: string;
	sortable?: boolean;
	fixed?: boolean;
	widgetDisplay?: string;
	wrapText?: number;
	textType?: string;
	comment?: string;
	choiceType: any;
	joinerType: boolean | null;
	refFormId: string | null;
	refField: string | null;
	refFormType: boolean;
	groupField?: string;
	valueObjectId?: boolean;
	inputOptions?: any;
}

export interface FormAutonumber {
	label: string;
	perDay: boolean;
	bySite: boolean;
	increment: number;
	prefix: string;
	suffix: string;
	digit: number;
	count: number;
	countSite: any;
	dateAt: string;
}

export interface PopUpFormBind {
	modelValue: Boolean;
	formId: String;
	dataId?: String;
	parentId?: String;
	initData?: Object;
	params?: Object;
	backdrop?: Boolean;
	readonly?: Boolean;
	annotated?: Boolean;
	cancelCallback: Function;
	afterSaveCallback?: Function;
}

export const selectDataList = [
	{
		value: 'user-list',
		label: 'Member List',
		valueField: '_id',
		labelField: ['fname', 'lname', 'email'],
		searchField: ['profile.fname', 'profile.lname'],
		valueObjectId: true,
		labelTemp: '{{fname}} {{lname}} ( {{email}} )',
	},
	{
		value: 'roles-list',
		label: 'Roles List',
		valueField: 'role_name',
		labelField: ['role_name', 'role_description'],
		searchField: ['role_name'],
		valueObjectId: false,
		labelTemp: '{{role_name}}',
	},
	{
		value: 'sdform-list',
		label: 'SdForm All List ',
		valueField: '_id',
		labelField: ['form_name', 'form_version'],
		searchField: ['form_name'],
		valueObjectId: true,
		labelTemp: '{{form_name}} ({{form_version}})',
	},
	{
		value: 'sdform-db-list',
		label: 'SdForm DB List',
		valueField: '_id',
		labelField: ['form_name', 'form_version'],
		searchField: ['form_name'],
		valueObjectId: true,
		labelTemp: '{{form_name}} ({{form_version}})',
	},
	{
		value: 'sdform-ui-list',
		label: 'SdForm UI List',
		valueField: '_id',
		labelField: ['form_name', 'form_version'],
		searchField: ['form_name'],
		valueObjectId: true,
		labelTemp: '{{form_name}} ({{form_version}})',
	},
	{
		value: 'sql-list',
		label: 'SQL List',
		valueField: '_id',
		labelField: ['sql_name'],
		searchField: ['sql_name'],
		valueObjectId: true,
		labelTemp: '',
	},
	{
		value: 'api-list',
		label: 'API List',
		valueField: '_id',
		labelField: ['api_name'],
		searchField: ['api_name'],
		valueObjectId: true,
		labelTemp: '',
	},
	{
		value: 'report-list',
		label: 'Report List',
		valueField: '_id',
		labelField: ['pdf_name'],
		searchField: ['pdf_name'],
		valueObjectId: true,
		labelTemp: '',
	},
	{
		value: 'packages-list',
		label: 'Packages List',
		valueField: '_id',
		labelField: ['app_name', 'app_code'],
		searchField: ['app_name', 'app_code'],
		valueObjectId: true,
		labelTemp: '{{app_name}} ( {{app_code}} )',
	},

	// {
	// 	value: 'sdform-table-list',
	// 	label: 'SdForm List (Table)',
	// 	valueField: 'form_table',
	// 	labelField: ['form_name', 'form_version'],
	// 	searchField: ['form_name'],
	// 	valueObjectId: true,
	// 	labelTemp: '{{form_name}} ({{form_version}})',
	// },
];
