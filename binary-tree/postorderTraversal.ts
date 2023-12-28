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

// iterative
function postorderTraversal(root: TreeNode | null): number[] {
	if (root === null) {
		return []
	}
	
	let node = root
	const stack = []
	const arr = []
	
	while (root || stack.length > 0) {
		while (root) {
			stack.push(root)
			root = root.left
		}
		
		const last = stack.pop()
		
		if (last.right === null || last.right === node) {
			arr.push(last.val)
			node = last
		} else {
			stack.push(last)
			root = last.right
		}
	}
	
	return arr
};
