/*
 创建于 2021-01-4 21:54:38
 作者: sherlocked93
 功能: 插入排序


## 逻辑
逻辑和打牌时候抓牌一样，将一系列数组作为拿到的牌，按照大小插到手上排好的牌中
1. 将第一个元素作为已排序数组，将其余元素作为未排序数组
2. 从未排序元素取出一个，在已排序数组中进行一次冒泡
3. 重复步骤1-2

## 复杂度分析
- 时间复杂度：O(n^2) 有两次循环
*/


function insertSort(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums
    }
    for (let i = 1; i < nums.length; i++) {
        const anchorNum = nums[i]
        let j = i - 1
        while (j >= 0 && anchorNum < nums[j]) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = anchorNum
    }
    return nums
}

debugger
console.log(
  insertSort([18, 10, 5, 2, 8, 23, 13, 9, 3, 5])   // [2, 3, 5, 5, 8, 9, 10, 13, 18, 23]
)

// 也可以这样实现，使用js中的数组方法，不具有语言间的普适性，不过原理类似
function insertSort1(nums: number[]): number[] {
    const resultNums = [nums.shift()]
    for (let i = 0; i < nums.length; i++) {
        const anchorNum = nums[i]
        for (let j = 0; j < resultNums.length; j++) {
            if (anchorNum <= resultNums[j]) {
                resultNums.splice(j, 0, anchorNum)
                break
            } else if (j === resultNums.length - 1) {
                resultNums.push(anchorNum)
                break
            }
        }
    }
    return resultNums
}
