import depthFirstSearch from "./algorithms/unweighted/depth-first-search";
import { shortestDistance } from "./animations/index";
import nodeTraverse from "./animations/node-traverse";
import { CustomNode, Node, ListOfCustomNode } from "./node";

class Board {
    isStart: string;                            // Starting Point
    isTarget: string;                           // Target Point
    allNodes: ListOfCustomNode;                 // Contains instance of all the nodes present in board with "node_id" as "key" and "Node itself" as "value" 
    grid: CustomNode[][];                       // Storing all table rows "Array<Array<CustomNode>>"
    nodesInOrder: CustomNode[];                 // Stores node in an order in which it is traversed
    shortestPathNodesInOrder: CustomNode[];     // Contains shortest path nodes
    
    visualizeComponent: Element;                // Getting Visualize Button
    descriptionComponent: Element;              // Getting Description Component

    initialStart: {row: number, col: number}    // Initializing start node
    initialTarget: {row: number, col: number}   // Initializing target node

    constructor(
        public height: number,
        public width: number
    ){
        this.isStart = "";
        this.isTarget = "";
        this.allNodes = {};
        this.grid = [];
        this.nodesInOrder = [];
        this.shortestPathNodesInOrder = [];

        this.visualizeComponent = document.querySelector("#visualize")!;
        this.descriptionComponent = document.querySelector(".description")!;

        this.initialStart = {
            row: Math.floor(this.height / 2),
            col: Math.floor(this.width / 4)
        }
        this.initialTarget = {
            row: Math.floor(this.height / 2),
            col: Math.floor(3 * this.width / 4)
        }
    }

    initialize() {
        this.createGrid();
        this.toggleSwitch();
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
                if (row === this.initialStart.row && col === this.initialStart.col){
                    nodeStatus = "isStart";     // marking current node as start node
                    this.isStart = nodeId;      // storing current node in isStart
                }else if (row === this.initialTarget.row && col === this.initialTarget.col){
                    nodeStatus = "isTarget";    // marking current node as target node
                    this.isTarget = nodeId;     // storing current node in isTarget
                }else{
                    nodeStatus = "unvisited";   // marking rest as unvisited
                }

                newNode = new Node(row, col, nodeStatus);   // Creating instance of node
                currentArrayRow.push(newNode);              // Pushing new instance in row array
                this.allNodes[nodeId] = newNode;       // Storing it inside allNodes

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

        // Visualize
        this.visualizeComponent.addEventListener('click', () => {
            const dataVisualize: string = this.visualizeComponent.getAttribute("data-visualize")!;
            if(dataVisualize !== ""){
                this.drawShortestPath(dataVisualize);
            }
        })
    }

    toggleSwitch(){
        const algorithmsList = document.querySelector("#algorithms-list")!;

        algorithmsList.addEventListener('mousedown', (e) => {
            const el = e.target as HTMLElement;
            const dataId = el.dataset.id;

            if (dataId){
                this.visualizeComponent.textContent = `Visualize ${dataId}`;
                this.visualizeComponent.setAttribute("data-visualize", `${dataId}`);

                if (dataId === 'DFS'){
                    this.descriptionComponent.innerHTML = `Depth-first Search is <strong>&nbsp;unweighted&nbsp;</strong> and <strong>&nbsp;does not guarantee&nbsp;</strong> the shortest path!`
                }

            }
        })
    }

    async drawShortestPath(dataVisualize: string){
        if(dataVisualize === "DFS"){
            depthFirstSearch(this.allNodes, this.isStart, this.isTarget, this.grid, this.nodesInOrder);
            const traverse = await nodeTraverse(this.nodesInOrder);
            console.log(this.nodesInOrder);
            traverse && shortestDistance(this.shortestPathNodesInOrder, this.isStart, this.isTarget, this.allNodes);
        }
    }
}

export default Board