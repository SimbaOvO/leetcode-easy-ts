// https://leetcode.com/problems/next-greater-element-i/

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	const map = new Map()
	
	let [slow, fast] = [0, 1]
	
	while (slow < nums2.length) {
		if (fast === nums2.length) {
			map.set(nums2[slow], -1)
			slow++
			fast = slow + 1
		} else if (nums2[slow] > nums2[fast]) {
			fast++
		} else if (nums2[slow] < nums2[fast]) {
			map.set(nums2[slow], nums2[fast])
			slow++
			fast = slow + 1
		}
	}
	
	
	return nums1.map(
		(num) => map.get(num)
	)
};
