// https://leetcode.com/problems/happy-number/

function isHappy(n: number): boolean {
	const computed = (num: number) => {
		let total = 0
		
		while (num > 0) {
			let rest = num % 10
			num = Math.floor(num / 10)
			total += Math.pow(rest, 2)
		}
		
		return total
	}
	
	let [slow, fast] = [
		n,
		computed(n)
	]
	
	while (fast !== 1 && slow !== fast) {
		slow = computed(slow)
		fast = computed(computed(fast))
	}
	
	return fast === 1
};
