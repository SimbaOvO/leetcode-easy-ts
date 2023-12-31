// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
	const map = new Map()
	
	let [index, prev, count] = [
		1,
		nums[0],
		1
	]
	// 1 <= nums.length <= 5 * 10^4
	map.set(prev, count)
	
	while (index < nums.length) {
		const currentNum = nums[index]
		
		if (map.has(currentNum)) {
			const currentCount = map.get(currentNum) + 1
			if (currentCount > count) {
				prev = currentNum
				count = currentCount
			}
			map.set(currentNum, currentCount)
		} else {
			map.set(currentNum, 1)
		}
		
		index++
	}
	
	return prev
};
