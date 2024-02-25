// https://leetcode.com/problems/number-complement/

function findComplement(num: number): number {
	const base = 2
	
	let sum = 0
	let index = 0
	
	while (num > 0) {
		const current = num % base
		const flip = +(!current)
		
		sum += flip * Math.pow(base, index)
		num = Math.floor(num / base)
		
		index++
	}
	
	return sum
};
