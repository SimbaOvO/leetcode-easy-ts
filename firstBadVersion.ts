// https://leetcode.com/problems/first-bad-version/

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution = function(isBadVersion: any) {
	return function(n: number): number {
		let [left, right] = [1, n]
		
		while (left <= right) {
			const mid = Math.floor((left + right) / 2)
			
			const isBad = isBadVersion(mid)
			
			if (isBad) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		}
		
		return left
	};
};
