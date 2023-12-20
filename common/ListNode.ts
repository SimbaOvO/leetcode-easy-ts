export interface IListNode {
	val: number
	next: IListNode | null
}
/**
 * Definition for singly-linked list.
 */
export class ListNode {
	val: number
	next: IListNode | null
	constructor(val?: number, next?: IListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
}
