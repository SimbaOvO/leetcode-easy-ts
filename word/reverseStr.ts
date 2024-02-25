// https://leetcode.com/problems/reverse-string-ii/

function reverseStr(s: string, k: number): string {
	const arr = s.split('')
	const len = arr.length
	
	let index = 0
	
	while (index < len) {
		let [left, right] = [index, index + k - 1]
		
		while (left < right) {
			let temp = arr[left]
			
			arr[left] = arr[right]
			arr[right] = temp
			
			left++;
			right--;
		}
		
		index += 2 * k
	}
	
	return arr.join('')
};
