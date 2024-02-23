// https://leetcode.com/problems/arranging-coins/

function arrangeCoins(n: number): number {
	let i = 1
	
	while (true) {
		n -= i
		
		if (n <= i) {
			return i
		}
		
		i++
	}
};
