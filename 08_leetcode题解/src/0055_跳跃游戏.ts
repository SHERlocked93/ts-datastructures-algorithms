/*
创建于 2021年1月21日 下午8:37:33
作者: sherlocked93
功能: 跳跃游戏
地址: https://leetcode-cn.com/problems/jump-game/

给定一个非负整数数组，你最初位于数组的第一个位置。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个位置。

示例1:
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。

示例2:
输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

## 思路
### 方法一
动态规划
1. 两层 for 循环，外循环指针 i 中遍历内循环指针 j 能不能存在能到达 i 的元素，存在则i++
2. 状态转移方程   f[i] = OR(f[j] && j-i<=a[j])
3. 初始条件 f[0]=true

复杂度分析：
- 时间复杂度：O(n^2) 两个指针，两层循环
- 空间复杂度：O(n) 使用了一个数组来保存结果

### 方法二
贪心算法
计算每个元素能到达的最远位置，如果出现遍历到最后一个元素之前，之前能到达的最远距离小于当前遍历的下标，代表无法达到

复杂度分析：
- 时间复杂度：O(n) 一层循环
- 空间复杂度：O(1) 使用了有限个变量
*/

function canJump(nums: number[]): boolean {
    if (nums.length === 0) {return true}
    const length = nums.length
    const f = [true, ...new Array(length - 1).fill(false)]
    for (let i = 1; i < length; i++) {
        for (let j = 0; j < i; j++) {
            if (f[j] && (i - j <= nums[j])) {
                f[i] = true
                break
            }
        }
    }
    console.log(f, f[nums.length - 1])
    return f[length - 1]
};

// 方法二，一层遍历
function canJump1(nums: number[]): boolean {
    const n = nums.length
    for (let i = 0, max = 0; i < n; i++) {
        if (max >= n) return true
        if (i <= max) {
            max = Math.max(max, i + nums[i])
        } else return false
    }
    return true
};

console.log(
  canJump1([3, 2, 1, 0, 4])    // false
)

