import { ElMessage } from 'element-plus';
import useClipboard from 'vue-clipboard3';

const clipboard = useClipboard();

export async function copyClipboard(value: string) {
	try {
		await clipboard.toClipboard(value);

		ElMessage({
			message: 'Copied to clipboard',
			type: 'success',
		});
	} catch (e) {
		console.error(e);
	}
}
