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


#### 方法一

普通的方法就是，使用一个 `for` 循环，将索引 `i` 的元素放到数组的 `(k + i) % length` 上。
不过这种方法需要先用一个数组来存一下原数组，因为数组里数字的顺序变了，所以时间复杂度为 `O(n)` ，空间复杂度为 `O(n)`。

#### 方法二，队列

使用队列的思想，从数组尾部 `pop` 元素，在头部 `unshift` 放到数组头部。
这种方式使用了 JS 提供的方法，在其他语言里面不一定能实现，不过这种方式的时间复杂度 `O(n*k)` 空间复杂度 `O(1)`，虽然看起来比较简洁，但时间复杂度还是有点高。

#### 方法三，三次翻转法

经典的三次翻转法

1. 先把整个数组翻转
2. 然后把 `[0, k-1]` 翻转
3. 最后把 `[k-1, n - 1]` 翻转

这是可以在数学上被证明的，感兴趣小伙伴自己证明一下看看～


#### 方法四，虚拟数组平移

其实如果不限制空间复杂度，假设数组的左边还有同样一个数组，数组向右循环右移 k 位就相当于数组范围向左取 k 个，题目要求的是原地修改，因此使用 `splice` 来原地改变 nums 原数组

*/

// for循环循环覆盖
function rotate1(nums: number[], k: number): void {
    const numsCopy = [...nums]
    const length = nums.length
    for (let i = 0; i < nums.length; i++) {
        nums[(k + i) % length] = numsCopy[i]
    }
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
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
            end--
        }
    }
    
    const length = nums.length
    let kEqual = k % length
    reverse(nums, 0, length - 1)
    if (kEqual === 0) {return void (0)}
    reverse(nums, 0, kEqual - 1)
    reverse(nums, kEqual, length - 1)
};

function rotate3(nums: number[], k: number): void {
    const length = nums.length
    k = k % length
    nums.push(...nums)
    nums.splice(0, length - k)
    k !== 0 && nums.splice(-k)
}

const a = [1, 2]
rotate3(a, 1)    // [5,6,7,1,2,3,4]
console.log(a)
