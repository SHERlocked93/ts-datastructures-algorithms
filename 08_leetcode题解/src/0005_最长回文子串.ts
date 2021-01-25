/*
创建于 2021年1月5日 下午11:21:19
作者: sherlocked93
功能: 最长回文子串
地址: https://leetcode-cn.com/problems/longest-palindromic-substring/

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。

示例 2：
输入: "cbbd"
输出: "bb"

## 思路
动态规划
1. 初始条件 f[0][0]=true
2. 边界条件 j-1-(i+1)+1<2 ,由于1-3的字符长度是3-1+1，为什么要加一是因为1-1字符长度不是0而是1，这里要注意一下
3. 状态转移方程 f[i][j] = (s[i]===s[j]) AND f[i+1][j-1]

## 复杂度分析
- 时间复杂度：O(n^2)
- 空间复杂度：O(n^2)
*/


function longestPalindrome1(s: string): string {
    if (!s.length) {return ''}
    const f: boolean[][] = []
    let maxLength = 1    // 最长长度
    let maxLeft = 0      // 最长长度时的idx
    for (let i = s.length - 1; i >= 0; i--) {
        f[i] = []
        for (let j = i; j < s.length; j++) {
            if (i === j) {
                f[i][j] = true
            } else if (s[i] === s[j]) {
                f[i][j] = (j - i < 3) || f[i + 1][j - 1]
                if (f[i][j] && (j - i + 1 > maxLength)) {
                    maxLength = j - i + 1
                    maxLeft = i
                }
            } else f[i][j] = false
        }
    }
    return s.slice(maxLeft, maxLeft + maxLength)
};

console.log(
  longestPalindrome1("cbbd")   // "aca"
)
