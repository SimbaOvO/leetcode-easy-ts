// https://leetcode.com/problems/merge-two-sorted-lists/
import { IListNode, ListNode } from '../common/ListNode';

function mergeTwoLists(list1: IListNode | null, list2: IListNode | null): IListNode | null {
	let mergeListNode = new ListNode()
	let current = mergeListNode // shallow clone
	
	while(list1 && list2) {
		if (list1.val < list2.val) {
			current.next = list1
			list1 = list1.next
		} else {
			current.next = list2
			list2 = list2.next
		}
		current = current.next
	}
	
	current.next = list1 || list2
	
	return mergeListNode.next
};
