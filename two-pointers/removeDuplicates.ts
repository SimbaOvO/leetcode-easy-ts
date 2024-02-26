// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
	const len = nums.length
	// condition: 1 <= nums.length <= 3 * 10^4
	// index = 0 must exist. so startIndex will be set `1`
	let [start, moving] = [1, 1] // two pointers
	
	while(moving < len) {
		if (nums[moving] === nums[start - 1]) {
			moving++
		} else {
			nums[start] = nums[moving]
			start++
		}
	}
	
	return start
};
