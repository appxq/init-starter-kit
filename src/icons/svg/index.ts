let iconList: any = [];
let elIconList: any = [];

const icons: any = import.meta.glob('./**/*.svg', { eager: true }); // /**

for (const path in icons) {
	let iName: string[] = path.replace('.svg', '').replace('./', '').split('/');
	let value: string = iName.join('-');
	let rawLabel: string = iName.at(-1) ?? '';
	if (!!rawLabel) {
		let arrayLabel: string[] = rawLabel.split('-');
		let label = '';
		let comma = '';
		for (let index in arrayLabel) {
			if (!!arrayLabel[index]) {
				label = label + comma + capitalize(arrayLabel[index]);
				comma = ' ';
			}
		}

		if (value.substring(0, 2) == 'el') {
			let valueEl = value.replace('el-', '');
			elIconList.push({ value: valueEl, label: label });
		}
		iconList.push({ value: value, label: label });
	}
}

export default { iconList, elIconList };

function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
