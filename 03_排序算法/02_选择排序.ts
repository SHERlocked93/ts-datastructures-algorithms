/*
 创建于 2021-01-4 22:11:3
 作者: sherlocked93
 功能: 选择排序

## 逻辑
1. 遍历数组，找出最小的元素放到最前面
3. 对剩余元素执行步骤1
4. 重复步骤2-3

## 复杂度分析
- 时间复杂度：O(n^2) 第一次需要对比n-1次，第二次需要n-2次....最后一次对比1次，一共 n(n-1)/2 次，忽略低次项，为n^2
*/

function selectSort(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        let smallestNum = nums[i]
        for (let j = i; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                smallestNum = nums[j]
            }
        }
    }
    return nums
}

console.log(
    selectSort([18, 10, 5, 2, 8, 23, 13, 9, 3, 5])   // [2, 3, 5, 5, 8, 9, 10, 13, 18, 23]
)
