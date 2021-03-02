import { BinaryTree, TreeNode } from './data'

// 后序遍历
const postorder = (treeNode: TreeNode) => {
    if (treeNode.left) {postorder(treeNode.left)}
    console.log(treeNode.value)
    if (treeNode.right) {postorder(treeNode.right)}
}

postorder(BinaryTree)
