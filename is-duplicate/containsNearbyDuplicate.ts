// https://leetcode.cn/problems/contains-duplicate-ii/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const map = new Map()
	
	let len = 0
	
	while (len < nums.length) {
		const current = map.get(nums[len])
		if (current !== undefined && (len - current <= k)) {
			return true
		}
		
		map.set(nums[len], len)
		len++
	}
	
	return false
};
