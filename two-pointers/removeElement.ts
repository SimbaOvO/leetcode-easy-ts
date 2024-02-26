// https://leetcode.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
	if (nums.length === 0) return 0
	
	let [start, moving] = [0, 0] // two pointers
	
	while(moving < nums.length) {
		if (nums[moving] !== val) {
			nums[start] = nums[moving]
			start++
		}
		moving++
	}
	
	return start
};
