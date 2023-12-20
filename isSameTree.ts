// https://leetcode.com/problems/same-tree/
import { ITreeNode } from './common/TreeNode';

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
