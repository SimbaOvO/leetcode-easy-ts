// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
	let [basePrice, profit] = [
		prices[0],
		0
	]
	
	for (let i = 1; i < prices.length; i++) {
		basePrice = Math.min(basePrice, prices[i])
		profit = Math.max(profit, prices[i] - basePrice)
	}
	
	return profit
};
