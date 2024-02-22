// https://leetcode.com/problems/valid-perfect-square/

function isPerfectSquare(num: number): boolean {
	let [left, right] = [0, num]
	
	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		const result = mid * mid
		
		if (result === num) {
			return true
		} else if (result > num) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	
	return false
};
