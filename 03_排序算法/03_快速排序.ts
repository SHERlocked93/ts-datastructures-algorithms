/*
 创建于 2021-01-4 21:54:38
 作者: sherlocked93
 功能: 快速排序


## 逻辑
1. 随机找一个数作为对比项
2. 将数组中小于这个对比项的元素放到对比项的左边，大于这个对比项的元素放到对比项的右边
3. 对于对比项的左边元素和右边元素分别重复步骤1-2

## 复杂度分析
- 时间复杂度：O(nlogn) 存在二分
*/


function quickSort(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums
    }
    const left = []
    const right = []
    const anchor = nums.shift()
    nums.forEach(num => (num > anchor) ? right.push(num) : left.push(num))

    return [...quickSort(left), anchor, ...quickSort(right)]
}

console.log(
    quickSort([18, 10, 5, 2, 8, 23, 13, 9, 3, 5])   // [2, 3, 5, 5, 8, 9, 10, 13, 18, 23]
)
