// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
	const set = new Set()
	
	for (let i = 0; i < nums.length; i++) {
		if (!set.delete(nums[i])) {
			set.add(nums[i])
		}
	}
	
	return set.values().next().value
};
