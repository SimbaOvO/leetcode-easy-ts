// https://leetcode.com/problems/intersection-of-two-arrays/

function intersection(nums1: number[], nums2: number[]): number[] {
	const left = new Set(nums1)
	const right = new Set(nums2)
	const arr = []
	
	for (let i of left) {
		if (right.has(i)) {
			arr.push(i)
		}
	}
	
	return arr
};
