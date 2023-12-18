// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
	let lastIndex = digits.length - 1
	
	while(lastIndex >= 0) {
		const base = (digits[lastIndex] + 1) % 10
		digits[lastIndex] = base
		
		if (base !== 0) {
			return digits
		}
		
		lastIndex--
	}
	
	return [1, ...digits]
};
