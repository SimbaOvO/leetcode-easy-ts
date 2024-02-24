// https://leetcode.com/problems/assign-cookies/

function findContentChildren(g: number[], s: number[]): number {
	g.sort(
		(a, b) => a - b
	)
	s.sort(
		(a, b) => a - b
	)
	
	let [gIndex, sIndex] = [0, 0]
	
	while (gIndex < g.length && sIndex < s.length) {
		if (s[sIndex] >= g[gIndex]) {
			gIndex++
		}
		
		sIndex++
	}
	
	return gIndex
};
