// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
import { ITreeNode, TreeNode } from '../common/TreeNode';

function sortedArrayToBST(nums: number[]): ITreeNode | null {
	const toBST = (left: number, right: number) => {
		if (left > right) {
			return null
		}
		
		const mid = Math.floor((left + right) / 2)
		let currentBST = new TreeNode(nums[mid]);
		
		currentBST.left = toBST(left, mid - 1)
		currentBST.right = toBST(mid + 1, right)
		
		return currentBST
	}
	
	return toBST(0, nums.length - 1)
};
