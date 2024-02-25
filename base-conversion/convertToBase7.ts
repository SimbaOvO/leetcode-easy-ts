// https://leetcode.com/problems/base-7/

function convertToBase7(num: number): string {
	if (num === 0) {
		return '0'
	}
	
	const base = 7
	const flag = num < 0
	
	let str = ''
	num = Math.abs(num)
	
	while (num > 0) {
		const current = num % base
		str = current + str
		num = Math.floor(num / base)
	}
	
	if (flag) {
		str = '-' + str
	}
	
	return str
};
