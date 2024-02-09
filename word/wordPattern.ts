// https://leetcode.com/problems/word-pattern/

function wordPattern(pattern: string, s: string): boolean {
	const str = s.split(' ')
	
	if (pattern.length !== str.length) {
		return false
	}
	
	const pMap = new Map()
	const sMap = new Map()
	
	let index = 0
	while (index < str.length) {
		const pValue = pMap.get(pattern[index])
		const sValue = sMap.get(str[index])
		
		if (
			(pValue && pValue !== str[index]) ||
			(sValue && sValue !== pattern[index])
		) {
			return false
		}
		
		pMap.set(pattern[index], str[index])
		sMap.set(str[index], pattern[index])
		index++
	}
	
	return true
};
