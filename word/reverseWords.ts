// https://leetcode.com/problems/reverse-words-in-a-string-iii/

function reverseWords(s: string): string {
	let index = 0
	let str = ''
	
	while (index < s.length) {
		let current = ''
		
		while(s[index] !== ' ' && index < s.length) {
			current = s[index] + current
			index++
		}
		
		const gap = index === s.length
			? ''
			:' '
		str += current + gap
		
		index++
	}
	
	return str
};
