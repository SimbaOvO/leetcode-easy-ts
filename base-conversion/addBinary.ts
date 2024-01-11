// https://leetcode.com/problems/plus-one/

function addBinary(a: string, b: string): string {
	let [aLastIndex, bLastIndex] = [a.length - 1, b.length - 1]
	let flag = false // flag: next element needs to plus one?
	let str = ''
	
	// The longer string take priority
	while(aLastIndex >= 0 || bLastIndex >= 0) {
		// `a.length !== b.length` => fill `0`
		const currentA = aLastIndex >= 0 ? +a[aLastIndex] : 0
		const currentB = bLastIndex >= 0 ? +b[bLastIndex] : 0
		
		// if `flag = true`, we need to plus one to the current value
		const current = currentA + currentB + +flag
		// parse binary
		const base = current % 2
		
		flag = current >= 2
		str = `${base}` + str
		
		// push forward
		aLastIndex--
		bLastIndex--
	}
	
	// out of loop but `flag = true` is means `str` needs to fill `1` at first
	if (flag) {
		str = '1' + str
	}
	
	return str
};
