/*
创建于 2021-01-4 21:5:5
作者: sherlocked93
功能: 零钱兑换
地址: https://leetcode-cn.com/problems/coin-change/

给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
你可以认为每种硬币的数量是无限的。

示例 1：
输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1

示例 2：
输入：coins = [2], amount = 3
输出：-1

示例 3：
输入：coins = [1], amount = 0
输出：0

示例 4：
输入：coins = [1], amount = 1
输出：1

示例 5：
输入：coins = [1], amount = 2
输出：2


## 思路
使用动态规划
1. 状态转移方程 f(n) = min{f(n-c[0])+1, f(n-c[1])+1, ..., f(n-c[length-1])+1}
2. 初始条件f(0)=0

## 复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n)
*/

function coinChange(coins: number[], amount: number): number {
    const f = [0]   // 初始条件
    for (let x = 1; x <= amount; x++) {
        f[x] = Infinity
        for (let j = 0; j < coins.length; j++) {
            if (x >= coins[j]) {
                f[x] = Math.min(f[x - coins[j]] + 1, f[x])
            }
        }
    }
    
    return f[amount] === Infinity ? -1 : f[amount]
}

console.log(
  coinChange([2, 5, 7], 27)    // 5
)
