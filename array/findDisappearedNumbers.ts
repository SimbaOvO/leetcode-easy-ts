// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

function findDisappearedNumbers(nums: number[]): number[] {
	const set = new Set(nums)
	const len = nums.length
	
	let arr = []
	let index = 1
	
	while (index <= len && arr.length + set.size < len) {
		if (!set.has(index)) {
			arr.push(index)
		}
		
		index++
	}
	
	return arr
};
