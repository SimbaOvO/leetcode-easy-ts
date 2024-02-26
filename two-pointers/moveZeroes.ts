// https://leetcode.com/problems/move-zeroes/

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	const len = nums.length
	
	let [slow, fast] = [0, 0]
	let count = 0
	
	while (slow < len) {
		if (slow >= len - count) {
			nums[slow] = 0
			slow++
		} else {
			if (nums[fast] !== 0) {
				nums[slow] = nums[fast]
				slow++
			} else {
				count++
			}
		}
		
		fast++
	}
};
