// https://leetcode.com/problems/excel-sheet-column-title/

function convertToTitle(columnNumber: number): string {
	const mod = 26;
	let str = "";
	
	// ...x3 * 26^2 + x2 * 26^1 + x1 * 26^0 = columnNumber
	while (columnNumber > 0) {
		const charIndex = (columnNumber - 1) % mod;
		str = String.fromCharCode("A".charCodeAt(0) + charIndex) + str;
		columnNumber = Math.floor((columnNumber - 1) / mod);
	}
	
	return str;
};
