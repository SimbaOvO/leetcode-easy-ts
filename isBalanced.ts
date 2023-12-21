// https://leetcode.com/problems/balanced-binary-tree/
import { ITreeNode } from './common/TreeNode';

function isBalanced(root: ITreeNode | null): boolean {
	if (root === null) {
		return true
	}
	const maxDepth = (root: ITreeNode | null) => {
		if (root === null) {
			return 0
		}
		
		const leftDepth = maxDepth(root.left)
		const rightDepth = maxDepth(root.right)
		
		if ([leftDepth, rightDepth].includes(-1)) {
			return -1
		}
		
		const diff = Math.abs(leftDepth - rightDepth)
		
		if (diff > 1) {
			return -1
		}
		
		return Math.max(leftDepth, rightDepth) + 1
	};
	
	return maxDepth(root) !== -1
};
