// https://leetcode.cn/problems/reverse-linked-list/
import { IListNode } from '../common/ListNode';

function reverseList(head: IListNode | null): IListNode | null {
	let newList = null
	let current = head
	
	while (current) {
		const next = current.next
		current.next = newList
		newList = current
		current = next
	}
	
	return newList
};
