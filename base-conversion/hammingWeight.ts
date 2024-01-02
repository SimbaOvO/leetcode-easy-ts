// https://leetcode.com/problems/number-of-1-bits/

function hammingWeight(n: number): number {
	const mod = 2
	
	let num = n
	let sum = 0
	
	while (num > 0) {
		const base = num % mod
		if (base === 1) {
			sum++
		}
		num = Math.floor(num / mod)
	}
	
	return sum
};
