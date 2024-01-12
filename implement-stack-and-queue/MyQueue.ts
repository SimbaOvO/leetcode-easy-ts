// https://leetcode.cn/problems/implement-queue-using-stacks/

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
		for (let i = 1; i < this.stack1.length; i++) {
			this.stack2.push(this.stack1[i])
		}
		
		const item = this.stack1[0]
		this.stack1 = [...this.stack2]
		this.stack2 = []
		return item
	}
	
	peek(): number {
		return this.stack1[0]
	}
	
	empty(): boolean {
		return this.stack1.length === 0
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
