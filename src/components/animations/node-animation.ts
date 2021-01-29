import { CustomNode } from "../node";

const nodeAnimation = (nodesInOrder: CustomNode[]) => {
    for (let i: number= 0; i < nodesInOrder.length; i++){
        setTimeout(() => {
            const id: string= nodesInOrder[i].id;
            const node: Element= document.getElementById(id)!;

            node.classList.contains("isStart") || node.classList.contains("isTarget") 
            ? node.classList.add("visited")
            : node.className = "visited";

        }, 30 * i);
    }
}

export default nodeAnimation;