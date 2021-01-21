/*
创建于 2021年1月5日 下午11:21:19
作者: sherlocked93
功能: 不同路径
地址: https://leetcode-cn.com/problems/unique-paths/

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？

示例 1：
输入：m = 3, n = 7
输出：28

示例 2：
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右

示例 3：
输入：m = 7, n = 3
输出：28

示例 4：
输入：m = 3, n = 3
输出：6

## 思路
动态规划
1. 初始条件 f[0][0]=1
2. 边界条件 m为1或n为1时,f[m][n]=1
3. 状态转移方程 f[m][n] = f[m-1][n] + f[m][n-1]

## 复杂度分析
- 时间复杂度：O(m*n)
- 空间复杂度：O(m*n)
*/


function uniquePaths(m: number, n: number): number {
    const f: number[][] = []
    for (let i = 0; i < m; i++) {
        f[i] = []
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                f[i][j] = 1
            } else {
                f[i][j] = f[i - 1][j] + f[i][j - 1]
            }
        }
    }
    return f[m - 1][n - 1]
}

console.log(
  uniquePaths(3, 7)    // 28
);
