// https://leetcode.com/problems/power-of-four/

function isPowerOfFour(n: number): boolean {
	if (n <= 0) {
		return false
	}
	
	const base = 4
	
	while (n > 1) {
		const current = n % base
		
		if (current !== 0) {
			return false
		}
		
		n = Math.floor(n / base)
	}
	
	return true
};
