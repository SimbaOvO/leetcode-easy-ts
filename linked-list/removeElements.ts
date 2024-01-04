// https://leetcode.cn/problems/remove-linked-list-elements/
import { IListNode, ListNode } from '../common/ListNode';

function removeElements(head: IListNode | null, val: number): IListNode | null {
	const tree = new ListNode(-1, head)
	let current = tree
	
	while (current.next) {
		if (current.next.val === val) {
			current.next = current.next.next
		} else {
			current = current.next
		}
	}
	
	return tree.next
};
