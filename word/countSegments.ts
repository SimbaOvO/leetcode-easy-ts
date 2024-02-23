// https://leetcode.com/problems/number-of-segments-in-a-string/

function countSegments(s: string): number {
	let index = 0
	let count = 0
	
	while (index < s.length) {
		let str = ''
		while (index < s.length && s[index] !== ' ') {
			str += s[index]
			index++
		}
		str && count++
		index++
	}
	
	return count
};
