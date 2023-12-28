// https://leetcode.com/problems/binary-tree-preorder-traversal/
import { ITreeNode } from '../common/TreeNode';

// recursion
function preorderTraversal(root: ITreeNode | null): number[] {
	if (root === null) {
		return []
	}
	
	const nodes = [root.val]
	
	const leftNodes = preorderTraversal(root.left)
	const rightNodes = preorderTraversal(root.right)
	
	return [...nodes, ...leftNodes, ...rightNodes]
};

// iterative
function preorderTraversal(root: ITreeNode | null): number[] {
	if (root === null) {
		return []
	}
	
	let node = root
	const stack = []
	const arr = []
	
	while (node || stack.length > 0) {
		while(node) {
			arr.push(node.val)
			stack.push(node)
			node = node.left
		}
		
		node = stack.pop()
		node = node.right
	}
	
	return arr
};
