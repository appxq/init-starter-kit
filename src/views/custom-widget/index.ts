const modules: any = import.meta.glob('./*.vue', { eager: true });

export default {
	component() {
		let widget: any = {};
		for (const path in modules) {
			let cname = modules[path].default.name;
			let component = modules[path].default;

			widget[cname] = component;
		}
		return widget;
	},
};
