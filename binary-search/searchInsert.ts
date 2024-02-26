// https://leetcode.com/problems/search-insert-position/

function searchInsert(nums: number[], target: number): number {
	const len = nums.length
	let [left, right] = [0, len - 1]
	
	while(left <= right) {
		let mid = Math.floor((left + right) / 2)
		
		if (target > nums[mid]) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	
	return left
};
