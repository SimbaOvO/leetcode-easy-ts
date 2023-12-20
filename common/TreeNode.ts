export interface ITreeNode {
	val: number
	left: ITreeNode | null
	right: ITreeNode | null
}

/**
 * Definition for a binary tree node.
 */
export class TreeNode {
	val: number
	left: ITreeNode | null
	right: ITreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.left = (left===undefined ? null : left)
		this.right = (right===undefined ? null : right)
	}
}
