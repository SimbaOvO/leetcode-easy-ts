// https://leetcode.com/problems/same-tree/
import { ITreeNode } from './common/TreeNode';

// DFS
function isSameTree(p: ITreeNode | null, q: ITreeNode | null): boolean {
	if(p === null && q === null) {
		return true
	} else if (p === null || q === null) {
		return false
	} else if (p.val !== q.val) {
		return false
	} else {
		return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
	}
};

// BFS
function isSameTree(p: ITreeNode | null, q: ITreeNode | null): boolean {
	const nodes = [p, q]
	
	while(nodes.length > 0) {
		const firstTree = nodes.shift()
		const secondTree = nodes.shift()
		
		if (firstTree === null && secondTree === null) {
			continue
		} else if (firstTree === null || secondTree === null) {
			return false
		} else if (firstTree.val !== secondTree.val) {
			return false
		} else {
			nodes.push(firstTree.left)
			nodes.push(secondTree.left)
			
			nodes.push(firstTree.right)
			nodes.push(secondTree.right)
		}
	}
	
	return true
}
