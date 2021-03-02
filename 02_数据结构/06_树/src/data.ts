export const BinaryTree: TreeNode = {
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

export interface TreeNode {
    value: number,
    left?: TreeNode,
    right?: TreeNode
}
