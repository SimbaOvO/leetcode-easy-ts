// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
	let flag = true
	let index = digits.length - 1
	
	while (index >= 0 && flag) {
		const count = digits[index] + (+flag)
		const offset = count % 10
		
		digits[index] = offset
		flag = offset === 0
		index--
	}
	
	if (flag) {
		digits.unshift(1)
	}
	
	return digits
};
