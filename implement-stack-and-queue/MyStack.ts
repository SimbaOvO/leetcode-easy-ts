// https://leetcode.com/problems/implement-stack-using-queues/

// two queues
class MyStack {
	private queue1: number[] = []
	private queue2: number[] = []
	
	push(x: number): void {
		this.queue2.push(x)
		
		while (this.queue1.length) {
			this.queue2.push(this.queue1.shift())
		}
		
		[this.queue1, this.queue2] = [this.queue2, this.queue1]
	}
	
	pop(): number {
		return this.queue1.shift()
	}
	
	top(): number {
		return this.queue1[0]
	}
	
	empty(): boolean {
		return this.queue1.length === 0
	}
}

// one queue
class MyStack {
	private queue1: number[] = []
	
	push(x: number): void {
		this.queue1.push(x)
		
		const beforeLast = this.queue1.length - 1
		let index = 0
		
		while (index < beforeLast) {
			this.queue1.push(this.queue1.shift())
			index++
		}
	}
	
	pop(): number {
		return this.queue1.shift()
	}
	
	top(): number {
		return this.queue1[0]
	}
	
	empty(): boolean {
		return this.queue1.length === 0
	}
}
