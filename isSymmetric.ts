// https://leetcode.com/problems/symmetric-tree/
import { ITreeNode } from './common/TreeNode';

function check(p: ITreeNode | null, q: ITreeNode | null): boolean {
	if (p === null && q === null) {
		return true
	} else if (p === null || q === null) {
		return false
	} else {
		return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
	}
}

function isSymmetric(root: ITreeNode | null): boolean {
	return check(root.left, root.right)
};
