// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
	const lowercase = s.toLowerCase().replace(/[\W_]/g, '')
	let [left, right] = [0, lowercase.length - 1]
	
	while(left <= right) {
		if (lowercase[left] === ' ') {
			left++
			continue
		}
		if (lowercase[right] === ' ') {
			right--
			continue
		}
		if (lowercase[left] !== lowercase[right]) {
			return false
		}
		left++
		right--
	}
	
	return true
};
