/*
创建于 2021年1月5日 下午6:30:44
作者: sherlocked93
功能: 回文数
地址: https://leetcode-cn.com/problems/palindrome-number/

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:
输入: 121
输出: true

示例2:
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例 3:
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

## 思路
### 解法1
1. 转化为字符串、数组、反向、组合，看看与原来的数是不是一样

### 解法2
1. 使用取余的方式挨个拿出数字的一半，称以10和之前累加的数字相加
2. 考虑奇偶

## 复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1)
*/

// 解法1，使用js的字符串方法
function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {return false}
    const xStr = x.toString().split('').reverse().join('')
    return +xStr === x
}

console.log(
  isPalindrome1(12321)    // true
)


// 解法2，具有普适性的做法是判断奇偶数后将数字的一半取出，跟前半部分对比
function isPalindrome1(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {return false}
    const isOdd = !!(x & 1)
    let resultNum = 0
    while (resultNum < x) {    // 如果x比resultNum小了，那么已经多算了一个数字了
        resultNum = resultNum * 10 + x % 10
        x = ~~(x / 10)
    }
    if (!!(x & 1)) {       //  如果是奇数，把最后一个数字去掉
        resultNum = ~~(resultNum / 10)
    }
    return resultNum === x
}
