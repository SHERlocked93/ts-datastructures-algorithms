/*
创建于 2021年1月31日 下午7:47:30
作者: sherlocked93
功能: 存在重复元素
地址: https://leetcode-cn.com/problems/contains-duplicate

给定一个整数数组，判断是否存在重复元素。
如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

示例 3:
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

## 思路
1. 哈希表方式

复杂度分析：
- 时间复杂度：O(n) 需要一层循环
- 空间复杂度：O(n) 使用哈希表存储已出现的数字
*/

function containsDuplicate(nums: number[]): boolean {
    const hashMap: { [key: number]: boolean } = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hashMap) {
            return true
        }
        hashMap[nums[i]] = true
    }
    return false
}

console.log(
  containsDuplicate([1, 2, 3]) // true
)
