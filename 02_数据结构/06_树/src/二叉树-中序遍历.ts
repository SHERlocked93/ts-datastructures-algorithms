import { BinaryTree, TreeNode } from './data'

// 中序遍历
const inorder = (treeNode: TreeNode) => {
    if (treeNode.left) {inorder(treeNode.left)}
    console.log(treeNode.value)
    if (treeNode.right) {inorder(treeNode.right)}
}

inorder(BinaryTree)
