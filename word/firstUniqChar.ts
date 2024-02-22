// https://leetcode.com/problems/first-unique-character-in-a-string/

function firstUniqChar(s: string): number {
	const map = new Map
	let index = 0
	
	while (index < s.length) {
		const exist = map.has(s[index])
		
		exist ? map.set(s[index], -100) : map.set(s[index], index)
		index++
	}
	
	for (let v of map.values()) {
		if (v !== -100) {
			return v
		}
	}
	
	return -1
};
