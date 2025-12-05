export function isRole(role: string, roles: string[]): Boolean {
	return roles.includes(role);
}

export function isAdmin(roles: string[]): Boolean {
	return roles.includes('admin') || roles.includes('super');
}

export function isManager(roles: string[]): Boolean {
	return roles.includes('admin') || roles.includes('super') || roles.includes('manager');
}

export function isSuper(roles: string[]): Boolean {
	return roles.includes('super');
}

export function isAuth(roles: string[]): Boolean {
	return roles.includes('admin') || roles.includes('super') || roles.includes('manager') || roles.includes('auth');
}
