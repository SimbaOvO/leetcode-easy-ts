// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
	const map = new Map()
	
	for (let i = 0; i < nums.length; i++) {
		if (!map.delete(nums[i])) {
			map.set(nums[i], nums[i])
		}
	}
	
	return map.values().next().value
};
