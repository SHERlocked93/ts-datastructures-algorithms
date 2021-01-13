/*
创建于 2021-01-4 21:5:5
作者: sherlocked93
功能: 买卖股票的最佳时机
标签: 贪心算法
地址: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

例1: 输入 prices=[7,1,5,3,6,4] 返回 7
例2: 输入 prices=[1,2,3,4,5] 返回 4

## 思路
相邻日的差值就是前一天买后一天卖所得收入，如果将连续正值相加，就是连续日的第一日买入最后一日卖出所获得的利润
1. 从前往后算出相邻元素的差值
2. 将差值的正值累加

## 复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1)
*/


function maxProfit(prices: number[]): number {
    let result: number = 0
    for (let i = 0; i < prices.length - 1; i++) {
        const diffVal = prices[i + 1] - prices[i]
        if (diffVal > 0) {
            result += diffVal
        }
    }
    return result
};

console.log(
  maxProfit([1, 2, 3, 4, 5])   // 4
);
