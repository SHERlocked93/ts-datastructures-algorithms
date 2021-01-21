/*
创建于 2021-01-4 10:36:56
作者: sherlocked93
功能: 删除排序数组中的重复项
地址: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

例1:  输入nums = [1,1,2]  返回 2
例2:  输入nums = [0,0,1,1,1,2,2,3,3,4]  返回 5

## 思路
1. 从后往前遍历，不用考虑数组长度变化
2. 如果当前元素与之前遍历保存下的元素一致，那么把当前元素删除

## 复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1)
*/

function removeDuplicates(nums: number[]): number {
    let lastNum: number = null
    for (let i = nums.length - 1; i >= 0; i--) {
        if (lastNum === nums[i]) {
            nums.splice(i, 1)
        } else
            lastNum = nums[i]
    }
    return nums.length
};

console.log(
    removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])   // 5
)


/* 方法二（不推介，因为indexof相当于又遍历了一次）： 因为indexof返回从前往后查找到的第一个相同元素的索引。所以从前往后遍历，查看当前索引是不是和indexof找到的元素索引一致，不一致就删除 */

/* 方法三（推介，双指针法，具有普适性）：使用两个指针，分别为读指针和写指针， */
function removeDuplicates1(nums: number[]): number {
    let p1 = 0,  // 写指针
        p2 = 0;  // 读指针

    while (p2 < nums.length) {
        if (nums[p1] === nums[p2]) {
            p2++
        } else {
            p1++
            nums[p1] = nums[p2]
        }
    }
    return p1 + 1;
};
console.log(
    removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])   // 5
)
