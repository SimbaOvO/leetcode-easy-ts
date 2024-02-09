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
		
		let index = 1
		
		while (index < this.queue1.length) {
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
