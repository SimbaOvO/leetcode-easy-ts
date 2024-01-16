// https://leetcode.cn/problems/missing-number/

function missingNumber(nums: number[]): number {
	const len = nums.length
	// 等差数列的和
	// 首项与末项的和，乘以项数除以2 => (1 + len) * len / 2
	// Math.floor 兼容nums = 0的情况
	const total = Math.floor((1 + len) * len / 2)
	const sum = nums.reduce((prev, cur) => prev + cur, 0)
	
	// 做差
	return total - sum
};
