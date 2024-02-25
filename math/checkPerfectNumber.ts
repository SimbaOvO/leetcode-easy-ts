// https://leetcode.com/problems/perfect-number/

function checkPerfectNumber(num: number): boolean {
	let count = 0
	let n = 1
	
	while (n <= num / 2) {
		if (num % n === 0) {
			count += n
		}
		n++
	}
	
	return count === num
};
