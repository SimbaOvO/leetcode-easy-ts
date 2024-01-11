// https://leetcode.com/problems/climbing-stairs/

function climbStairs(n: number): number {
	if (n <= 2) return n
	
	let [prev1, prev2, total] = [0, 1, 2]
	
	for(let i = 3; i <= n; i++) {
		prev1 = prev2
		prev2 = total
		total = prev1 + prev2
	}
	
	return total
};
