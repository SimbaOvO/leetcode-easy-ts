// https://leetcode.com/problems/merge-sorted-array/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	// if (n === 0) return
	// if (m === 0) {
	// 	nums1 = nums2 // not working 😅
	// 	return
	// }
	
	let [firstIndex, secondIndex, index] = [m - 1, n - 1, m + n - 1]
	
	while(secondIndex >= 0) {
		if (firstIndex < 0 || nums1[firstIndex] < nums2[secondIndex]) {
			nums1[index] = nums2[secondIndex]
			secondIndex--
		} else {
			nums1[index] = nums1[firstIndex]
			firstIndex--
		}
		index--
	}
};
