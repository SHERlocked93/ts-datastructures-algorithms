/*
创建于 2021年1月31日 下午6:50:44
作者: sherlocked93
功能: 有序数组的平方
地址: https://leetcode-cn.com/problems/squares-of-a-sorted-array

给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

示例 1：
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]

示例 2：
输入：nums = [-7,-3,2,3,11]
输出：[ 4, 9, 9, 49, 121 ]

提示：
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 已按 非递减顺序 排序

进阶：
请你设计时间复杂度为 O(n) 的算法解决本问题

## 思路
### 方法一
1. 笨办法就是先按绝对值排序再运算，但最低排序的复杂度也要O(nlogn)

### 方法二
1. 双指针法，从绝对值最小的数字左右开始，再按归并排序的对比阶段分别对比绝对值大小

复杂度分析：
- 时间复杂度：O(n) 最多只有一层循环
- 空间复杂度：O(n) 使用了两个指针变量和一个数组来存结果
*/

function sortedSquares(nums: number[]): number[] {
    let leastIdx: number = 0
    let leastNum: number = nums[0] ** 2
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i]) ** 2 >= leastNum) {continue}
        leastNum = nums[i] ** 2
        leastIdx = i
    }
    let leftIdx = leastIdx === 0 ? -1 : leastIdx - 1
    let rightIdx = leastIdx === nums.length - 1 ? nums.length : leastIdx + 1
    const res: number[] = [leastNum]
    while (!(leftIdx === -1 && rightIdx === nums.length)) {
        if (rightIdx === nums.length ||
          (Math.abs(nums[leftIdx]) < Math.abs(nums[rightIdx]))) {
            res.push((nums[leftIdx]) ** 2)
            leftIdx--
        } else {
            res.push((nums[rightIdx]) ** 2)
            rightIdx++
        }
    }
    return res
}

function sortedSquares1(nums: number[]): number[] {
    let leftIdx: number = 0
    let rightIdx: number = nums.length - 1
    const res: number[] = []
    while (leftIdx <= rightIdx) {
        if (Math.abs(nums[leftIdx]) < Math.abs(nums[rightIdx])) {
            res.unshift(nums[rightIdx] ** 2)
            rightIdx--
        } else {
            res.unshift(nums[leftIdx] ** 2)
            leftIdx++
        }
    }
    return res
}

console.log(
  sortedSquares1([-7, -3, 2, 3, 11])    // [4,9,9,49,121]
)
