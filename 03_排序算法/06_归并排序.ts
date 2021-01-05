/*
 创建于 2021-01-5 13:53:0
 作者: sherlocked93
 功能: 归并排序


## 逻辑
1. 将数组拆分成两个数组
2. 重复步骤1直到数组的长度为1
3. 对比相邻数组的第一个值，将较小的取出放入新数组中
4. 重复步骤3直到这两个数组中有一个数组长度为0，则直接把长度不为0的数组接到新数组后面，此时新数组为排序好的数组
5. 重复步骤3-4

## 复杂度分析
- 时间复杂度：O(nlogn)
*/

const merge = (left: number[], right: number[]) => {  // 左序列与右序列合并
    let resNums: number[] = []
    while (left.length && right.length) {   // 如果哪个序列长度为空了，说明结果序列最后面（最大）值比未空序列的最前面（最小）值还小，那直接把另一个序列接到结果序列后面就行了
        if (left[0] < right[0]) {           // 只比对左右序列的第一个元素
            resNums.push(left.shift())
        } else {
            resNums.push(right.shift())
        }
    }
    return [...resNums, ...left, ...right]   // left和right有个为空了，直接合并到结果序列后面
}

function mergeSort(nums: number[]): number[] {
    if (nums.length <= 1) {      // 将序列切割成1个的粒度时，这个判断将长度为1的序列直接返回
        return nums
    }
    let middle = ~~(nums.length / 2)
    let left = nums.slice(0, middle)
    let right = nums.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

console.log(
  mergeSort([18, 10, 5, 2, 8, 23, 13, 9, 3, 5])   // [2, 3, 5, 5, 8, 9, 10, 13, 18, 23]
)
