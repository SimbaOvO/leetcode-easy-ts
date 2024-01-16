// https://leetcode.cn/problems/missing-number/

function missingNumber(nums: number[]): number {
	const len = nums.length
	// Arithmetic sequence
	const total = Math.floor((len * (len + 1)) / 2)
	const sum = nums.reduce((prev, cur) => prev + cur, 0)
	
	return total - sum
};
