// https://leetcode.com/problems/palindrome-number/submissions/

function isPalindrome(x: number): boolean {
	if (x < 0) return false
	if (x > 0 && x < 10) return true
	
	const xStr = x.toString() // track string^_^
	let [start, end] = [0, xStr.length - 1] // two pointers
	
	while (start < end) {
		if (xStr[start] !== xStr[end]) return false
		start++
		end--
	}
	
	return true
};
