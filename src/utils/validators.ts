import { isNull } from './Util';

export const getRegExp = function (validatorName: any) {
	const commonRegExp: any = {
		number: '/^[-]?\\d+(\\.\\d+)?$/',
		letter: '/^[A-Za-z]+$/',
		letterAndNumber: '/^[A-Za-z0-9]+$/',
		letterStartNumberIncluded: '/^[A-Za-z]+[A-Za-z\\d]*$/',
		letterWithThai: '/^[A-Za-zก-ฮ]+$/',
		letterAndNumberWithThai: '/^[A-Za-zก-ฮ0-9]+$/',
		letterStartNumberIncludedWithThai: '/^[A-Za-zก-ฮ]+[A-Za-zก-ฮ\\d]*$/',
		thaiLetter: '/^[ก-ฮ]+$/',
		mobilePhone: '/^[0][3-9][0-9]{8}$/', //^(0[689]{1})+([0-9]{8})+$
		email: '/^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\\.)+[A-Za-z0-9]{2,3}$/', //'/^\w+([.-]?\w+)_@\w+(_[_.-]?\w+)_(.\w{2,3})+$/', //
		url: '/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/', //'/^([hH][tT]{2}[pP]:\\/\\/|[hH][tT]{2}[pP][sS]:\\/\\/)(([A-Za-z0-9-~]+)\\.)+([A-Za-z0-9-~\\/])+$/',
		variable: '/^[a-z][a-z0-9_]+$/',
		variableFull: '/^[A-Za-z|_id][A-Za-z0-9_]+$/',
	};

	return commonRegExp[validatorName];
};

const validateFn = function (validatorName: any, rule: any, value: any, callback: any, defaultErrorMsg: any) {
	if (isNull(value) || value.length <= 0) {
		callback();
		return;
	}

	const fn = new Function('return ' + getRegExp(validatorName));
	const reg = fn();

	if (!reg.test(value)) {
		let errTxt = rule.errorMsg || defaultErrorMsg;
		callback(new Error(errTxt));
	} else {
		callback();
	}
};

const FormValidators: any = {
	number(rule: any, value: any, callback: any) {
		validateFn('number', rule, value, callback, '[' + rule.label + '] contains non-numeric characters');
	},

	letter(rule: any, value: any, callback: any) {
		validateFn('letter', rule, value, callback, '[' + rule.label + '] contains non-alphabetic characters');
	},
	letterAndNumber(rule: any, value: any, callback: any) {
		validateFn('letterAndNumber', rule, value, callback, '[' + rule.label + '] only letters or numbers can be entered');
	},
	letterStartNumberIncluded(rule: any, value: any, callback: any) {
		validateFn('letterStartNumberIncluded', rule, value, callback, '[' + rule.label + '] must start with a letter, may contain numbers');
	},

	letterWithThai(rule: any, value: any, callback: any) {
		validateFn('letterWithThai', rule, value, callback, '[' + rule.label + '] contains non-alphabetic characters');
	},
	letterAndNumberWithThai(rule: any, value: any, callback: any) {
		validateFn('letterAndNumberWithThai', rule, value, callback, '[' + rule.label + '] only letters or numbers can be entered');
	},
	letterStartNumberIncludedWithThai(rule: any, value: any, callback: any) {
		validateFn('letterStartNumberIncludedWithThai', rule, value, callback, '[' + rule.label + '] must start with a letter, may contain numbers');
	},

	thaiLetter(rule: any, value: any, callback: any) {
		validateFn('thaiLetter', rule, value, callback, '[' + rule.label + '] contains thai non-alphabetic characters');
	},

	mobilePhone(rule: any, value: any, callback: any) {
		validateFn('mobilePhone', rule, value, callback, '[' + rule.label + '] mobile phone number format is wrong');
	},
	email(rule: any, value: any, callback: any) {
		validateFn('email', rule, value, callback, '[' + rule.label + '] is not a valid email address.');
	},
	url(rule: any, value: any, callback: any) {
		validateFn('url', rule, value, callback, '[' + rule.label + '] is not a valid  URL.');
	},

	variable(rule: any, value: any, callback: any) {
		validateFn('variable', rule, value, callback, '[' + rule.label + '] must be in English or numbers only and do not contain spaces.');
	},

	variableFull(rule: any, value: any, callback: any) {
		validateFn('variableFull', rule, value, callback, '[' + rule.label + '] must be in English or numbers only and do not contain spaces.');
	},

	regExp(rule: any, value: any, callback: any) {
		if (isNull(value) || value.length <= 0) {
			callback();
			return;
		}

		const fn = new Function('return ' + rule.regExp);
		const pattern = fn();

		if (!pattern.test(value)) {
			let errTxt = rule.errorMsg || '[' + rule.label + ']invalid value';
			callback(new Error(errTxt));
		} else {
			callback();
		}
	},

	citizenId(rule: any, value: any, callback: any) {
		if (isNull(value) || value.length <= 0) {
			callback();
			return;
		}

		let cid: string = value.replaceAll('-', '');

		if (cid.length != 13) {
			callback(new Error(`[${rule.label}] must contain 13 digits.`));
			return;
		}

		let reverse: string = cid.split('').reverse().join(''); // reverse string ขั้นที่ 0 เตรียมตัว
		let total = 0;
		for (let i: number = 1; i < 13; i++) {
			// ขั้นตอนที่ 1 - เอาเลข 12 หลักมา เขียนแยกหลักกันก่อน
			let mul = i + 1;
			let count = Number(reverse.charAt(i)) * mul; // ขั้นตอนที่ 2 - เอาเลข 12 หลักนั้นมา คูณเข้ากับเลขประจำหลักของมัน
			total = total + count; // ขั้นตอนที่ 3 - เอาผลคูณทั้ง 12 ตัวมา บวกกันทั้งหมด
		}

		let mod = total % 11; //ขั้นตอนที่ 4 - เอาเลขที่ได้จากขั้นตอนที่ 3 มา mod 11 (หารเอาเศษ)
		let sub = 11 - mod; //ขั้นตอนที่ 5 - เอา 11 ตั้ง ลบออกด้วย เลขที่ได้จากขั้นตอนที่ 4
		let check_digit = sub % 10; //ถ้าเกิด ลบแล้วได้ออกมาเป็นเลข 2 หลัก ให้เอาเลขในหลักหน่วยมาเป็น Check Digit

		if (Number(reverse.charAt(0)) === check_digit) {
			// ตรวจสอบ ค่าที่ได้ กับ เลขตัวสุดท้ายของ บัตรประจำตัวประชาชน
			callback(); /// ถ้า ตรงกัน แสดงว่าถูก
		} else {
			let errTxt = rule.errorMsg || '[' + rule.label + '] is not a valid Citizen Id';
			callback(new Error(errTxt)); // ไม่ตรงกันแสดงว่าผิด
		}
	},
};

export default FormValidators;
