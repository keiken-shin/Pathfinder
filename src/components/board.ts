import { CustomNode, Node } from "./node";

class Board {
    isStart: string | null;     // Starting Point
    isTarget: string | null;    // Target Point
    allNodes: {
        [propName: string]: CustomNode
    };  // Contains instance of all the nodes present in board with "node_id" as "key" and "Node itself" as "value" 
    grid: CustomNode[][];       // Storing all table rows "Array<Array<CustomNode>>"

    constructor(
        public height: number,
        public width: number
    ){
        this.isStart = null;
        this.isTarget = null;
        this.allNodes = {};
        this.grid = [];
    }

    initialize() {
        this.createGrid();
    }

    createGrid() {
        const board: Element = document.querySelector("#board")!;    // Select Board Elements (! -> mandatory)
        const tbody: Element = document.createElement("tbody");

        for (let row: number = 0; row < this.height; row++){
            const currentArrayRow: Node[] = [];

            // Create table row element
            const currentRow: HTMLTableRowElement = document.createElement("tr");
            currentRow.id = `row ${row}`;

            for (let col: number = 0; col < this.width; col++){
                const nodeId: string= `${row}-${col}`;

                let nodeStatus: string, 
                    newNode: CustomNode;

                // Calculating start and target position
                if (row === Math.floor(this.height / 2) && col === Math.floor(this.width / 4)){
                    nodeStatus = "isStart";     // marking current node as start node
                    this.isStart = nodeId;      // storing current node in isStart
                }else if (row === Math.floor(this.height / 2) && col === Math.floor(3 * this.width / 4)){
                    nodeStatus = "isTarget";    // marking current node as target node
                    this.isTarget = nodeId;     // storing current node in isTarget
                }else{
                    nodeStatus = "unvisited";   // marking rest as unvisited
                }

                newNode = new Node(row, col, nodeStatus);   // Creating instance of node
                currentArrayRow.push(newNode);              // Pushing new instance in row array
                this.allNodes = { nodeId: newNode };        // Storing it inside allNodes

                // Creating board cell
                const tableCell: HTMLTableDataCellElement= document.createElement("td");
                tableCell.id = nodeId;
                tableCell.classList.add(nodeStatus);

                currentRow.append(tableCell);
            }
            this.grid.push(currentArrayRow);
            tbody.append(currentRow);
            board.append(tbody);
        }
    }
}

export default Board