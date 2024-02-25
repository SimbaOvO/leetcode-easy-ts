// https://leetcode.com/problems/fibonacci-number/

function fib(n: number): number {
	if (n <= 1) {
		return n
	}
	
	let [left, right ,sum] = [0, 1, 0]
	let index = 2
	
	while (index <= n) {
		sum = left + right
		left = right
		right = sum
		
		index++
	}
	
	return sum
};
