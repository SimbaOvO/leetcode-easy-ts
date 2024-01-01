// https://leetcode.com/problems/reverse-bits/

function reverseBits(n: number): number {
	const mod = 2
	const baseLen = 32
	
	let sum = 0
	let maxIndex = baseLen - 1
	
	while (n > 0) {
		const modValue = n % mod
		const current = modValue * Math.pow(mod, maxIndex)
		sum += current
		n = Math.floor(n / mod)
		
		maxIndex--
	}
	
	return sum
};
