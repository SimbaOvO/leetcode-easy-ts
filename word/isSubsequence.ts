// https://leetcode.com/problems/is-subsequence/

function isSubsequence(s: string, t: string): boolean {
	const searchLen = s.length
	const baseLen = t.length
	
	if (searchLen > baseLen) {
		return false
	}
	
	let [base, move] = [0, 0]
	
	while (base < baseLen) {
		if (s[move] === t[base]) {
			move++
		}
		
		base++
	}
	
	return move === searchLen
};
