/*
创建于 2021年1月31日 下午8:40:34
作者: sherlocked93
功能: 旋转数组
地址: https://leetcode-cn.com/problems/rotate-array

给定一个数组，将数组中的元素向右移动k个位置，其中k是非负数。

进阶：
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
你可以使用空间复杂度为O(1) 的原地算法解决这个问题吗？

示例 1:
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]

示例2:
输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释:
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]

提示：
1 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

## 思路
### 方法一
1. for循环，将i放到数组的(k+i)%length上

复杂度分析：
- 时间复杂度：O(n) 存在一次解构，concat也是一样
- 空间复杂度：O(n)

### 方法二
1. 可以把数组当成队列，从数组尾部pop，在头部unshift

复杂度分析：
- 时间复杂度：O(n) 存在一次遍历
- 空间复杂度：O(1) 只用一个变量来存pop的数据
*/

// for循环循环覆盖
function rotate1(nums: number[], k: number): void {
    const numsCopy = [...nums]
    const length = nums.length
    for (let i = 0; i < nums.length; i++) {
        nums[(k + i) % length] = numsCopy[i]
    }
    console.log(nums)
}

// 队列补位
function rotate(nums: number[], k: number): void {
    let kEqual = k % nums.length
    while (kEqual-- !== 0) {
        nums.unshift(nums.pop())
    }
};

// 数组翻转方法
function rotate2(nums: number[], k: number): void {
    // 数组翻转某一部分
    function reverse(nums: number[], start: number, end: number): void {
        for (let i = start; i <= ~~((end - start) / 2) + start; i++) {
            [nums[i], nums[end - i + start]] = [nums[end - i + start], nums[i]]
        }
    }
    
    const length = nums.length
    for (let i = 0; i < ~~(length / 2); i++) {  // 先反转
        [nums[i], nums[length - 1 - i]] = [nums[length - 1 - i], nums[i]]
    }
    let kEqual = k % nums.length
    if (kEqual === 0) {return void (0)}
    reverse(nums, 0, kEqual - 1)
    reverse(nums, kEqual, length - 1)
};

rotate2([1, 2, 3, 4, 5, 6, 7], 3)    // [5,6,7,1,2,3,4]
