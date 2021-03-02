# 数组

[TOC]



几乎所有的编程语言都原生支持数组类型，因为数组是最简单的内存数据结构。

在 JS 中创建一个数组十分简单，可以使用数组字面量、`new Array()` 方式，其中字面量方式最为常用。

## 数组操作

数组是线性数据结构，在数组中，访问数据十分简单，而添加和删除数据比较耗工夫。

由于访问数组中的数据时使用的是随机访问(通过下标可计算出内存地址)，所以需要的运行时间仅为恒定的 `O(1)`。

另一方面，想要向数组中添加新数据时，在 JS 中如果不使用 `push`、`unshift` 或 `splice` 之类的方法，就要和其他语言一样，把目标位置后面的数据一个个移开。所以，如果在数组头部添加数据，就需要 `O(n)` 的时间，删除操作同理。

然而在 JS 中，原生提供了一些很方便的操作数组的方法，使得在数组操作不像 C/C++、C#、JAVA 等语言一样复杂，这正是体现 JS 设计思想的地方，那就是入门简单便于上手，并且非常有利于简化操作复杂度。

![数组操作](https://cdn.jsdelivr.net/gh/SHERlocked93/pic@master/upic/%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C-20210131-69hMwg.png)

代码如下：

```typescript
const arr = [0, 1, 2, 3]

/* 数组头尾操作 */
arr.push(4)         // 将一个或多个元素添加到数组的末尾，并返回该数组的新长度
arr.pop()         		 // 从数组中删除最后一个元素，并返回该元素的值
arr.shift() 					 // 从数组中删除第一个元素，并返回该元素的值
arr.unshift(-1)     // 将一个或多个元素添加到数组的开头，并返回该数组的新长度

/* 数组切片、任意位置插入等操作 */
arr.splice(2, 1, 8, 9)  // 通过删除或替换现有元素或者原地添加新的元素来修改数组，以数组形式返回被修改的内容
arr.slice(1, 3)     	  // 返回一个新的数组对象，这一对象是一个从1到3的原数组的浅拷贝，包括1不包括3
```

`push`、`pop`、`shift`、`unshift` 这几个在数组头尾操作的方法很简单，值得注意的是 `splice` 和 `slice` 两个方法。

1. `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])` ：第一个参数 `start` 是想要删除或插入的元素的索引值，参数 `deleteCount` 是删除元素的个数，第三个参数往后的 `item*`，就是要添加到数组里的值。值得注意的是，单独传递负整数，意为从数组末尾截去一段值。
2. `arr.slice([start[, end]])` ：从 `start` 索引开始提取原数组元素，在 `end` 索引处结束提取，返回从 `start` 到 `end` 的所有元素（包含 `start`，但不包含 `end`）。

除了这些方法之外，JS 还提供了其他的一些实用方法，比如 `concat`、`every`、`some`、`forEach`、`keys`、`map`、`sort`、`indexOf`、`reduce` 等等，推介在 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 上多加了解，这里不多加赘述。

## 二维数组和多维数组

如果一个数组的元素为数组，那么就构建成了二维数组，如果数组中数组的元素也是数组，那么就构建成了三维数组，以此类推构建成多维数组。

比如这里有个数组存储每个班级的数组，每个班级存储每个人数学成绩的数组：

```javascript
const grade7 = [      // 7年级有三个班级
  [23, 45, 64, 87, 91, 68, 85],   // 每个班级的数学成绩
  [65, 21, 34, 84, 14, 95, 26, 88],
  [45, 84, 96, 68, 85, 61, 87],
]
```

这就是某学校七年级数学成绩的二维数组，如果希望存储一个初中三个年级每个年级，每个年级的每个班级数学成绩，显而易见需要使用三维数组，如果需要每个学生元素需要存储语数外三门学科的成绩，那么就需要再加一维，这就是多维数组。

二维/多维数组在算法中很常用，后面做题的时候就会面熟了。

## 两个栗子 🌰

光说不练假把式，下面看看两道简单的算法面试题来巩固一下数组操作吧～

### 旋转数组

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数，函数不返回参数，原地修改输入的数组。

进阶：你可以使用空间复杂度为 `O(1)` 的原地算法解决这个问题吗？

```javascript	
示例 1:
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
```

```javascript

示例2:
输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释:
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
```

这是 LeetCode 第 [189 题](https://leetcode-cn.com/problems/rotate-array/)，这一题的解决方法很多。

#### 方法一

普通的方法就是，使用一个 `for` 循环，将索引 `i` 的元素放到数组的 `(k + i) % length` 上。

不过这种方法需要先用一个数组来存一下原数组，因为数组里数字的顺序变了，所以时间复杂度为 `O(n)` ，空间复杂度为 `O(n)`。

```typescript
function rotate(nums: number[], k: number): void {
    const numsCopy = [...nums]
    const length = nums.length
    for (let i = 0; i < nums.length; i++) {
        nums[(k + i) % length] = numsCopy[i]
    }
}
rotate([1, 2, 3, 4, 5, 6, 7], 3)    // [5,6,7,1,2,3,4]
```

#### 方法二，队列

使用队列的思想，从数组尾部 `pop` 元素，在头部 `unshift` 放到数组头部。

这种方式使用了 JS 提供的方法，在其他语言里面不一定能实现，不过这种方式的时间复杂度 `O(n*k)` 空间复杂度 `O(1)`，虽然看起来比较简洁，但时间复杂度还是有点高。

```typescript
// 队列补位法
function rotate(nums: number[], k: number): void {
    let kEqual = k % nums.length
    while (kEqual-- !== 0) {
        nums.unshift(nums.pop())
    }
}
rotate([1, 2, 3, 4, 5, 6, 7], 3)    // [5,6,7,1,2,3,4]
```

#### 方法三，三次翻转法

经典的三次翻转法

1. 先把整个数组翻转
2. 然后把 `[0, k-1]` 翻转
3. 最后把 `[k-1, n - 1]` 翻转

这是可以在数学上被证明的，感兴趣小伙伴自己证明一下看看～

![三次翻转法](https://cdn.jsdelivr.net/gh/SHERlocked93/pic@master/upic/LC189-20210131-ASlVhN.png)

```typescript
function rotate(nums: number[], k: number): void {
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

rotate([1, 2, 3, 4, 5, 6, 7], 3)    // [5,6,7,1,2,3,4]
```

#### 方法四，虚拟数组平移

其实如果不限制空间复杂度，假设数组的左边还有同样一个数组，数组向右循环右移 k 位就相当于数组范围向左取 k 个，如下图：

![虚拟数组平移](https://cdn.jsdelivr.net/gh/SHERlocked93/pic@master/upic/LC189+1-20210131-LW3iji.png)

按照这个思想，可以很简单的写出：

```typescript
function rotate(nums: number[], k: number): void {
    const length = nums.length
    nums = [...nums, ...nums].slice(length - k, 2 * length - k)
}
rotate([1, 2, 3, 4, 5, 6, 7], 3)    // [5,6,7,1,2,3,4]
```

但实际上这并不满足要求，因为这并没有改变数组，题目要求的是原地修改，因此使用 `splice` 来原地改变：

```typescript
function rotate(nums: number[], k: number): void {
    const length = nums.length
    k = k % length
    nums.push(...nums)
    nums.splice(0, length - k)
    k !== 0 && nums.splice(-k)
}
rotate([1, 2, 3, 4, 5, 6, 7], 3)    // [5,6,7,1,2,3,4]
```

是不是很好理解呢，这里空间复杂度不满足进阶要求，不过思想值得借鉴 😂

### 有序数组的平方

给你一个按非递减顺序排序的整数数组 `nums`，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

请你设计时间复杂度为 `O(n)` 的算法解决本问题

```javascript
示例 1：
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```
```javascript
示例 2：
输入：nums = [-7,-3,2,3,11]
输出：[ 4, 9, 9, 49, 121 ]
```
这是 LeetCode 第 [977 题](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

#### 方法一，先排序

笨办法就是先按绝对值排序再运算，但数组排序的最低复杂度也要 `O(nlogn)`，所以无论如何都不会满足题目要求的时间复杂度 `O(n)`

#### 方法二，双指针法

1. 双指针法，从数组左右开始；
2. 再对比数组的最右边值和最左边值的绝对值大小，由于数组已经是有序的了，所以这绝对值最大的两个值只能在这两个数字中出现；
3. 发现最小值之后把对应指针后退，直到两个指针相遇；
4. 重复 1-3 步；

其实这个步骤类似于归并排序的对比阶段，归并排序在排序两个子数组时，由于这两个数组已经是有序的了 ，所以最大/小值只可能在一端发生，然后使用两个指针依次后退比较即可，只不过这一题的比对过程发生在同一个数组中。

```typescript
function sortedSquares(nums: number[]): number[] {
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
  sortedSquares([-7, -3, 2, 3, 11])    // [4,9,9,49,121]
)
```

这一题其实使用了**双指针法**的算法思想，这个思想在数组、字符串等操作中非常常用，后文会单独使用一章来详解双指针法。

