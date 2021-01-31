# [从零开始学算法 TypeScript 版](https://github.com/SHERlocked93/ts-datastructures-algorithms)

本教程是在下从零入门学算法的沉淀，希望能帮助到你～ 🥳

![数据结构与算法](https://cdn.jsdelivr.net/gh/SHERlocked93/pic@master/upic/数据结构与算法-20210131-eV2PrG.png)

> PS: 在下[博客](https://github.com/SHERlocked93/blog)还有一些其他的文章，欢迎关注～

## 1. 基本概念

1. 时间复杂度
2. 空间复杂度
3. 算法的特性和设计原则

## 2. 数据结构

1. [数组（Array）](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/02_数据结构/01_数组.md)
1. 栈（Stack）
1. 队列（Queue）
1. 链表（Linked List）
1. 树（Tree）
1. 堆（Heap）
1. 字典（Dictionary）
1. 哈希表（Hash Table）
1. 图（Graph）

## 3. 基本算法思维

1. 枚举
1. 递归
1. 回溯
1. 分治
1. 贪心算法
1. 试探算法
1. 模拟算法
1. 动态规划
1. 分支限界

## 4. 排序算法

1. 冒泡排序（Bubble Sort）
1. 选择排序（Selection Sort）
1. 插入排序（Insertion Sort）
1. 快速排序（Quick Sort）
1. 希尔排序（Shell Sort）
1. 归并排序（Merge Sort）
1. 堆排序（Heap Sort）
1. 计数排序（Counting Sort）
1. 桶排序（Bucket Sort）
1. 基数排序（Radix Sort）
1. 排序算法的稳定性

## 5. 查找算法

1. 线性查找（Order Search）
1. 插值查找（Interpolation search）
1. 二分查找（Binary Search）
1. 斐波那契查找（Fibonacci search）
1. 树表查找（Tree search）
1. 分块查找（Block Search）
1. 哈希查找（Hash Search）

## 6. 其他经典算法难题和思想

1. 广度优先搜索（BFS）
1. 深度优先搜索（DFS）
1. 狄克斯特拉算法
1. 贝尔曼-福特算法
1. A*算法
1. 滑动窗口思想
1. 双指针法
1. 欧几里得算法（辗转相除法）
1. K最近邻算法（KNN）
1. 线性规划
1. 网络通信相关安全算法
1. 聚类算法
1. 分类算法

## 7. 行业应用

1. GC算法
1. 操作系统任务调度算法
1. 限流算法
1. 推介算法
1. 机器学习
1. 输入法猜测
1. 垃圾邮件过滤器
1. 论文查重算法
1. 光学字符识别 OCR

## 8. leetcode 题解

由于 JS/TS 中字符串和数组太多相似，所以这里把数组与字符串归为一类。

难易程度：

1. ★☆☆ 简单难度
2. ★★☆ 中等难度
3. ★★★ 困难难度

推介刷题的时候按照类别从易到难刷，下面按照从易到难的顺序按类别分类，可以直接按照这个顺序刷，面试之前分类各刷两三个熟悉一下

### 8.1 数组 & 字符串

关于字符串有一点要注意：

1. 子串，必须是连在一起的子字符串，比如 `abc` 的 `ab`、`bc`
2. 子序列，指的是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串，比如 `abc` 的 `ac` 就属于子序列，子串一定是子序列，但子序列不一定是子串

> | 编号 | 题目                                                         | 难度 ↓ |
> | ---- | ------------------------------------------------------------ | ------ |
> | 1    | [两数之和](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0001_两数之和.ts) | ★☆☆    |
> | 26   | [删除排序数组中的重复项](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0026_删除排序数组中的重复项.ts) | ★☆☆    |
> | 122  | [买卖股票的最佳时机](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0122_买卖股票的最佳时机.ts) | ★☆☆    |
> | 125  | [验证回文串](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0125_验证回文串.ts) | ★☆☆    |
> | 344  | [反转字符串](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0344_反转字符串.ts) | ★☆☆    |
> | 977  | [有序数组的平方](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0977_有序数组的平方.ts) | ★☆☆    |
> | 8    | [字符串转换整数](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0008_字符串转换整数.ts) | ★★☆    |
> | 189  | [旋转数组](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0189_旋转数组.ts) | ★★☆    |

### 8.2 散列表

> | 编号 | 题目                                                         | 难度 ↓ |
> | ---- | ------------------------------------------------------------ | ------ |
> | 217   | [存在重复元素](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0217_存在重复元素.ts) | ★☆☆    |

### 8.3 递归

> | 编号         | 题目                                                         | 难度 ↓ |
> | ----------- | ------------------------------------------------------------ | ------ |
> | 509         | [斐波那契数](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0509_斐波那契数.ts) | ★☆☆    |
> | 面试题08.06  | [汉诺塔问题](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/面试题08.06_汉诺塔问题.ts) | ★☆☆    |
> | 50          | [Pow(x,n)](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0050_Pow(x,n).ts) | ★★☆    |

### 8.4 数学

> | 编号  | 题目                                                         | 难度 ↓ |
> | ---- | ------------------------------------------------------------ | ------ |
> | 7    | [整数反转](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0007_整数反转.ts) | ★☆☆    |
> | 9    | [回文数](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0009_回文数.ts) | ★☆☆    |
> | 190  | [颠倒二进制位](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0190_颠倒二进制位.ts) | ★☆☆    |
> | 191  | [位1的个数](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0191_位1的个数.ts) | ★☆☆    |

### 8.5 栈 & 队列

> | 编号 | 题目                                                         | 难度 ↓ |
> | ---- | ------------------------------------------------------------ | ------ |
> | 20   | [有效的括号](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0020_有效的括号.ts) | ★☆☆    |

### 8.6 动态规划

> | 编号 | 题目                                                         | 难度 ↓ |
> | ---- | ------------------------------------------------------------ | ------ |
> | 53   | [最大子序和](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/53_最大子序和.ts) | ★☆☆    |
> | 1137 | [第N个泰波那契数](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/1137_第N个泰波那契数.ts) | ★☆☆    |
> | 5    | [最长回文子串](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0005_最长回文子串.ts) | ★★☆    |
> | 55   | [跳跃游戏](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0055_跳跃游戏.ts) | ★★☆    |
> | 62   | [不同路径](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0062_不同路径.ts) | ★★☆    |
> | 152  | [乘积最大子数组](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0152_乘积最大子数组.ts) | ★★☆    |
> | 322  | [零钱兑换](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0322_零钱兑换.ts) | ★★☆    |
> | 516  | [最长回文子序列](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0516_最长回文子序列.ts) | ★★☆    |
> | 1143 | [最长公共子序列](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/1143_最长公共子序列.ts) | ★★☆    |

### 8.7 贪心

> | 编号 | 题目                                                         | 难度 ↓ |
> | ---- | ------------------------------------------------------------ | ------ |
> | 55   | [跳跃游戏](https://github.com/SHERlocked93/ts-datastructures-algorithms/blob/master/08_leetcode题解/src/0055_跳跃游戏.ts) | ★★☆    |



## 后记

> 看书的过程中，个人觉得<图解算法>的动态规划一章讲的不太好，<我的第一本算法书>的贝尔曼-福特算法和消息验证码讲的不太好
>
> 除了大部头的枕头书，一般的算法书都有所侧重，有的将有的不讲，所以，遇到某些书的某些章节讲的不好或者有你感兴趣的部分没有涉及，可以看看别的书，多方参照来学习。
>
> PS：希望大家给我一个 🌟，你的支持就是我最大的动力哦～



下面是我推介的算法书籍，按需自取：

![算法书籍推介](https://cdn.jsdelivr.net/gh/SHERlocked93/pic@master/upic/%E7%AE%97%E6%B3%95%E4%B9%A6%E7%B1%8D%E6%8E%A8%E4%BB%8B-tintFB.png)
