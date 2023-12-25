// https://leetcode.com/problems/binary-tree-inorder-traversal/
import { ITreeNode } from '../common/TreeNode';

function inorderTraversal(root: ITreeNode | null): number[] {
	const result: number[] = []
	const nodes: Array<ITreeNode | null> = []
	
	while (root || nodes.length) {
		while(root) {
			nodes.push(root)
			root = root.left
		}
		root = nodes.pop()
		result.push(root.val)
		root = root.right
	}
	
	return result
};
