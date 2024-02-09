// https://leetcode.com/problems/implement-queue-using-stacks/

class MyQueue {
	stack1: number[]
	stack2: number[]
	
	constructor() {
		this.stack1 = []
		this.stack2 = []
	}
	
	push(x: number): void {
		this.stack1.push(x)
	}
	
	pop(): number {
		if (this.stack2.length === 0) {
			while (this.stack1.length) {
				this.stack2.push(this.stack1.pop())
			}
		}
		
		return this.stack2.pop()
	}
	
	peek(): number {
		if (this.stack2.length === 0) {
			while (this.stack1.length) {
				this.stack2.push(this.stack1.pop())
			}
		}
		
		const temp = this.stack2.pop()
		this.stack2.push(temp)
		return temp
	}
	
	empty(): boolean {
		return this.stack1.length === 0 && this.stack2.length === 0
	}
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
