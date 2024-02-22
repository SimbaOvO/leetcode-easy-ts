// https://leetcode.com/problems/counting-bits/

function countBits(n: number): number[] {
	const base = 2
	const nums = []
	
	let index = 0
	
	while (index <= n) {
		let sum = 0
		let temp = index
		
		while (temp > 0) {
			const current = temp % base
			sum += current
			temp = Math.floor(temp / base)
		}
		
		nums.push(sum)
		index++
	}
	
	return nums
};
