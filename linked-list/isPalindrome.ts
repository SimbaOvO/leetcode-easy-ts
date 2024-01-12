// https://leetcode.cn/problems/palindrome-linked-list/
import { IListNode } from '../common/ListNode';

function isPalindrome(head: IListNode | null): boolean {
	if (head === null) {
		return false
	}
	
	const stack = []
	let node = head
	
	while (node) {
		stack.push(node)
		node = node.next
	}
	
	let [left, right] = [0, stack.length - 1]
	
	while (left < right) {
		if (stack[left].val !== stack[right].val) {
			return false
		}
		left++
		right--
	}
	
	return true
};
