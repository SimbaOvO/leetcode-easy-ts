// https://leetcode.cn/problems/implement-stack-using-queues/

// two queues
class MyStack {
	queue1: number[] = []
	queue2: number[] = []
	
	constructor() {
		this.queue1 = []
		this.queue2 = []
	}
	
	push(x: number): void {
		this.queue1.push(x)
	}
	
	pop(): number {
		const len = this.queue1.length - 1
		let index = 0
		
		while (index < len) {
			this.queue2.push(this.queue1[index])
			index++
		}
		
		const num = this.queue1[len]
		this.queue1 = this.queue2
		this.queue2 = []
		
		return num
		
	}
	
	top(): number {
		const len = this.queue1.length - 1
		
		return this.queue1[len]
	}
	
	empty(): boolean {
		return this.queue1.length === 0
	}
}

// one queue
class MyStack {
	queue: number[] = []
	
	constructor() {
		this.queue = []
	}
	
	push(x: number): void {
		this.queue.push(x)
	}
	
	pop(): number {
		const len = this.queue.length - 1
		let index = 0
		
		while (index < len) {
			this.queue.push(this.queue.shift()!)
			index++
		}
		
		return this.queue.shift()!
	}
	
	top(): number {
		const len = this.queue.length - 1
		
		return this.queue[len]
	}
	
	empty(): boolean {
		return this.queue.length === 0
	}
}
