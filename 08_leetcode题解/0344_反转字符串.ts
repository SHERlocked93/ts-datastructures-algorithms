/*
创建于 2021年1月5日 下午3:57:14
作者: sherlocked93
功能: 反转字符串
地址: https://leetcode-cn.com/problems/reverse-string/

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

示例 1：
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]

示例 2：
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]

## 思路
1. 遍历数组的一半，将索引和后半部分对应索引元素对调

## 复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1)
*/


function reverseString(str: string[]): void {
    for (let i = 0; i < ~~(str.length / 2); i++) {
        [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]]
    }
}

const str = ["h", "e", "l", "l", "o"]
reverseString(str)
console.log(str);     // ["o","l","l","e","h"]
