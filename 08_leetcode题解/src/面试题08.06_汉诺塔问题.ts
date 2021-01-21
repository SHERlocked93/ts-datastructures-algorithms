/*
创建于 2021年1月13日 下午3:11:18
作者: sherlocked93
功能: 汉诺塔问题
标签: 递归
地址: https://leetcode-cn.com/problems/hanota-lcci/

在经典汉诺塔问题中，有 3 根柱子及 N 个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。一开始，所有盘子自上而下按升序依次套在第一根柱子上(即每一个盘子只能放在更大的盘子上面)。移动圆盘时受到以下限制:
(1) 每次只能移动一个盘子;
(2) 盘子只能从柱子顶端滑出移到下一根柱子;
(3) 盘子只能叠在比它大的盘子上。
请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。
你需要原地修改栈。

示例1:
 输入：A = [2, 1, 0], B = [], C = []
 输出：C = [2, 1, 0]

示例2:
 输入：A = [1, 0], B = [], C = []
 输出：C = [1, 0]

提示:
A中盘子的数目不大于14个

## 思路

1. 用递归的思想

## 复杂度分析
- 时间复杂度：O(2^n) F(n)=F(n-1)*2 +1，忽略掉低阶项为2^n
- 空间复杂度：O(n) 调用栈的长度为n
*/

function hanota(A: number[], B: number[], C: number[]): void {
    const moveHanota = (size: number, startArr: number[], middleArr: number[], endArr: number[]) => {
        if (size === 1) {
            endArr.push(startArr.pop())
            return 1
        }
        const moveAB = moveHanota(size - 1, startArr, endArr, middleArr)   // 注意顺序
        endArr.push(startArr.pop())
        const moveBC = moveHanota(size - 1, middleArr, startArr, endArr)
        return moveAB + 1 + moveBC
    }
    return moveHanota(A.length, A, B, C)
}

const A = [3, 2, 1], B = [], C = []
console.log(
  hanota(A, B, C)    // 执行次数为 2^A.length - 1
)

console.log(
  A, B, C   //  [] [] [2,1,0]
);
