// https://leetcode.com/problems/guess-number-higher-or-lower/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
function guessNumber(n: number): number {
	let [left, right] = [0, n]
	
	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		const isRight = guess(mid)
		
		switch (isRight){
			case -1:
				right = mid - 1
				break;
			case 1:
				left = mid + 1
				break;
			case 0:
				return mid
			default:
				break;
		}
		
	}
};
