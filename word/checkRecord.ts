// https://leetcode.com/problems/student-attendance-record-i/

function checkRecord(s: string): boolean {
	let index = 0
	let absentCount = 0
	let [flag, lateCount] = [false, 0]
	
	while (index < s.length) {
		switch (s[index]) {
			case 'A':
				flag = false
				absentCount++
				break
			case 'L':
				lateCount = flag
					? lateCount + 1
					: 1
				flag = true
				break
			default:
				flag = false
				break
		}
		
		if (absentCount >= 2 || lateCount >= 3) {
			return false
		}
		
		index++
	}
	
	return true
};
