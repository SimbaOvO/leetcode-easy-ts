// https://leetcode.cn/problems/count-complete-tree-nodes/

import { ITreeNode } from '../common/TreeNode';

function countNodes(root: ITreeNode | null): number {
	if (root === null) {
		return 0
	}
	
	let [left, right] = [0, 0]
	let node = root
	
	while (node) {
		left++
		node = node.left
	}
	
	node = root
	
	while (node) {
		right++
		node = node.right
	}
	
	if (left === right) {
		return Math.pow(2, left) - 1
	}
	
	return 1 + countNodes(root.left) + countNodes(root.right)
};
