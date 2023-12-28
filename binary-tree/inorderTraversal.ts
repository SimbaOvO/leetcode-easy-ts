// https://leetcode.com/problems/binary-tree-inorder-traversal/
import { ITreeNode } from '../common/TreeNode';

// recursion
function inorderTraversal(root: ITreeNode | null): number[] {
	if (root === null) {
		return []
	}
	
	const left = inorderTraversal(root.left)
	const right = inorderTraversal(root.right)
	
	return [...left, root.val, ...right]
}

// iterative
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
