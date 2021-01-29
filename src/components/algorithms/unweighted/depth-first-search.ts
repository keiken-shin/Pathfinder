import { CustomNode, ListOfCustomNode } from "../../node";
import getNeighbors from "./get-neighbors";

const depthFirstSearch = (
    listOfNodes: ListOfCustomNode, 
    startNode: string, 
    targetNode: string, 
    grid: CustomNode[][],
    nodesInOrder: CustomNode[]
): boolean => {

    if (startNode === "" || targetNode === "" || startNode === targetNode) return false;

    let stack: CustomNode[] = [listOfNodes[startNode]]
    const exploredNode: {
        [propNames: string] : boolean
    } = {startNode: true}

    while (stack.length){
        let currentNode: CustomNode = stack.pop()!;
        exploredNode[currentNode.id] = true;
        nodesInOrder.push(currentNode);
        currentNode.status = "visited";

        if (currentNode.id === targetNode) return true;

        let currentNeighbors = getNeighbors(currentNode.id, grid);
        currentNeighbors.forEach(neighbor => {
            if (!exploredNode[neighbor]){
                listOfNodes[neighbor].previousNode = currentNode;
                stack.push(listOfNodes[neighbor]);
            }
        })
    }

    return false;
}

export default depthFirstSearch;