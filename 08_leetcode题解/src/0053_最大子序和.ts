/*
创建于 2021年1月22日 上午10:16:00
作者: sherlocked93
功能: 最大子序和
地址:https://leetcode-cn.com/problems/maximum-subarray

给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:
输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释:连续子数组[4,-1,2,1] 的和最大，为6。

进阶:
如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

## 思路
### 方法一
动态规划
1. 转移方程 f[i] = Max(a[i], f[i-1]+a[i]) 注意不能将 f[i-1] 纳入，否则就是不连续的子数组了
2. 在转移的过程中记录下来最大和 res

- 时间复杂度：O(n) 一层循环
- 空间复杂度：O(n) 使用了数组来保存结果

这个基础上可以优化一下，由于f[i]只与f[i-1]有关，所以可以使用一个变量来存储 f[i-1]，从而节约空间复杂度
代码上就是把f[i]替换成一个变量 ，把f[i-1]替换成另一个变量
此时
- 时间复杂度：O(n) 一层循环
- 空间复杂度：O(1) 使用了有限个变量

### 方法二
分治、线段树
*/

// 方法一，动态规划
function maxSubArray(nums: number[]): number {
    if (nums.length === 1) return nums[0]
    let pre = nums[0]
    let curr = nums[0]
    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        curr = Math.max(pre + nums[i], nums[i])
        res = Math.max(curr, res)
    }
    return res
};

console.log(
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])    // 6
)
