/*
创建于 2021年1月5日 下午8:49:55
作者: sherlocked93
功能: 两数之和
地址: https://leetcode-cn.com/problems/two-sum/

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那两个整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
你可以按任意顺序返回答案。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]

## 思路
### 方法一
1. 两层循环依次匹配，类似于冒泡

### 方法二
1. 一次遍历，将遍历过的target与当前值的差值保存在map中，后续遍历时进行比对

## 复杂度分析
- 时间复杂度：O(n^2) 两层循环，最坏情况下数组中任意两个数都要被匹配一次
- 空间复杂度：O(1)
*/

// 方法一，两层循环
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {return [i, j]}
        }
    }
};

console.log(
  twoSum1([2, 7, 11, 15], 9)    // [0, 1]
)

// 方法二，使用map，时间复杂度O(n)，空间复杂度O(n)
function twoSum1(nums: number[], target: number): number[] {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const key = nums[i].toString()
        if (key in map) {
            return [i, map[key]]
        }
        map[target - nums[i]] = i     // map的key为要寻找的差值，value为索引
    }
};
