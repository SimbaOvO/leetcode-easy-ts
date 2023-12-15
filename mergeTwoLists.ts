// https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }

interface IListNode {
	val: number
	next: IListNode | null
}

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
