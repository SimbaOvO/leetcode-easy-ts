// https://leetcode.com/problems/relative-ranks/

function findRelativeRanks(score: number[]): string[] {
	const rewards = {
		1: 'Gold Medal',
		2: 'Silver Medal',
		3: 'Bronze Medal'
	}
	
	const map = new Map()
	const arr = score.slice()
	
	arr
		.sort(
			(a, b) => b - a
		)
		.forEach(
			(num, index) => {
				map.set(num, rewards[index + 1] || `${index + 1}`)
			}
		)
	
	return score.map(
		(num) => map.get(num)
	)
};
