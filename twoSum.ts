// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
	const numsMap = new Map() // memorize
	
	for (let i = 0; i < nums.length; i++) {
		const offset = target - nums[i]
		
		if (numsMap.has(offset)) {
			return [numsMap.get(offset), i]
		} else {
			numsMap.set(nums[i], i)
		}
	}
	
	return []
}
