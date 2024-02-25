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
import { ITreeNode } from '../common/TreeNode';

function findMode(root: ITreeNode): number[] {
	const map = new Map()
	const arr = []
	let max = 0
	
	const stack = [root]
	
	while (stack.length > 0) {
		const node = stack.pop()
		let current = map.has(node.val)
			? map.get(node.val) + 1
			: 1
		
		max = Math.max(max, current)
		
		map.set(node.val, current)
		node.left && stack.push(node.left)
		node.right && stack.push(node.right)
	}
	
	for (let [k, v] of map) {
		if (v === max) {
			arr.push(k)
		}
	}
	
	return arr
};
