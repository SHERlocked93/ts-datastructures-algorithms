const binaryTree1 = {   // 二叉树
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

// 获取深度，使用队列
function getDeepthBfs(tree) {
    const queue = []
    let size = 0
    if (tree === null) {return 0}
    queue.push(tree)
    while (queue.length) {
        let width = queue.length   // 开始新一轮循环时，队列长度为本层节点个数
        while (width > 0) {
            const curr = queue.shift()
            if (curr.left) {queue.push(curr.left)}
            if (curr.right) {queue.push(curr.right)}
            width--
        }
        size++
    }
    return size
}

console.log(
  getDeepthBfs(binaryTree1)   // 4
)
