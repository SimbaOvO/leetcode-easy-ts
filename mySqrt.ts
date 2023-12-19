// https://leetcode.com/problems/sqrtx/

function mySqrt(x: number): number {
	if (x < 2) return x
	
	let [left, right] = [0, x]
	
	while(left <= right) {
		const mid = Math.floor((left + right) / 2)
		const result = mid * mid
		
		if (result > x) {
			right = mid - 1
		} else if (result < x) {
			left = mid + 1
		} else {
			return mid
		}
	}
	
	return right
};
