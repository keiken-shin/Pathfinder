import { CustomNode, ListOfCustomNode } from "@/components/node";
import getNeighbors from "./get-neighbors";

const depthFirstSearch = (
    listOfNodes: ListOfCustomNode, 
    startNode: string, 
    targetNode: string, 
    grid: CustomNode[][],
    nodesInOrder: CustomNode[]
): CustomNode[] => {

    if (startNode === "" || targetNode === "" || startNode === targetNode) return [];

    const stack: CustomNode[] = [listOfNodes[startNode]]
    const exploredNode: {
        [propNames: string] : boolean
    } = {startNode: true}

    while (stack.length){
        const currentNode: CustomNode = stack.pop()!;
        exploredNode[currentNode.id] = true;
        nodesInOrder.push(currentNode);
        currentNode.status = "visited";

        if (currentNode.id === targetNode) return stack;

        const currentNeighbors = getNeighbors(currentNode.id, listOfNodes, grid, "DFS");
        currentNeighbors.forEach(neighbor => {
            if (!exploredNode[neighbor]){
                listOfNodes[neighbor].previousNode = currentNode;
                stack.push(listOfNodes[neighbor]);
            }
        })
    }

    return stack;
}

export default depthFirstSearch;