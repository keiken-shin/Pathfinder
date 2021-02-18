import { CustomNode, ListOfCustomNode } from "../node";
import { NODE_ANIMATION_TIME } from "./index";

const shortestDistance = (nodesInShortestOrder: CustomNode[], isStart: string, isTarget: string, allNodes: ListOfCustomNode) => {
    
    nodesInShortestOrder.unshift(allNodes[isTarget]);
    // Setting current node to target node's registered previous node
    let currentNode: CustomNode | null= allNodes[isTarget].previousNode;

    /* 
        Looping through while current node is not equal to start node 
        to get the shortest route that it has to traverse to reach its destination
    */
    while(currentNode?.id !== isStart){
        if(currentNode !== null){
            nodesInShortestOrder.unshift(currentNode);
            currentNode = allNodes[currentNode.id].previousNode;
        }
    }

    nodesInShortestOrder.unshift(allNodes[isStart]);    // Passing start node at the beginning to get the staring position
    
    // Animating nodesInShortestOrder
    for (let i: number= 0; i < nodesInShortestOrder.length; i++){
        setTimeout(() => {
            const id: string= nodesInShortestOrder[i].id;
            const node: Element= document.getElementById(id)!;

            node.classList.contains("isStart") || node.classList.contains("isTarget") 
            ? node.classList.add("shortest-path")
            : node.className = "shortest-path";

        }, NODE_ANIMATION_TIME * (2 * i));
    }
}

export default shortestDistance;