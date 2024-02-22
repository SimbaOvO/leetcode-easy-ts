// https://leetcode.com/problems/power-of-three/

function isPowerOfThree(n: number): boolean {
	if (n <= 0) {
		return false
	}
	
	const base = 3
	
	while (n > 1) {
		const current = n % base
		if (current !== 0) {
			return false
		}
		n = Math.floor(n / base)
	}
	
	return true
};
