// https://leetcode.com/problems/valid-parentheses/

const dict: Record<string, string> = {
	')': '(',
	'}' : '{',
	']': '['
}

function isValid(s: string): boolean {
	if (s.length % 2) return false
	
	const stack: string[] = []
	for (let i = 0; i < s.length; i++) {
		const last = stack[stack.length - 1]
		const current = dict[s[i]]
		if (current) {
			if (last) {
				if (dict[s[i]] !== last) {
					// stack = ['('], s[i] = '}' | ']'
					return false
				} else {
					stack.pop()
				}
			} else {
				// stack = [], s[i] = ')' | '}' | ']'
				return false
			}
		} else {
			stack.push(s[i])
		}
	}
	
	return stack.length === 0
};
