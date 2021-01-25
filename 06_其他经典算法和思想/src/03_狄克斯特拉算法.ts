// 图的表示，一共四个节点
const graph = {
    start: { a: 1, b: 12 },
    a: { c: 3, b: 9 },
    b: { d: 5 },
    c: { b: 4, d: 13, end: 15 },
    d: { end: 4 },
    end: {}
}
// const graph = {
//     start: { a: 6, b: 2 },
//     b: { a: 3, end: 5 },
//     a: { end: 1 },
//     end: {},
// }

type graphNodeName = keyof typeof graph
type graphNode = { [key in graphNodeName]?: number }

const dijkstra = (graph) => {
    const costs: graphNode = {} // 耗费，初始状态除了start都为无穷
    const processedNodes: graphNodeName[] = [] // 标记已经遍历了的节点
    const parents = {}
    
    // 初始化costs、parents
    for (const [nodeKey, naighbor] of Object.entries(graph)) {
        if (nodeKey === 'start') {
            costs[nodeKey] = 0      // 起点cost为0
            continue
        }
        costs[nodeKey] = Infinity   // 先将没遍历到的节点cost设为infinity
        parents[nodeKey] = null
    }
    // costs:  { start: 0, b: Infinity, a: Infinity, end: Infinity }
    // parents: {  b: null, a: null, end: null }
    
    const nextNodeCost = (nodeKey: graphNodeName) => {
        const costMap: graphNode = graph[nodeKey]
        const sortArr = (Object.keys(costMap) as graphNodeName[]).sort(
          (prevKey, currKey) => costMap[prevKey] - costMap[currKey]
        )
        // 先排序，再从小到大遍历，才能保证走别的路径一定比前面遍历到的路径cost大
        // 这也是存在负权边时，狄克斯特拉算法无法胜任的原因
        for (const neighbor of sortArr) {
            const cost = costs[nodeKey] + costMap[neighbor]
            if (cost < costs[neighbor]) {
                costs[neighbor] = cost
                parents[neighbor] = nodeKey
            }
        }
        processedNodes.push(nodeKey)   // 出度遍历完之后标记
        for (const neighbor of sortArr) {    // 这里是递归
            if (processedNodes.includes(neighbor)) {continue}
            nextNodeCost(neighbor)
        }
    }
    nextNodeCost('start')
    // 从start出发最短长度: { start: 0, a: 1, b: 8, c: 4, d: 13, end: 17 }
    // 最短路线: { a: 'start', b: 'c', c: 'a', d: 'b', end: 'd' }
    
    return costs['end']
}

console.log(
  dijkstra(graph)
)
