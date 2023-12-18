// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
	let lastIndex = s.length - 1
	
	while(s[lastIndex] === " ") {
		lastIndex--
	}
	
	let len = 0
	
	while (lastIndex >= 0 && s[lastIndex] !== " ") {
		len++
		lastIndex--
	}
	
	return len
};
