// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

function strStr(haystack: string, needle: string): number {
	// It's so sweet^^
	// return haystack.indexOf(needle)
	const [baseStrLen, searchStrLen] = [
		haystack.length,
		needle.length
	]
	
	if (searchStrLen > baseStrLen) return -1
	let [current, moving] = [0, 0] // two pointers
	
	// loop will take a lot of time. only one condition will be failed —— Exceeded the time limit
	// `current < searchStrLen`: if match the `needle` and `current` is more than `searchStrLen`, out of loop
	// `moving <= baseStrLen - searchStrLen`:
	//    1. `moving` will keep increasing. so it will increase to `baseStrLen`. condition is `moving < baseStrLen`
	//    2. but we don't need to increase `moving` to `baseStrLen`. so we can break out of the loop earlier.
	//       if `moving + searchStrLen > baseStrLen`, it means we won't find the `needle` because it will be out of range
	//       so `moving + searchStrLen > baseStrLen` -> condition is `moving <= baseStrLen - searchStrLen`
	while(current < searchStrLen && moving <= baseStrLen - searchStrLen) {
		if (haystack[moving + current] === needle[current]) {
			current++
		} else {
			moving++
			current = 0
		}
	}
	
	return current === searchStrLen
		? moving
		: -1
};
