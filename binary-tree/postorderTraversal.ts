// https://leetcode.com/problems/binary-tree-postorder-traversal/
import { ITreeNode } from '../common/TreeNode';

// recursion
function postorderTraversal(root: ITreeNode | null): number[] {
	if (root === null) {
		return []
	}
	
	const left = postorderTraversal(root.left)
	const right = postorderTraversal(root.right)
	
	return [...left, ...right, root.val]
};
