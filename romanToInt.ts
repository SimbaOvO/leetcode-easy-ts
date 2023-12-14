const romanDict = {
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000
} // Dict Yes!

function romanToInt(s: string): number {
	let sum = 0
	
	for (let i = 0; i < s.length; i++) {
		const current = romanDict[s[i]]
		// `i < s.length - 1` is the last index must add
		if (i < s.length -1 && current < romanDict[s[i+1]]) {
			sum -= current
		} else {
			sum += current
		}
	}
	
	return sum
};
