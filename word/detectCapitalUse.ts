// https://leetcode.com/problems/detect-capital/

function detectCapitalUse(word: string): boolean {
	const upper = word.toUpperCase()
	const lower = word.toLowerCase()
	
	if (word === upper || word === lower) {
		return true
	}
	
	const capital = word[0] + lower.slice(1, lower.length)
	
	return word === capital;
};
