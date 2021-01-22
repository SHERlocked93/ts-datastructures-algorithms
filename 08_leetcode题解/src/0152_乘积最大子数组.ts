/*
创建于 2021年1月21日 下午9:46:49
作者: sherlocked93
功能: 乘积最大子数组
地址: https://leetcode-cn.com/problems/maximum-product-subarray/

给你一个整数数组 nums，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

示例 1:
输入: [2,3,-2,4]
输出: 6
解释:子数组 [2,3] 有最大乘积 6。

示例 2:
输入: [-2,0,-1]
输出: 0
解释:结果不能为 2, 因为 [-2,-1] 不是子数组。

## 思路
动态规划
1. 需要有两个变量，来分别记录下来最大值和最小值
2. 注意在对比的时候不能加入之前的最大值和最小值，这样的话记录的子数组就不是连续子数组了

## 复杂度分析
- 时间复杂度：O(n) 一层循环
- 空间复杂度：O(1) 使用了有限个变量
*/

function maxProduct(nums: number[]): number {
    if (nums.length === 0) {return 0}
    let max = nums[0]  // 最大
    let min = nums[0]  // 最小
    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const prevMax = max
        max = Math.max(min * nums[i], nums[i], prevMax * nums[i])  // 不能将之前计算的max纳入对比，这样就不是连续数组了
        min = Math.min(min * nums[i], nums[i], prevMax * nums[i])  // 也不能将min纳入对比，用计算前的max为上一轮max
        res = Math.max(res, max)
    }
    return res
};

console.log(
  maxProduct([-5, -6, 1, 2, -3, -4, -3])    // 0
)
