/*
创建于 2021年1月11日 下午8:13:41
作者: sherlocked93
功能: 整数反转
地址: https://leetcode-cn.com/problems/reverse-integer/

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2**31, 2**31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

示例 1：
输入：x = 123
输出：321

示例 2：
输入：x = -123
输出：-321

示例 3：
输入：x = 120
输出：21


示例 4：
输入：x = 0
输出：0

## 思路
1. 一个for循环，利用取与和除来按位获取数
注意最后要对比一下合理的数值范围，虽然js里面的数没有多少位的说法

暴力解法可以使用字符串的形式来反转字符串

## 复杂度分析
- 时间复杂度：O(n) 一层循环
- 空间复杂度：O(1)
*/


function reverse(x: number): number {
    let res = 0
    const signFlag = x >= 0
    let num = signFlag ? x : -x
    while (num > 0) {
        res = res * 10 + num % 10
        num = ~~(num / 10)
    }
    res = signFlag ? res : -res
    if (res < -(2 ** 31) || res > 2 ** 31 - 1) {return 0}
    return res
};

console.log(
  reverse(-1230)    // -321
)

