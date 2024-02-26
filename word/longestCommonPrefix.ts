// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
	if (!strs.length) return ''
	
	// sort at first, reduce loop
	// const sorted = strs.sort(
	//     (a, b) => a.length - b.length
	// )
	// const shortestStr = sorted[0]
	const arr = strs.slice()
	const baseStr = strs[0]
	
	for (let i = 0; i < baseStr.length; i++) {
		const char = baseStr[i]
		for (let j = 1; j < arr.length; j++) {
			if (arr[j][i] !== char) {
				return baseStr.substring(0, i)
			}
		}
	}
	
	return baseStr
};
