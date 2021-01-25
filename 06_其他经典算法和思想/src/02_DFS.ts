const binaryTree2 = {   // 二叉树
    id: 1,
    left: { id: 2 },
    right: {
        id: 3,
        left: { id: 4 },
        right: {
            id: 5,
            left: { id: 6 }
        }
    }
}

// 获取深度，使用队列+迭代的方式
function getDeepthDfs(tree) {
    let size = 0
    if (!tree) {return 0}
    return 1 + Math.max(getDeepthDfs(tree.left), getDeepthDfs(tree.right))
}

console.log(
  getDeepthDfs(binaryTree2)   // 4
)
