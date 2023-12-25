// https://leetcode.com/problems/symmetric-tree/
import { ITreeNode } from '../common/TreeNode';

// DFS
function isSymmetric(root: ITreeNode | null): boolean {
	const check = (p: ITreeNode | null, q: ITreeNode | null) => {
		if (p === null && q === null) {
			return true
		} else if (p === null || q === null) {
			return false
		} else {
			return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
		}
	}
	return check(root.left, root.right)
};

// BFS
function isSymmetric(root: ITreeNode | null): boolean {
	const nodes = [root.left, root.right]

	while(nodes.length > 0) {
		const leftNode = nodes.shift()
		const rightNode = nodes.shift()

		if (leftNode === null && rightNode === null) {
			continue
		} else if (leftNode === null || rightNode === null) {
			return false
		} else if (leftNode.val !== rightNode.val){
			return false
		} else {
			nodes.push(leftNode.left)
			nodes.push(rightNode.right)

			nodes.push(leftNode.right)
			nodes.push(rightNode.left)
		}
	}

	return true
};
