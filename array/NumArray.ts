// https://leetcode.com/problems/range-sum-query-immutable/

class NumArray {
	nums: number[] = []
	calcNums: number[] = []
	
	constructor(nums: number[]) {
		this.nums = nums
		const calcNums = [0]
		let index = 0
		
		while (index < nums.length) {
			calcNums[index + 1] = calcNums[index] + nums[index]
			
			index++
		}
		
		this.calcNums = calcNums
	}
	
	sumRange(left: number, right: number): number {
		return this.calcNums[right + 1] - this.calcNums[left]
	}
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
