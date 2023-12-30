function convertToTitle(columnNumber: number): string {
	const mod = 26;
	let str = "";
	
	// ...x3 * 16^2 + x2 * 16^1 + x1 * 16^0
	while (columnNumber > 0) {
		const charIndex = (columnNumber - 1) % mod;
		str = String.fromCharCode("A".charCodeAt(0) + charIndex) + str;
		columnNumber = Math.floor((columnNumber - 1) / mod);
	}
	
	return str;
};
