// https://leetcode.com/problems/minimum-absolute-difference-in-bst/

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

function getMinimumDifference(root: ITreeNode | null): number {
	const stack = []
	
	let node = root
	let [min, prev] = [Infinity, -1]
	
	while (node || stack.length > 0) {
		while (node) {
			stack.push(node)
			node = node.left
		}
		
		const current = stack.pop()
		
		if (prev !== -1) {
			min = Math.min(min, current.val - prev)
		}
		
		prev = current.val
		node = current.right
	}
	
	return min
};
