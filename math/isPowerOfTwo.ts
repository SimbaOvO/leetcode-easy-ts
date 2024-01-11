// https://leetcode.cn/problems/power-of-two/

function isPowerOfTwo(n: number): boolean {
	if (n <= 0) {
		return false
	}
	
	while (n > 0) {
		const base = n % 2
		if (n !== 1 && base === 1) {
			return false
		}
		n = Math.floor(n / 2)
	}
	
	return true
};
