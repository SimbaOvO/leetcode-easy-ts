// https://leetcode.com/problems/find-the-difference/

function findTheDifference(s: string, t: string): string {
	if (s.length === 0) {
		return t
	}
	
	const map = new Map()
	
	let index = 0
	
	while (index < s.length) {
		const count = map.get(s[index])
		const offset = count ? count + 1 : 1
		
		map.set(s[index], offset)
		index++
	}
	
	index = 0
	
	while (index < t.length) {
		const exist = map.get(t[index])
		
		if (!exist) {
			return t[index]
		}
		
		const count = exist - 1
		
		count ? map.set(t[index], count) : map.delete(t[index])
		index++
	}
};
