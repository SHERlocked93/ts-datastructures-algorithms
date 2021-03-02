import { BinaryTree, TreeNode } from './data'

// 先序遍历
const preorder = (treeNode: TreeNode) => {
    console.log(treeNode.value)
    if (treeNode.left) {preorder(treeNode.left)}
    if (treeNode.right) {preorder(treeNode.right)}
}

preorder(BinaryTree)
