// https://leetcode.com/problems/intersection-of-two-arrays-ii/

function intersect(nums1: number[], nums2: number[]): number[] {
	const map = new Map()
	const arr = []
	
	let index = 0
	
	while (index < nums1.length) {
		const count = map.get(nums1[index])
		const offset = count ? count + 1 : 1
		
		map.set(nums1[index], offset)
		index++
	}
	
	index = 0
	
	while (index < nums2.length) {
		const exist = map.get(nums2[index])
		
		if (exist) {
			const count = exist - 1
			
			arr.push(nums2[index])
			count ? map.set(nums2[index], exist - 1) : map.delete(nums2[index])
		}
		
		index++
	}
	
	return arr
};
