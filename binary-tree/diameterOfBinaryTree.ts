// https://leetcode.com/problems/diameter-of-binary-tree/

import { ITreeNode } from '../common/TreeNode';

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function diameterOfBinaryTree(root: ITreeNode | null): number {
	let max = 0
	
	const maxDepth = (node: ITreeNode | null) => {
		if (node === null) {
			return 0
		}
		
		const left = maxDepth(node.left)
		const right = maxDepth(node.right)
		
		max = Math.max(max, left + right)
		
		return Math.max(left, right) + 1
	}
	
	maxDepth(root)
	
	return max
};
