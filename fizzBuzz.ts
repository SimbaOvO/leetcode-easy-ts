// https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n: number): string[] {
	let i = 1
	let arr = []
	
	while (i <= n) {
		let result: string = ''
		
		if (i % 5 === 0 && i % 3 === 0) {
			result = 'FizzBuzz'
		} else if (i % 5 === 0) {
			result = 'Buzz'
		} else if (i % 3 === 0) {
			result = 'Fizz'
		} else {
			result = i.toString()
		}
		
		arr.push(result)
		i++
	}
	
	return arr
};
