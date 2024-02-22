// https://leetcode.com/problems/ransom-note/

function canConstruct(ransomNote: string, magazine: string): boolean {
	const map = new Map()
	
	let index = 0
	
	while (index < ransomNote.length) {
		const count = map.get(ransomNote[index])
		const offset = count ? count + 1 : 1
		
		map.set(ransomNote[index], offset)
		index++
	}
	
	index = 0
	
	while (map.size > 0 && index < magazine.length) {
		const count = map.get(magazine[index])
		
		if (count) {
			const offset = count - 1
			
			offset ? map.set(magazine[index], offset) : map.delete(magazine[index])
		}
		
		index++
	}
	
	return map.size === 0
};
