// https://leetcode.cn/problems/add-digits/

function addDigits(num: number): number {
	let sum = 0
	
	while (num > 0 || sum >= 10) {
		if (num <= 0) {
			num = sum
			sum = 0
		}
		
		const base = num % 10
		
		sum += base
		num = Math.floor(num / 10)
	}
	
	return sum
};
