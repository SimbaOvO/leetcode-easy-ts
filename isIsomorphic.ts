// https://leetcode.cn/problems/isomorphic-strings/

function isIsomorphic(s: string, t: string): boolean {
	const sMap = new Map()
	const tMap = new Map()
	
	let len = 0
	
	while(len < s.length) {
		const key = s[len]
		const value = t[len]
		if (
			(sMap.has(key) && sMap.get(key) !== value) ||
			(tMap.has(value) && tMap.get(value) !== key)
		) {
			return false
		}
		
		tMap.set(value, key)
		sMap.set(key, value)
		len++
	}
	
	return true
};
