export interface SdDataProvider {
	from: string;
	page?: number;
	limit?: number;
	select?: Array<string>;
	where?: string;
	search?: Array<string>;
	fileter?: any;
	params?: any;
	join?: Array<JoinSql>;
	orderBy?: Array<OrderBy>;
	groupBy?: Array<string>;
	sum?: Array<string>;
}

export enum ProviderType {
	SYS = 'SYS',
	FORM = 'FORM',
	SQL = 'SQL',
}

export interface SdProvider {
	providerId: string;
	providerType: 'FORM' | 'SYS' | 'SQL' | ProviderType | string;
	params?: any;
	options?: SdCondition;
}

export interface SdCondition {
	select?: Array<string>;
	search?: Array<string>;
	fileter?: any;
	fileterObjectId?: Array<string>;
	where?: string;
	orderBy?: Array<OrderBy>;
	groupBy?: Array<string>;
	sum?: Array<string>;
	page?: number;
	limit?: number;
}

export interface WhereSql {
	bracket_start: string | null;
	function: string | null;
	field: string | null;
	condition: string | null;
	value1: string | null;
	value2: string | null;
	bracket_end: string | null;
	with: 'AND' | 'OR';
}

export interface JoinSql {
	type: 'INNER JOIN' | 'LEFT JOIN';
	hint: '' | 'FIRST' | 'LAST' | 'UNWIND' | 'OPTIMIZE';
	table: string;
	on: string;
}

export interface OrderBy {
	column: string;
	sort: 'ASC' | 'DESC' | string | sortStr;
}

export enum sortStr {
	ASC = 'ASC',
	DESC = 'DESC',
}

export enum joinType {
	INNER = 'INNER JOIN',
	LEFT = 'LEFT JOIN',
}

export enum withType {
	AND = 'AND',
	OR = 'OR',
}

export interface DisplayFields {
	fieldName: string;
	label?: string;
	width?: string;
	valueFormat?: string;
	format?: string;
	align?: 'left' | 'center' | 'right';
	sortable?: boolean;
	fixed?: '' | 'left' | 'right';
	wrapText?: number;
	textType?: '' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
	htmlValue?: string;
	expressions?: string;
	filters?: boolean;
	filtersItems?: Array<{ text: string; value: any }>;
}

export interface BlockFields {
	fieldName: string;
	label?: string;
	width?: string;
	minWidth?: string;
	labelWidth?: string;
	align?: 'left' | 'center' | 'right';
	labelAlign?: 'left' | 'center' | 'right';
	rowspan?: number;
	span?: number;
	htmlValue?: string;
	expressions?: string;
}

export interface CustomValue {
	fieldName: string;
	expressions?: string;
}

export interface ReportWdiget {
	fieldName: string;
	label?: string;
	width?: '*' | 'auto' | number;
	valueFormat?: string;
	format?: string;
	alignment?: 'left' | 'center' | 'right';
	bold?: boolean;
	italics?: boolean;
	background?: string;
	color?: string;
	fontSize?: number;
	marginLeft?: number;
	marginTop?: number;
	marginRight?: number;
	marginBottom?: number;
	decoration?: 'underline' | 'lineThrough' | 'overline';
	decorationStyle?: 'dotted' | 'dashed' | 'double' | 'wavy';
	htmlValue?: string;
	expressions?: string;
}

export interface ReportColumn {
	field: string;
	label?: string;
	width?: '*' | 'auto' | number;
	format?: string;
	alignment?: 'left' | 'center' | 'right';
	bold?: boolean;
	italics?: boolean;
	fillColor?: string;
	color?: string;
	marginLeft?: number;
	marginTop?: number;
	marginRight?: number;
	marginBottom?: number;
	colSpan?: number;
	rowSpan?: number;
	decoration?: 'underline' | 'lineThrough' | 'overline';
	decorationStyle?: 'dotted' | 'dashed' | 'double' | 'wavy';
	sum?: 'totalOnly' | 'groupTotal';
	group?: boolean;
	htmlValue?: string;
	expressions?: string;
}
