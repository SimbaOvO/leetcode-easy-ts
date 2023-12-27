import { ITreeNode } from '../common/TreeNode';

// DFS
function preorderTraversal(root: ITreeNode | null): number[] {
	if (root === null) {
		return []
	}
	
	const nodes = [root.val]
	
	const leftNodes = preorderTraversal(root.left)
	const rightNodes = preorderTraversal(root.right)
	
	return [...nodes, ...leftNodes, ...rightNodes]
};
