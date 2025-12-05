export interface OptionsSetting {
	dataid?: string;
	opts_code: string;
	opts_label: string | null;
	opts_value: any;
	opts_group: string | null;
	opts_type: OptionType;
	opts_datalist: any;
	opts_options: any;
	opts_divider: string | null;
	opts_hint: string | null;
	opts_autoload: string;
	_id?: string;
}

export interface OptionType {
	value?: string;
	label?: string;
}

export const typeList: OptionType[] = [
	{ value: 'text-editor', label: 'Text Input' },
	{ value: 'number-editor', label: 'Number Input' },
	{ value: 'datetime-editor', label: 'DateTime Input' },
	{ value: 'date-editor', label: 'Date Input' },
	{ value: 'time-editor', label: 'Time Input' },
	{ value: 'textarea-editor', label: 'Textarea Input' },
	{ value: 'boolean-editor', label: 'Boolean Input' },
	{ value: 'select-editor', label: 'Select Input' },
	{ value: 'radio-editor', label: 'Radio Input' },
	{ value: 'json-editor', label: 'JSON Input' },
	{ value: 'multiselect-editor', label: 'MultiSelect Input' },
	{ value: 'html-editor', label: 'HTML Input' },
	{ value: 'html-mini-editor', label: 'HTML Mini Input' },
	{ value: 'color-editor', label: 'Color Input' },
	{ value: 'js-editor', label: 'JS Input' },
	{ value: 'css-editor', label: 'CSS Input' },
];

export const typeBtnList: OptionType[] = [
	{ value: 'textarea-editor', label: 'Textarea Input' },
	{ value: 'json-editor', label: 'JSON Input' },
	{ value: 'html-editor', label: 'HTML Input' },
	{ value: 'html-mini-editor', label: 'HTML Mini Input' },
	{ value: 'js-editor', label: 'JS Input' },
	{ value: 'css-editor', label: 'CSS Input' },
];
