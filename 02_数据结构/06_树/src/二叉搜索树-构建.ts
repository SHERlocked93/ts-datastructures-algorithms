const Tree2Array: TreeNode['value'][] = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25]

interface TreeNode {
    value: number,
    left?: TreeNode,
    right?: TreeNode
}

let tree: TreeNode = null

// 将数组转化为二叉搜索树
tree = insert(tree, ...Tree2Array)

// 对一个二叉搜索树插入一个数组
function insert(tree: TreeNode | null, ...nodeValues: TreeNode['value'][]): TreeNode {
    if (!nodeValues.length) {return tree}
    if (tree === null) {
        const [first, ...rest] = nodeValues
        tree = { value: first }
        insert(tree, ...rest)
    } else {
        for (let i = 0; i < nodeValues.length; i++) {
            insertNode(tree, nodeValues[i])
        }
    }
    return tree
}

function insertNode(treeNode: TreeNode, nodeValue: TreeNode['value']): void {
    if (treeNode.value > nodeValue) {
        if (!treeNode.left) {
            treeNode.left = { value: nodeValue }
        } else {
            insertNode(treeNode.left, nodeValue)
        }
        return
    }
    if (!treeNode.right) {
        treeNode.right = { value: nodeValue }
    } else {
        insertNode(treeNode.right, nodeValue)
    }
}

// 单独给树插入一个新数 6
tree = insert(tree, 6)

console.log(JSON.stringify(tree, null, 2))
