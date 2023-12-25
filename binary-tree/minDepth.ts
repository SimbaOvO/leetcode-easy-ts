// https://leetcode.com/problems/minimum-depth-of-binary-tree/
import { ITreeNode } from '../common/TreeNode';

// DFS
function minDepth(root: ITreeNode | null): number {
	if (root === null) {
		return 0
	}
	
	if (root.left === null && root.right === null) {
		return 1
	}
	
	const leftDepth = minDepth(root.left)
	const rightDepth = minDepth(root.right)
	
	// `null` means have zero
	if (root.left === null || root.right === null) {
		return leftDepth + rightDepth + 1
	}
	
	return Math.min(leftDepth, rightDepth) + 1
};

// BFS
function minDepth(root: ITreeNode | null): number {
	if (root === null) {
		return 0
	}
	
	if (root.left === null && root.right === null) {
		return 1
	}
	
	const nodes = [root]
	let depth = 0
	while(nodes.length > 0) {
		depth++
		
		let size = nodes.length
		while(size > 0) {
			const node = nodes.shift()
			if (node.left === null && node.right === null) {
				return depth
			}
			
			node.left && nodes.push(node.left)
			node.right && nodes.push(node.right)
			size--
		}
	}
};
