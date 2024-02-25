// https://leetcode.com/problems/max-consecutive-ones/

function findMaxConsecutiveOnes(nums: number[]): number {
	let move = 0
	let count = 0
	
	while (move < nums.length) {
		let index = move
		
		while (nums[move] === 1) {
			move++
		}
		
		count = Math.max(count, move - index)
		move++
	}
	
	return count
};
