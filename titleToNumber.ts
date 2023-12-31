// https://leetcode.com/problems/excel-sheet-column-number/

function titleToNumber(columnTitle: string): number {
	const base = 26
	const startCharCode = 65
	
	let [start, end] = [0, columnTitle.length - 1]
	let sum = 0
	
	// ...x3 * 26^2 + x2 * 26^1 + x1 * 26^0 = columnNumber
	while(end >= 0) {
		const currentCode = columnTitle[end].charCodeAt(0) + 1 - startCharCode
		sum += currentCode * Math.pow(base, start)
		start++
		end--
	}
	
	return sum
};
