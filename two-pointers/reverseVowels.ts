// https://leetcode.com/problems/reverse-vowels-of-a-string/

function reverseVowels(s: string): string {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
	
	let [left, right] = [0, s.length - 1]
	let str = s.slice().split('')
	
	while (left < right) {
		const leftValue = str[left]
		const rightValue = str[right]
		
		if (!vowels.includes(leftValue)) {
			left++
		} else if (!vowels.includes(rightValue)) {
			right--
		} else {
			const temp = leftValue
			str[left] = str[right]
			str[right] = temp
			
			left++
			right--
		}
	}
	
	return str.join('')
};
