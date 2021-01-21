/*
创建于 2021年1月13日 下午4:14:21
作者: sherlocked93
功能: Pow(x,n)
标签: 递归
地址: https://leetcode-cn.com/problems/powx-n

实现pow(x, n)，即计算 x 的 n 次幂函数。

示例 1:
输入: 2.00000, 10
输出: 1024.00000

示例2:
输入: 2.10000, 3
输出: 9.26100

示例3:
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25

说明:
-100.0 <x< 100.0
n是 32 位有符号整数，其数值范围是[−2**31,2**31− 1] 。

## 思路
1. 递归的思想，注意边界条件，使用分治的思想
千万注意 n>>1 和 ~~(n/2) 在n为负数的时候不相等，~~(-3.3/2)结果为-1，-3.3>>1结果为-2，使用后者不保险

## 复杂度分析
- 时间复杂度：O(logn)
- 空间复杂度：O(logn)
*/


function myPow(x: number, n: number): number {
    if (x === 0) {return 0}
    if (n === 0) {return 1}
    const signFlag = n > 0
    n = Math.abs(n)
    const mid = myPow(x, ~~(n / 2))
    let result = n & 1
      ? mid * mid * x
      : mid * mid
    return signFlag ? result : 1 / result
};

console.log(
  myPow(2, -2147483647)     // 0
);
