// https://leetcode.com/problems/intersection-of-two-linked-lists/
import { IListNode } from '../common/ListNode';

// hash map
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	const map = new Map()
	let current = headA
	let search = headB
	while (current) {
		map.set(current, current)
		current = current.next
	}
	
	while (search) {
		if (map.has(search)) {
			return map.get(search)
		}
		search = search.next
	}
	
	return null
};

// two pointers
function getIntersectionNode(headA: IListNode | null, headB: IListNode | null): IListNode | null {
	if (headA === null || headB === null) {
		return null
	}
	
	let current = headA
	let search = headB
	
	while (current !== search) {
		current = current === null ? headB : current.next
		search = search === null ? headA : search.next
	}
	
	return current
};
