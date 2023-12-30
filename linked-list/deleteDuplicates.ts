// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
import { IListNode } from '../common/ListNode';

function deleteDuplicates(head: IListNode | null): IListNode | null {
	let current = head
	
	while(current && current.next) {
		if (current.val === current.next.val) {
			current.next = current.next.next
		} else {
			current = current.next
		}
	}
	
	return head
};
