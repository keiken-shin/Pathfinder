import { CustomNode, ListOfCustomNode } from "../../node";

const getNeighbors = (
    nodeId: string, 
    listOfNodes: ListOfCustomNode,
    grid: CustomNode[][]
) => {
    const coordinates: string[]= nodeId.split("-");
    const x: number= parseInt(coordinates[0]);
    const y: number= parseInt(coordinates[1]);

    const neighbor = [];
    let potentialNeighbor: string;

    // if there exist a row above current row and current col idx in that row
    if (grid[x-1] && grid[x-1][y]){
        potentialNeighbor = `${(x - 1).toString()}-${(y.toString())}`;  // make that coords potential neighbor
        if(listOfNodes[potentialNeighbor].status !== "wall"){
            neighbor.unshift(potentialNeighbor);    // Add potentialNeighbor at the beginning of neighbor array if node is not wall
        }
    }

    // if there exist next column in current row
    if (grid[x][y + 1]){
        potentialNeighbor = `${x.toString()}-${(y + 1).toString()}`;    // make that coords potential neighbor
        if(listOfNodes[potentialNeighbor].status !== "wall"){
            neighbor.unshift(potentialNeighbor);
        }
    }

    if (grid[x + 1] && grid[x + 1][y]){
        potentialNeighbor = `${(x + 1).toString()}-${(y).toString()}`;    // make that coords potential neighbor
        if(listOfNodes[potentialNeighbor].status !== "wall"){
            neighbor.unshift(potentialNeighbor);
        }
    }
    
    if (grid[x][y - 1]){
        potentialNeighbor = `${x.toString()}-${(y - 1).toString()}`;    // make that coords potential neighbor
        if(listOfNodes[potentialNeighbor].status !== "wall"){
            neighbor.unshift(potentialNeighbor);
        }
    }

    return neighbor;
}

export default getNeighbors;