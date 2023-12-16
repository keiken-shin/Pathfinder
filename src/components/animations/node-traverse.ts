import { CustomNode } from "@/components/node";
import { NODE_ANIMATION_TIME } from "./index";

const nodeTraverse = async(nodesInOrder: CustomNode[]) => {
    return new Promise((resolve) => {
        for (let i: number= 0; i < nodesInOrder.length; i++){
            setTimeout(() => {
                const id: string= nodesInOrder[i].id;
                const node: Element= document.getElementById(id)!;
    
                node.classList.contains("isStart") || node.classList.contains("isTarget") 
                ? node.classList.add("visited")
                : node.className = "visited";
    
                if(i === nodesInOrder.length - 1) resolve(true);
            }, NODE_ANIMATION_TIME * i);

        }
    })
}

export default nodeTraverse;