/*
创建于 2021年1月13日 下午3:56:09
作者: sherlocked93
功能: 第N个泰波那契数
标签: 动态规划
地址: https://leetcode-cn.com/problems/n-th-tribonacci-number

泰波那契序列Tn定义如下：
T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0的条件下 Tn+3 = Tn + Tn+1 + Tn+2
给你整数n，请返回第 n 个泰波那契数Tn 的值。

示例 1：
输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

示例 2：
输入：n = 25
输出：1389537

提示：
0 <= n <= 37
答案保证是一个 32 位整数，即answer <= 2^31 - 1。

## 思路
1. 递归的思想，注意边界条件，但是ts使用递归居然超过了时间限制！
或者使用动态规划


## 复杂度分析
- 时间复杂度：O()
- 空间复杂度：O()
*/


function tribonacci(n: number): number {
    if (n === 0) {return 0}
    if (n === 1) {return 1}
    if (n === 2) {return 1}
    const triArr = [0, 1, 1]
    for (let i = 3; i < n + 1; i++) {
        triArr[i] = triArr[i - 1] + triArr[i - 2] + triArr[i - 3]
    }
    return triArr[n]
};

console.log(
  tribonacci(25)     // 1389537
);
