const BinaryTree: TreeNode = {
    value: 1,
    left: {
        value: 2,
        left: { value: 3 },
        right: { value: 4, left: { value: 5 } }
    },
    right: {
        value: 6,
        right: { value: 7, }
    }
}

interface TreeNode {
    value: number,
    left?: TreeNode,
    right?: TreeNode
}

// 中序遍历
const inorder = (treeNode: TreeNode) => {
    if (treeNode.left) {inorder(treeNode.left)}
    console.log(treeNode.value)
    if (treeNode.right) {inorder(treeNode.right)}
}

inorder(BinaryTree)
