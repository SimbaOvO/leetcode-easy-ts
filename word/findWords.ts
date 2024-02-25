// https://leetcode.com/problems/keyboard-row/

function findWords(words: string[]): string[] {
	const rules = [
		'qwertyuiop',
		'asdfghjkl',
		'zxcvbnm'
	].map(
		(str) => str + str.toUpperCase()
	)
	
	let arr = []
	
	for (let word of words) {
		for (let rule of rules) {
			let str = ''
			
			for (let char of word) {
				if (!rule.includes(char)) {
					break
				}
				
				str += char
			}
			
			if (str === word) {
				arr.push(word)
			}
		}
	}
	
	return arr
};
