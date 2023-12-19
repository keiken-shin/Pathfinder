import depthFirstSearch from "@/components/algorithms/unweighted/depth-first-search";
import { shortestDistance } from "@/components/animations/index";
import nodeTraverse from "@/components/animations/node-traverse";
import { CustomNode, Node, ListOfCustomNode } from "@/components/node";
import { DATA } from "@/components/data";
import breadthFirstSearch from "./algorithms/unweighted/breadth-first-search";

class Board {
    isStart: string; // Starting Point
    isTarget: string; // Target Point
    allNodes: ListOfCustomNode; // Contains instance of all the nodes present in board with "node_id" as "key" and "Node itself" as "value"
    grid: CustomNode[][]; // Storing all table rows "Array<Array<CustomNode>>"
    nodesInOrder: CustomNode[]; // Stores node in an order in which it is traversed
    shortestPathNodesInOrder: CustomNode[]; // Contains shortest path nodes

    visualizeComponent: HTMLElement; // Getting Visualize Button
    descriptionComponent: HTMLElement; // Getting Description Component

    initialStart: { row: number; col: number }; // Initializing start node
    initialTarget: { row: number; col: number }; // Initializing target node

    pressedNodeStatus: string; // On mouse event - stores pressed node status
    mouseDown: boolean; // To check whether the mouse is pressed or not
    previouslySwitchedNode: CustomNode | null; // Tracking previously switched node
    previouslyPressedNodeStatus: string; // Tracking previously pressed node status

    constructor(public height: number, public width: number) {
        this.isStart = "";
        this.isTarget = "";
        this.allNodes = {};
        this.grid = [];
        this.nodesInOrder = [];
        this.shortestPathNodesInOrder = [];

        this.visualizeComponent = <HTMLElement>(
            document.querySelector("#visualize")!
        );
        this.descriptionComponent = <HTMLElement>(
            document.querySelector(".description")!
        );

        this.initialStart = {
            row: Math.floor(this.height / 2),
            col: Math.floor(this.width / 4),
        };
        this.initialTarget = {
            row: Math.floor(this.height / 2),
            col: Math.floor((3 * this.width) / 4),
        };

        this.pressedNodeStatus = "";
        this.mouseDown = false;
        this.previouslySwitchedNode = null;
        this.previouslyPressedNodeStatus = "";
    }

    initialize() {
        this.createGrid();
        this.toggleSwitch();
        this.eventListeners();
    }

    createGrid() {
        const board: Element = document.querySelector("#board")!; // Select Board Elements (! -> mandatory)
        const tbody: Element = document.createElement("tbody");

        for (let row: number = 0; row < this.height; row++) {
            const currentArrayRow: Node[] = [];

            // Create table row element
            const currentRow: HTMLTableRowElement =
                document.createElement("tr");
            currentRow.id = `row ${row}`;

            for (let col: number = 0; col < this.width; col++) {
                const nodeId: string = `${row}-${col}`;

                let nodeStatus: string, newNode: CustomNode;

                // Calculating start and target position
                if (
                    row === this.initialStart.row &&
                    col === this.initialStart.col
                ) {
                    nodeStatus = "isStart"; // marking current node as start node
                    this.isStart = nodeId; // storing current node in isStart
                } else if (
                    row === this.initialTarget.row &&
                    col === this.initialTarget.col
                ) {
                    nodeStatus = "isTarget"; // marking current node as target node
                    this.isTarget = nodeId; // storing current node in isTarget
                } else {
                    nodeStatus = "unvisited"; // marking rest as unvisited
                }

                newNode = new Node(row, col, nodeStatus); // Creating instance of node
                currentArrayRow.push(newNode); // Pushing new instance in row array
                this.allNodes[nodeId] = newNode; // Storing it inside allNodes

                // Creating board cell
                const tableCell: HTMLTableDataCellElement =
                    document.createElement("td");
                tableCell.id = nodeId;
                tableCell.classList.add(nodeStatus);

                currentRow.append(tableCell);
            }
            this.grid.push(currentArrayRow);
            tbody.append(currentRow);
            board.append(tbody);
        }

        // Visualize
        this.visualizeComponent.addEventListener("click", () => {
            const dataVisualize: string =
                this.visualizeComponent.getAttribute("data-visualize")!;
            if (dataVisualize !== "") {
                this.drawShortestPath(dataVisualize);
            }
        });
    }

    toggleSwitch() {
        const algorithmsList = document.querySelector("#algorithms-list")!;

        algorithmsList.addEventListener("mousedown", (e) => {
            const el = e.target as HTMLElement;
            const dataId = el.dataset.id;

            if (dataId) {
                this.visualizeComponent.textContent = `Visualize ${dataId}`;
                this.visualizeComponent.setAttribute(
                    "data-visualize",
                    `${dataId}`
                );
                this.descriptionComponent.innerHTML = DATA[dataId];
            }
        });
    }

    async drawShortestPath(dataVisualize: string) {
        switch(dataVisualize) {
            case "DFS":
                depthFirstSearch(
                    this.allNodes,
                    this.isStart,
                    this.isTarget,
                    this.grid,
                    this.nodesInOrder
                );
                break;

            case "BFS":
                breadthFirstSearch(
                    this.allNodes,
                    this.isStart,
                    this.isTarget,
                    this.grid,
                    this.nodesInOrder
                )
                break;
        }

        const traverse = await nodeTraverse(this.nodesInOrder);

        traverse &&
            shortestDistance(
                this.shortestPathNodesInOrder,
                this.isStart,
                this.isTarget,
                this.allNodes
            );
    }

    eventListeners() {
        Object.entries(this.allNodes).map((node) => {
            const [key, value] = node; // "key" represents ID & "value" represents NODE
            const currentElement: HTMLElement = document.getElementById(key)!; // Not using query-selector as it does not support id starting with digit

            // On mouse press event
            currentElement.addEventListener("mousedown", (e) => {
                const target: HTMLElement = <HTMLElement>e.target;

                this.mouseDown = true;

                if (value.status === "isStart" || value.status === "isTarget") {
                    this.pressedNodeStatus = value.status;
                } else {
                    this.changeNormalNode(target, value);
                    console.log(node);
                }
            });

            // On mouse release event
            currentElement.addEventListener("mouseup", () => {
                this.mouseDown = false;

                if (this.pressedNodeStatus === "isStart") {
                    this.isStart = key;
                } else if (this.pressedNodeStatus === "isTarget") {
                    this.isTarget = key;
                }

                this.pressedNodeStatus = "normal";
            });

            // On mouse hovering event
            currentElement.addEventListener("mouseenter", (e) => {
                if (this.mouseDown) {
                    const target: HTMLElement = <HTMLElement>e.target;
                    if (this.mouseDown && this.pressedNodeStatus !== "normal") {
                        this.changeSpecialNode(target, value);
                        if (this.pressedNodeStatus === "isStart") {
                            this.isStart = key;
                        } else if (this.pressedNodeStatus === "isTarget") {
                            this.isTarget = key;
                        }
                    } else {
                        this.changeNormalNode(target, value);
                    }
                }
            });

            // On mouse leave event
            currentElement.addEventListener("mouseleave", (e) => {
                const target: HTMLElement = <HTMLElement>e.target;

                if (this.mouseDown && this.pressedNodeStatus !== "normal") {
                    this.changeSpecialNode(target, value);
                }
            });
        });
    }

    // Changing normal node role from unvisited to wall or v.v.
    changeNormalNode(target: HTMLElement, node: CustomNode) {
        const relevantStatus = ["isStart", "isTarget"];

        if (!relevantStatus.includes(node.status)) {
            target.className =
                node.status === "unvisited" ? "wall" : "unvisited";
            node.status =
                target.className === "unvisited" ? "unvisited" : "wall";
        }
    }

    // Changing special (i.e., start, target) node position
    changeSpecialNode(target: HTMLElement, node: CustomNode) {
        let previousElement: HTMLElement | null = null;

        // If there exist previous switched node get that element
        this.previouslySwitchedNode !== null &&
            (previousElement = document.getElementById(
                this.previouslySwitchedNode.id
            ));

        if (node.status !== "isStart" && node.status !== "isTarget") {
            if (this.previouslySwitchedNode) {
                this.previouslySwitchedNode.status =
                    this.previouslyPressedNodeStatus;
                previousElement!.className = this.previouslyPressedNodeStatus;

                this.previouslySwitchedNode = null;

                this.previouslyPressedNodeStatus = node.status;
                target.className = this.pressedNodeStatus;
                node.status = this.pressedNodeStatus;
            }
        } else if (node.status !== this.pressedNodeStatus) {
            if (this.previouslySwitchedNode) {
                this.previouslySwitchedNode.status = this.pressedNodeStatus;
                previousElement!.className = this.pressedNodeStatus;
            }
        } else if (node.status === this.pressedNodeStatus) {
            this.previouslySwitchedNode = node;
            target.className = this.previouslyPressedNodeStatus;
            node.status = this.previouslyPressedNodeStatus;
        }
    }
}

export default Board;
