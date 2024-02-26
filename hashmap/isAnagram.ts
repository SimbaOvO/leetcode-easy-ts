function isAnagram(s: string, t: string): boolean {
	const map = new Map()
	
	let len = 0
	
	while (len < s.length) {
		let current = map.get(s[len])
		
		if (current === undefined) {
			current = 0
		}
		
		map.set(s[len], current + 1)
		len++
	}
	
	len = 0
	
	while (len < t.length) {
		let current = map.get(t[len])
		
		if (current === undefined) {
			return false
		}
		
		current -= 1
		
		if (current === 0) {
			map.delete(t[len])
		} else {
			map.set(t[len], current)
		}
		
		len++
	}
	
	return map.size === 0
};
