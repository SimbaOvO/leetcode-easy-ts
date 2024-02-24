// https://leetcode.com/problems/hamming-distance/

function hammingDistance(x: number, y: number): number {
	const base = 2
	
	let count = 0
	
	while (x > 0 || y > 0) {
		const left = x > 0 ? x % base : 0
		const right = y > 0 ? y % base : 0
		
		if (left !== right) {
			count++
		}
		
		x = Math.floor(x / base)
		y = Math.floor(y / base)
	}
	
	return count
}
