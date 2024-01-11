// https://leetcode.cn/problems/summary-ranges/

function summaryRanges(nums: number[]): string[] {
	const len = nums.length
	const result: string[] = []
	
	let index = 0
	
	while (index < len) {
		const current = index
		
		while (nums[index + 1] === nums[index] + 1) {
			index++
		}
		
		const str = current === index
			? `${nums[current]}`
			: nums[current] + '->' + nums[index]
		
		result.push(str)
		index++
	}
	
	return result
};
