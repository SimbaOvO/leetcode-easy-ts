// https://leetcode.com/problems/repeated-substring-pattern/

function repeatedSubstringPattern(s: string): boolean {
	const len = s.length
	
	let sliceLen = 1
	
	while (sliceLen <= len / 2) {
		if (len % sliceLen === 0) {
			const baseStr = s.slice(0, sliceLen)
			
			let str = ''
			let repeatIndex = 0
			
			while (repeatIndex < len / sliceLen) {
				str += baseStr
				repeatIndex++
			}
			
			if (str === s) {
				return true
			}
		}
		
		sliceLen++
	}
	
	return false
};
