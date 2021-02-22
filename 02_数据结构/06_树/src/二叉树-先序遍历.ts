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

// 先序遍历
const preorder = (treeNode: TreeNode) => {
    console.log(treeNode.value)
    if (treeNode.left) {preorder(treeNode.left)}
    if (treeNode.right) {preorder(treeNode.right)}
}

preorder(BinaryTree)
