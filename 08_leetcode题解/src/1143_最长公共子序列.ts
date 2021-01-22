/*
创建于 2021年1月22日 下午1:44:05
作者: sherlocked93
功能: 最长公共子序列
地址: https://leetcode-cn.com/problems/longest-common-subsequence
这个视频不错 https://www.bilibili.com/video/BV14A411v7mP

给定两个字符串text1 和text2，返回这两个字符串的最长公共子序列的长度。
一个字符串的子序列是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。
若这两个字符串没有公共子序列，则返回 0。

示例 1:
输入：text1 = "abcde", text2 = "ace"
输出：3
解释：最长公共子序列是 "ace"，它的长度为 3。

示例 2:
输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc"，它的长度为 3。

示例 3:
输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0。

提示:
1 <= text1.length <= 1000
1 <= text2.length <= 1000
输入的字符串只含有小写英文字符。

## 思路
动态规划，这题的状态转移方程和 516 的基本一样，
1. f[i][j] 为 a[i]到b[j]的最长公共子序列长度
2. 转移方程 a[i]===b[j] 时，f[i][j] = f[i+1][j-1] + 1，a[i]!==a[j] 时，f[i][j] = Max(f[i][j-1], f[i-i][j])
3. 初始条件  在 i或j 为-1 时 f[i][j]=0，相当于此时a或b为空字符串

判断字符串时，分为这个字符串首位字母相等，和不相等来判断
可以看到状态转移方程的右侧，ij为降序，所以ij需要从小到大来算，给上一层计算提供数据

其实最长回文子序列也相当于自己和自己来对比，只不过这一题是不同字符串之间的比较

复杂度分析：
- 时间复杂度：O(n^2) 两层循环
- 空间复杂度：O(n^2) 使用了一个二维数组
*/

function longestCommonSubsequence(text1: string, text2: string): number {
    const f = []
    for (let i = -1; i < text1.length; i++) {
        f[i] = f[i] || []
        for (let j = -1; j < text2.length; j++) {
            if ((i === -1) || (j === -1)) {
                f[i][j] = 0
            } else if (text1[i] === text2[j]) {
                f[i][j] = f[i - 1][j - 1] + 1
            } else {
                f[i][j] = Math.max(f[i][j - 1], f[i - 1][j])
            }
        }
    }
    return f[text1.length - 1][text2.length - 1]
};

console.log(
  longestCommonSubsequence('abcde', 'ace')    // 3
)
