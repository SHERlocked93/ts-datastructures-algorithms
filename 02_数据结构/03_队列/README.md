# 队列

[TOC]



队列是一种线性数据结构，虽然与栈有些相似，但队列中添加和删除数据的操作分别是在两端进行的。

队列，顾名思义，就像排成一队的人。在队列中，处理总是从第一名开始往后进行，而新来的人只能排在队尾。

像队列这种最先进去的数据最先被取来，即**先进先出**结构，简称 FIFO（First In First Out）。

与栈类似，队列中可以操作数据的位置也有一定的限制。在栈中，数据的添加和删除都在同一端进行，而在队列中则分别是在两端进行的。队列也不能直接访问位于中间的数据，必须通过出队操作将目标数据变成首位后才能访问。

## 其他类型的队列
### 双端队列
**双端队列**中的元素可以从两端弹出，插入和删除操作限定在队列的两边进行。 





### 循环队列

**循环队列**就是将队列存储空间的最后一个位置绕到第一个位置，形成逻辑上的环状空间，供队列循环使用。在循环队列结构中，当存储空间的最后一个位置已被使用而再要进入队运算时，只需要存储空间的第一个位置空闲，便可将元素加入到第一个位置，即将存储空间的第一个位置作为队尾。

