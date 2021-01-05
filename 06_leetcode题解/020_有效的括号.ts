/*
创建于 2021-01-4 10:36:56
作者: sherlocked93
功能: 有效的括号
地址: https://leetcode-cn.com/problems/valid-parentheses/

给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串，判断字符串是否有效。
有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

例1:  输入str = "({})[]{}"  返回 true
例2:  输入str = "([)]"      返回 false

## 思路
1. 从前往后遍历，遇到左括号入栈，遇到右括号和栈顶字符串判断是不是对应的
2. 如果对应栈顶出栈，不对应直接判false
3. 重复步骤1-2，直到所有字符串都判断完或者判false

## 复杂度分析
- 时间复杂度：O(n)
*/

function isValid(str: string): boolean {
    const stack = []
    const map = { '(': -1, ')': 1, '{': -2, '}': 2, '[': -3, ']': 3 }
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] < 0) {        // 遇到左元素入栈
            stack.push(map[str[i]])
        } else {                      // 遇到右元素与栈顶元素判断是不是对应
            if (i === 0 && map[str[i]] > 0) return false
            if (stack[stack.length - 1] === -map[str[i]]) {
                stack.pop()
            } else return false
        }
    }
    return !stack.length
};

console.log(
  isValid("({})[]{}")     // true
)
