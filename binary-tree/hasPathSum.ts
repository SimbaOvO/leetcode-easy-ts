// https://leetcode.com/problems/path-sum/
import { ITreeNode } from '../common/TreeNode';

// DFS
function hasPathSum(root: ITreeNode | null, targetSum: number): boolean {
	if (root === null) {
		return false
	}
	
	if (root.left === null && root.right === null) {
		return targetSum === root.val
	}
	
	return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

// BFS
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (root === null) {
		return false
	}
	
	if (root.left === null && root.right === null) {
		return targetSum === root.val
	}
	
	const nodes = [root]
	while (nodes.length > 0) {
		let size = nodes.length
		
		while(size > 0) {
			const node = nodes.shift()
			let val = node.val
			
			if (node.left === null && node.right === null && val === targetSum) {
				return true
			}
			
			if (node.left) {
				node.left.val += val
				nodes.push(node.left)
			}
			if (node.right) {
				node.right.val += val
				nodes.push(node.right)
			}
			
			size--
		}
	}
	
	
	return false
};
