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
### 方法一，转换成数组
入栈之后，也可以取巧用 .join.reverse()
1. 遍历入栈，再遍历栈

### 方法二，双指针法
1. 一个指针从前往后，一个指针从后往前

## 复杂度分析
- 时间复杂度：O(n) 只有一层循环
- 空间复杂度：O(n) 第二种方法 O(1)
*/

// 方法一，入栈再遍历判断
function isPalindrome(s: string): boolean {
    const charStack: string[] = []
    const regExp: RegExp = /[a-zA-Z0-9]/
    for (let i = 0; i < s.length; i++) {
        if (regExp.test(s[i])) {
            charStack.push(s[i].toLowerCase())
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

// 方法二，双指针法，直接在原字符串上判断
function isPalindrome1(s: string): boolean {
    if (s === '') {return true}
    let i: number = 0, charLeft: string = s[i].toLowerCase()
      , j: number = s.length - 1, charRight: string = s[j].toLowerCase()
    const regExp: RegExp = /[a-z0-9]/
    while (i < j) {
        while (!regExp.test(charLeft)) {
            charLeft = s[++i].toLowerCase()
            if (i === j) {return true}
        }
        while (!regExp.test(charRight)) {
            charRight = s[--j].toLowerCase()
            if (i === j) {return true}
        }
        if (charLeft === charRight) {
            charLeft = s[++i].toLowerCase()
            charRight = s[--j].toLowerCase()
        } else return false
    }
    return true
}

// 方法三，先过滤成字符串
function isPalindrome2(s: string): boolean {
    const resStrArr: string[] | null = s.toLowerCase().match(/[a-z0-9]+/g)
    if (!resStrArr) {return true}
    const resStr: string = resStrArr.join('')
    const resStrSize: number = resStr.length
    if (resStr === '') {return true}
    for (let i = 0; i < ~~(resStrSize / 2); i++) {
        if (resStr[i] !== resStr[resStrSize - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(
  isPalindrome2("A man, a plan, a canal: Panama")    // true
)
