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

// 方法一、使用动态规划的方法
function longestPalindrome(s: string): string {
    const f: boolean[][] = []
    for (let i = 0; i < s.length; i++) {
        f[i] = []
    }
    let maxLength = 1            // 默认最长长度为第一个字符，这也是为什么边界条件要加一
    let maxLengthIdx = [0, 1]    // 默认条件为第一个字符
    
    for (let j = 0; j < s.length; j++) {      // 状态转移的上一个状态是f[i+1][j-1]，要保证在计算i、j时f[i+1][j-1]已经被算出来
        for (let i = j; i >= 0; i--) {
            f[i][j] = s[i] === s[j] && (j - i < 3 || f[i + 1][j - 1])
            if (f[i][j]) {
                if (j - i + 1 > maxLength) {
                    maxLength = j - i + 1
                    maxLengthIdx = [i, j + 1]
                }
            }
        }
    }
    return s.slice(...maxLengthIdx)
};

console.log(
  longestPalindrome("aacabdkacaa")   // "aca"
)
