// https://leetcode.com/problems/maximum-depth-of-binary-tree/
import { ITreeNode } from './common/TreeNode';

// DFS
function maxDepth(root: ITreeNode | null): number {
	if (root === null) {
		return 0
	} else {
		const leftDepth = maxDepth(root.left)
		const rightDepth = maxDepth(root.right)
		
		return Math.max(leftDepth, rightDepth) + 1
	}
};

// BFS
function maxDepth(root: TreeNode | null): number {
	if (root === null) {
		return 0
	}
	
	let depth = 1
	const nodes = []
	root.left && nodes.push(root.left)
	root.right && nodes.push(root.right)
	
	while(nodes.length > 0) {
		depth++
		let size = nodes.length
		
		while(size > 0) {
			const node = nodes.shift()
			
			if (node) {
				node.left && nodes.push(node.left)
				node.right && nodes.push(node.right)
			}
			
			size--
		}
	}
	
	return depth
};
