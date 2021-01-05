/*
 创建于 2021-01-4 22:11:3
 作者: sherlocked93
 功能: 冒泡排序

## 逻辑
1. 依次对比相邻元素，如果左边大于右边就对调
2. 对每一对相邻元素执行步骤1，执行完最后一个元素为最大元素
3. 对除最后一个元素外的元素重复执行步骤1-2

## 复杂度分析
- 时间复杂度：O(n^2) 第一次需要对比n-1次，第二次需要n-2次....最后一次对比1次，一共 n(n-1)/2 次，忽略低次项，为n^2
*/

function bubbleSort(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
}

console.log(
    bubbleSort([18, 10, 5, 2, 8, 23, 13, 9, 3, 5])   // [2, 3, 5, 5, 8, 9, 10, 13, 18, 23]
)
