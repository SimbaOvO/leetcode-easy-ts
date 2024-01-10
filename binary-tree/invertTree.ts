// https://leetcode.cn/problems/invert-binary-tree/
import { ITreeNode } from '../common/TreeNode';

function invertTree(root: ITreeNode | null): ITreeNode | null {
	if (root === null) {
		return null
	}
	
	const left = invertTree(root.left)
	root.left = invertTree(root.right)
	root.right = left
	
	return root
};

function invertTree(root: ITreeNode | null): ITreeNode | null {
	if (root === null) {
		return null
	}
	
	const nodes = [root]
	
	while (nodes.length > 0) {
		let size = nodes.length
		
		while (size) {
			const node = nodes.pop()
			const temp = [
				node.left,
				node.right
			]
			
			node.right = temp[0]
			node.left = temp[1]
			
			node.left && nodes.push(node.left)
			node.right && nodes.push(node.right)
			
			size--
		}
	}
	
	return root
};
