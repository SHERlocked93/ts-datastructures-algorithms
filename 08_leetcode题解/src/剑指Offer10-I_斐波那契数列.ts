/*
创建于 2021年1月21日 下午7:49:46
作者: sherlocked93
功能: 斐波那契数列
地址: https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/

写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：
F(0) = 0, F(1)= 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：
输入：n = 2
输出：1

示例 2：
输入：n = 5
输出：5

提示：0 <= n <= 100

## 思路
要用动态规划，不能使用迭代，否则迭代的深度太深
1. 斐波那契的条件已经把边界条件和转移方程写好了，直接列数组算即可
这样的空间复杂度为 O(n) 因为要有个数组来保存结果
可以不使用数组，因为下一步的计算只使用到了两个数字，说一使用两个变量来保存前一个和前前一个变量即可
这样做的空间复杂度为1，因为只使用了有限个变量
## 复杂度分析
- 时间复杂度：O(n) 一层循环
- 空间复杂度：O(n) 需要一个数组来保存
*/

// 方法一，使用数组来保存结果
function fib(n: number): number {
    if (n <= 1) return n
    n = n % (1000000007)
    const f = [0, 1]
    for (let i = 2; i < n + 1; i++) {
        f[i] = (f[i - 1] + f[i - 2]) % (1000000007)
    }
    return f[n]
};

// 方法二，使用变量保存结果，减少了空间复杂度
function fib1(n: number): number {
    if (n <= 1) return n
    n = n % (1000000007)
    let left = 0
    let right = 1
    let i = 1
    let res = 0
    while (i++ < n) {
        res = (left + right) % 1000000007
        left = right
        right = res
    }
    return res
};

console.log(
  fib1(45)    // 5
)
