// https://leetcode.com/problems/nim-game/

function canWinNim(n: number): boolean {
	return n % 4 !== 0;
	
	// TLE @_@
	// const dp = new Array(n + 1).fill(false)
	// dp[1] = true
	// dp[2] = true
	// dp[3] = true
	
	// let index = 4
	
	// while (index <= n) {
	//   dp[index] = !dp[index - 1] || !dp[index - 2] || !dp[index - 3]
	//   index++
	// }
	
	// return dp[n]
};
