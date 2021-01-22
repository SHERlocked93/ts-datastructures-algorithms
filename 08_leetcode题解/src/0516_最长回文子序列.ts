/*
创建于 2021年1月22日 上午11:07:11
作者: sherlocked93
功能: 最长回文子序列
地址: https://leetcode-cn.com/problems/longest-palindromic-subsequence
这个视频不错 https://www.bilibili.com/video/BV1uy4y1y7pS

给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。

示例 1:
输入:"bbbab"
输出:4
一个可能的最长回文子序列为 "bbbb"。

示例 2:
输入:"cbbd"
输出:2
一个可能的最长回文子序列为 "bb"。

提示：
1 <= s.length <= 1000
s 只包含小写英文字母

## 思路
动态规划
1. i<=j，f[i][j]为i到j的最长回文子序列
2. 转移方程 a[i]===a[j] 时，f[i][j] = f[i+1][j-1] + 2，a[i]!==a[j] 时，f[i][j] = Max(f[i][j-1], f[i+1][j])
3. 初始条件  在 i===j 时 f[i][j]=1

判断字符串时，分为这个字符串首位字母相等，和不相等来判断
可以看到状态转移方程的右侧，i为升序，j为降序，所以i需要从大到小，j需要从小到大，给上一层计算提供数据

复杂度分析：
- 时间复杂度：O(n^2) 两层循环
- 空间复杂度：O(n^2) 使用了二维数组
*/

function longestPalindromeSubseq(s: string): number {
    if (!s.length) {return 0}
    const f: number[][] = []
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            f[i] = f[i] || new Array(s.length - 1).fill(0)
            if (i === j) {
                f[i][j] = 1
            } else if (s[i] === s[j]) {
                f[i][j] = f[i + 1][j - 1] + 2  // 如果ij相邻，则没有f[i + 1][j - 1]这个值
            } else {
                f[i][j] = Math.max(f[i][j - 1], f[i + 1][j])
            }
        }
    }
    return f[0][s.length - 1]
}

console.log(
  longestPalindromeSubseq("bbbab")    // 'bbbb'
)
