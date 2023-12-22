// https://leetcode.com/problems/minimum-depth-of-binary-tree/
import { ITreeNode } from './common/TreeNode';

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
