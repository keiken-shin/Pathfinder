import { CustomNode, ListOfCustomNode } from "@/components/node";
import getNeighbors from "./get-neighbors";

const breadthFirstSearch = (
    listOfNodes: ListOfCustomNode, 
    startNode: string, 
    targetNode: string, 
    grid: CustomNode[][],
    nodesInOrder: CustomNode[]
): CustomNode[] => {

    if (startNode === "" || targetNode === "" || startNode === targetNode) return [];

    // Initialize previousNode for all nodes
    for (const nodeKey in listOfNodes) {
        listOfNodes[nodeKey].previousNode = null;
    }

    const queue: CustomNode[] = [listOfNodes[startNode]];
    const exploredNode: {
        [propNames: string] : boolean
    } = {startNode: true}

    while (queue.length){
        const currentNode: CustomNode = queue.shift()!;
        nodesInOrder.push(currentNode);
        currentNode.status = "visited";

        if (currentNode.id === targetNode) return queue;

        const currentNeighbors = getNeighbors(currentNode.id, listOfNodes, grid, "BFS");
        currentNeighbors.forEach(neighbor => {
            const neighborNode = listOfNodes[neighbor];

            if (!exploredNode[neighbor]){
                exploredNode[neighbor] = true;
                neighborNode.previousNode = currentNode;
                queue.push(neighborNode);
            }
        })

        console.log(nodesInOrder, queue)
    }

    return queue;
}

export default breadthFirstSearch;