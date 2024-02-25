// https://leetcode.com/problems/teemo-attacking/

function findPoisonedDuration(timeSeries: number[], duration: number): number {
	const len = timeSeries.length
	
	let [slow, fast] = [0, 1]
	let count = 0
	
	while (fast < len) {
		count += Math.min(
			timeSeries[fast] - timeSeries[slow],
			duration
		)
		
		slow++
		fast++
	}
	
	return count + duration
};
