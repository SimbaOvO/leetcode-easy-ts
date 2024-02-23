// https://leetcode.com/problems/sum-of-left-leaves/

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

function sumOfLeftLeaves(root: ITreeNode): number {
	const stack: Array<{ node: ITreeNode, isLeft: boolean }>
		= [{ node: root, isLeft: false }]
	
	let sum = 0
	
	while (stack.length > 0) {
		const { node, isLeft } = stack.pop()
		if (node.left === null && node.right === null && isLeft) {
			sum += node.val
		} else {
			node.left && stack.push({ node: node.left, isLeft: true })
			node.right && stack.push({ node: node.right, isLeft: false })
		}
	}
	
	return sum
};
