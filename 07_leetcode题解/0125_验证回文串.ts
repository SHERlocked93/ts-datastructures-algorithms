/*
创建于 2021年1月19日 下午10:20:41
作者: sherlocked93
功能: 验证回文串
地址: https://leetcode-cn.com/problems/valid-palindrome

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true

示例 2:
输入: "race a car"
输出: false

## 思路
入栈之后，也可以取巧用 .join.reverse()
1. 遍历入栈，再遍历栈

## 复杂度分析
- 时间复杂度：O(n) 只有一层循环
- 空间复杂度：O()
*/

function isPalindrome(s: string): boolean {
    const charStack: string[] = []
    const regExp: RegExp = /[a-zA-Z0-9]/
    for (let i = 0; i < s.length; i++) {
        if (regExp.test(s[i])) {
            charStack.push(s[i].toLocaleLowerCase())
        }
    }
    const charStackSize = charStack.length
    for (let i = 0; i < ~~(charStackSize / 2); i++) {
        if (charStack[i] !== charStack[charStackSize - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(
  isPalindrome("A man, a plan, a canal: Panama")    // true
)
