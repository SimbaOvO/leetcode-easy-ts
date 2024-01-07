// https://leetcode.cn/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
	const set = new Set()
	
	let len = 0
	
	while (len < nums.length) {
		if (set.has(nums[len])) {
			return true
		}
		
		set.add(nums[len])
		len++
	}
	
	return false
};
