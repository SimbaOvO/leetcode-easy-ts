import { IListNode } from '../common/ListNode';

function hasCycle(head: IListNode | null): boolean {
	const set = new Set()
	
	while (head) {
		if (set.has(head)) {
			return true
		}
		
		set.add(head)
		head = head.next
	}
	
	return false
};
