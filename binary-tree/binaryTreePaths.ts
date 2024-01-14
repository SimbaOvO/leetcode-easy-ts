// https://leetcode.cn/problems/binary-tree-paths/
import { ITreeNode } from '../common/TreeNode';

// DFS
function binaryTreePaths(root: ITreeNode | null): string[] {
	const result: string[] = []
	
	const addPath = (node: ITreeNode | null, path: string) => {
		const currentPath = path
			? path + '->' + node.val
			: `${node.val}`
		
		if (node.left === null && node.right === null) {
			result.push(currentPath)
		} else {
			node.left && addPath(node.left, currentPath)
			node.right && addPath(node.right, currentPath)
		}
	}
	
	addPath(root, '')
	
	return result
};

// BFS
function binaryTreePaths(root: ITreeNode | null): string[] {
	const result: string[] = []
	const nodes = [root]
	const values = [`${root.val}`]
	
	while (nodes.length > 0) {
		let size = nodes.length
		
		while (size > 0) {
			const node = nodes.shift()
			const val = values.shift()
			
			if (node.left === null && node.right === null) {
				result.push(val)
			}
			
			if (node.left !== null) {
				nodes.push(node.left)
				values.push(val + '->' + node.left.val)
			}
			
			if (node.right !== null) {
				nodes.push(node.right)
				values.push(val + '->' + node.right.val)
			}
			size--
		}
	}
	
	return result
};
