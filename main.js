/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/algorithms/unweighted/breadth-first-search.ts":
/*!**********************************************************************!*\
  !*** ./src/components/algorithms/unweighted/breadth-first-search.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_neighbors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-neighbors */ "./src/components/algorithms/unweighted/get-neighbors.ts");

const breadthFirstSearch = (listOfNodes, startNode, targetNode, grid, nodesInOrder) => {
    if (startNode === "" || targetNode === "" || startNode === targetNode)
        return [];
    // Initialize previousNode for all nodes
    for (const nodeKey in listOfNodes) {
        listOfNodes[nodeKey].previousNode = null;
    }
    const queue = [listOfNodes[startNode]];
    const exploredNode = { startNode: true };
    while (queue.length) {
        const currentNode = queue.shift();
        nodesInOrder.push(currentNode);
        currentNode.status = "visited";
        if (currentNode.id === targetNode)
            return queue;
        const currentNeighbors = (0,_get_neighbors__WEBPACK_IMPORTED_MODULE_0__["default"])(currentNode.id, listOfNodes, grid, "BFS");
        currentNeighbors.forEach(neighbor => {
            const neighborNode = listOfNodes[neighbor];
            if (!exploredNode[neighbor]) {
                exploredNode[neighbor] = true;
                neighborNode.previousNode = currentNode;
                queue.push(neighborNode);
            }
        });
        console.log(nodesInOrder, queue);
    }
    return queue;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (breadthFirstSearch);


/***/ }),

/***/ "./src/components/algorithms/unweighted/depth-first-search.ts":
/*!********************************************************************!*\
  !*** ./src/components/algorithms/unweighted/depth-first-search.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_neighbors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-neighbors */ "./src/components/algorithms/unweighted/get-neighbors.ts");

const depthFirstSearch = (listOfNodes, startNode, targetNode, grid, nodesInOrder) => {
    if (startNode === "" || targetNode === "" || startNode === targetNode)
        return [];
    const stack = [listOfNodes[startNode]];
    const exploredNode = { startNode: true };
    while (stack.length) {
        const currentNode = stack.pop();
        exploredNode[currentNode.id] = true;
        nodesInOrder.push(currentNode);
        currentNode.status = "visited";
        if (currentNode.id === targetNode)
            return stack;
        const currentNeighbors = (0,_get_neighbors__WEBPACK_IMPORTED_MODULE_0__["default"])(currentNode.id, listOfNodes, grid, "DFS");
        currentNeighbors.forEach(neighbor => {
            if (!exploredNode[neighbor]) {
                listOfNodes[neighbor].previousNode = currentNode;
                stack.push(listOfNodes[neighbor]);
            }
        });
    }
    return stack;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (depthFirstSearch);


/***/ }),

/***/ "./src/components/algorithms/unweighted/get-neighbors.ts":
/*!***************************************************************!*\
  !*** ./src/components/algorithms/unweighted/get-neighbors.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getNeighbors = (nodeId, listOfNodes, grid, type = "DFS") => {
    const coordinates = nodeId.split("-");
    const x = parseInt(coordinates[0]);
    const y = parseInt(coordinates[1]);
    const neighbor = [];
    let potentialNeighbor;
    // if there exist a row above current row and current col idx in that row
    if (grid[x - 1] && grid[x - 1][y]) {
        potentialNeighbor = `${(x - 1).toString()}-${y.toString()}`; // make that coords potential neighbor
        if (listOfNodes[potentialNeighbor].status !== "wall") {
            type === "DFS" ? neighbor.unshift(potentialNeighbor) : neighbor.push(potentialNeighbor); // Add potentialNeighbor at the beginning of neighbor array if node is not wall
        }
    }
    // if there exist next column in current row
    if (grid[x][y + 1]) {
        potentialNeighbor = `${x.toString()}-${(y + 1).toString()}`; // make that coords potential neighbor
        if (listOfNodes[potentialNeighbor].status !== "wall") {
            type === "DFS" ? neighbor.unshift(potentialNeighbor) : neighbor.push(potentialNeighbor);
        }
    }
    if (grid[x + 1] && grid[x + 1][y]) {
        potentialNeighbor = `${(x + 1).toString()}-${y.toString()}`; // make that coords potential neighbor
        if (listOfNodes[potentialNeighbor].status !== "wall") {
            type === "DFS" ? neighbor.unshift(potentialNeighbor) : neighbor.push(potentialNeighbor);
        }
    }
    if (grid[x][y - 1]) {
        potentialNeighbor = `${x.toString()}-${(y - 1).toString()}`; // make that coords potential neighbor
        if (listOfNodes[potentialNeighbor].status !== "wall") {
            type === "DFS" ? neighbor.unshift(potentialNeighbor) : neighbor.push(potentialNeighbor);
        }
    }
    return neighbor;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNeighbors);


/***/ }),

/***/ "./src/components/animations/index.ts":
/*!********************************************!*\
  !*** ./src/components/animations/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_ANIMATION_TIME: () => (/* binding */ NODE_ANIMATION_TIME),
/* harmony export */   nodeTraverse: () => (/* reexport safe */ _node_traverse__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   shortestDistance: () => (/* reexport safe */ _node_shortest_distance__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _node_traverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-traverse */ "./src/components/animations/node-traverse.ts");
/* harmony import */ var _node_shortest_distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-shortest-distance */ "./src/components/animations/node-shortest-distance.ts");
const NODE_ANIMATION_TIME = 12;




/***/ }),

/***/ "./src/components/animations/node-shortest-distance.ts":
/*!*************************************************************!*\
  !*** ./src/components/animations/node-shortest-distance.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/components/animations/index.ts");

const shortestDistance = (nodesInShortestOrder, isStart, isTarget, allNodes) => {
    let currentNode = allNodes[isTarget];
    const startNode = allNodes[isStart];
    /*
        Looping through while current node is not equal to start node
        to get the shortest route that it has to traverse to reach its destination
    */
    while (currentNode !== startNode) {
        nodesInShortestOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
        if (currentNode === startNode)
            nodesInShortestOrder.unshift(currentNode);
    }
    // Animating nodesInShortestOrder
    for (let i = 0; i < nodesInShortestOrder.length; i++) {
        setTimeout(() => {
            const id = nodesInShortestOrder[i].id;
            const node = document.getElementById(id);
            node.classList.contains("isStart") || node.classList.contains("isTarget")
                ? node.classList.add("shortest-path")
                : node.className = "shortest-path";
        }, _index__WEBPACK_IMPORTED_MODULE_0__.NODE_ANIMATION_TIME * (2 * i));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortestDistance);


/***/ }),

/***/ "./src/components/animations/node-traverse.ts":
/*!****************************************************!*\
  !*** ./src/components/animations/node-traverse.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/components/animations/index.ts");


const nodeTraverse = (nodesInOrder) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        for (let i = 0; i < nodesInOrder.length; i++) {
            setTimeout(() => {
                const id = nodesInOrder[i].id;
                const node = document.getElementById(id);
                node.classList.contains("isStart") || node.classList.contains("isTarget")
                    ? node.classList.add("visited")
                    : node.className = "visited";
                if (i === nodesInOrder.length - 1)
                    resolve(true);
            }, _index__WEBPACK_IMPORTED_MODULE_0__.NODE_ANIMATION_TIME * i);
        }
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeTraverse);


/***/ }),

/***/ "./src/components/board.ts":
/*!*********************************!*\
  !*** ./src/components/board.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _components_algorithms_unweighted_depth_first_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/algorithms/unweighted/depth-first-search */ "./src/components/algorithms/unweighted/depth-first-search.ts");
/* harmony import */ var _components_animations_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/animations/index */ "./src/components/animations/index.ts");
/* harmony import */ var _components_animations_node_traverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/animations/node-traverse */ "./src/components/animations/node-traverse.ts");
/* harmony import */ var _components_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/node */ "./src/components/node.ts");
/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/data */ "./src/components/data.ts");
/* harmony import */ var _algorithms_unweighted_breadth_first_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithms/unweighted/breadth-first-search */ "./src/components/algorithms/unweighted/breadth-first-search.ts");







class Board {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.isStart = "";
        this.isTarget = "";
        this.allNodes = {};
        this.grid = [];
        this.nodesInOrder = [];
        this.shortestPathNodesInOrder = [];
        this.visualizeComponent = (document.querySelector("#visualize"));
        this.descriptionComponent = (document.querySelector(".description"));
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
        const board = document.querySelector("#board"); // Select Board Elements (! -> mandatory)
        const tbody = document.createElement("tbody");
        for (let row = 0; row < this.height; row++) {
            const currentArrayRow = [];
            // Create table row element
            const currentRow = document.createElement("tr");
            currentRow.id = `row ${row}`;
            for (let col = 0; col < this.width; col++) {
                const nodeId = `${row}-${col}`;
                let nodeStatus, newNode;
                // Calculating start and target position
                if (row === this.initialStart.row &&
                    col === this.initialStart.col) {
                    nodeStatus = "isStart"; // marking current node as start node
                    this.isStart = nodeId; // storing current node in isStart
                }
                else if (row === this.initialTarget.row &&
                    col === this.initialTarget.col) {
                    nodeStatus = "isTarget"; // marking current node as target node
                    this.isTarget = nodeId; // storing current node in isTarget
                }
                else {
                    nodeStatus = "unvisited"; // marking rest as unvisited
                }
                newNode = new _components_node__WEBPACK_IMPORTED_MODULE_3__.Node(row, col, nodeStatus); // Creating instance of node
                currentArrayRow.push(newNode); // Pushing new instance in row array
                this.allNodes[nodeId] = newNode; // Storing it inside allNodes
                // Creating board cell
                const tableCell = document.createElement("td");
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
            const dataVisualize = this.visualizeComponent.getAttribute("data-visualize");
            if (dataVisualize !== "") {
                this.drawShortestPath(dataVisualize);
            }
        });
    }
    toggleSwitch() {
        const algorithmsList = document.querySelector("#algorithms-list");
        algorithmsList.addEventListener("mousedown", (e) => {
            const el = e.target;
            const dataId = el.dataset.id;
            if (dataId) {
                this.visualizeComponent.textContent = `Visualize ${dataId}`;
                this.visualizeComponent.setAttribute("data-visualize", `${dataId}`);
                this.descriptionComponent.innerHTML = _components_data__WEBPACK_IMPORTED_MODULE_4__.DATA[dataId];
            }
        });
    }
    drawShortestPath(dataVisualize) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            switch (dataVisualize) {
                case "DFS":
                    (0,_components_algorithms_unweighted_depth_first_search__WEBPACK_IMPORTED_MODULE_0__["default"])(this.allNodes, this.isStart, this.isTarget, this.grid, this.nodesInOrder);
                    break;
                case "BFS":
                    (0,_algorithms_unweighted_breadth_first_search__WEBPACK_IMPORTED_MODULE_5__["default"])(this.allNodes, this.isStart, this.isTarget, this.grid, this.nodesInOrder);
                    break;
            }
            const traverse = yield (0,_components_animations_node_traverse__WEBPACK_IMPORTED_MODULE_2__["default"])(this.nodesInOrder);
            traverse &&
                (0,_components_animations_index__WEBPACK_IMPORTED_MODULE_1__.shortestDistance)(this.shortestPathNodesInOrder, this.isStart, this.isTarget, this.allNodes);
        });
    }
    eventListeners() {
        Object.entries(this.allNodes).map((node) => {
            const [key, value] = node; // "key" represents ID & "value" represents NODE
            const currentElement = document.getElementById(key); // Not using query-selector as it does not support id starting with digit
            // On mouse press event
            currentElement.addEventListener("mousedown", (e) => {
                const target = e.target;
                this.mouseDown = true;
                if (value.status === "isStart" || value.status === "isTarget") {
                    this.pressedNodeStatus = value.status;
                }
                else {
                    this.changeNormalNode(target, value);
                    console.log(node);
                }
            });
            // On mouse release event
            currentElement.addEventListener("mouseup", () => {
                this.mouseDown = false;
                if (this.pressedNodeStatus === "isStart") {
                    this.isStart = key;
                }
                else if (this.pressedNodeStatus === "isTarget") {
                    this.isTarget = key;
                }
                this.pressedNodeStatus = "normal";
            });
            // On mouse hovering event
            currentElement.addEventListener("mouseenter", (e) => {
                if (this.mouseDown) {
                    const target = e.target;
                    if (this.mouseDown && this.pressedNodeStatus !== "normal") {
                        this.changeSpecialNode(target, value);
                        if (this.pressedNodeStatus === "isStart") {
                            this.isStart = key;
                        }
                        else if (this.pressedNodeStatus === "isTarget") {
                            this.isTarget = key;
                        }
                    }
                    else {
                        this.changeNormalNode(target, value);
                    }
                }
            });
            // On mouse leave event
            currentElement.addEventListener("mouseleave", (e) => {
                const target = e.target;
                if (this.mouseDown && this.pressedNodeStatus !== "normal") {
                    this.changeSpecialNode(target, value);
                }
            });
        });
    }
    // Changing normal node role from unvisited to wall or v.v.
    changeNormalNode(target, node) {
        const relevantStatus = ["isStart", "isTarget"];
        if (!relevantStatus.includes(node.status)) {
            target.className =
                node.status === "unvisited" ? "wall" : "unvisited";
            node.status =
                target.className === "unvisited" ? "unvisited" : "wall";
        }
    }
    // Changing special (i.e., start, target) node position
    changeSpecialNode(target, node) {
        let previousElement = null;
        // If there exist previous switched node get that element
        this.previouslySwitchedNode !== null &&
            (previousElement = document.getElementById(this.previouslySwitchedNode.id));
        if (node.status !== "isStart" && node.status !== "isTarget") {
            if (this.previouslySwitchedNode) {
                this.previouslySwitchedNode.status =
                    this.previouslyPressedNodeStatus;
                previousElement.className = this.previouslyPressedNodeStatus;
                this.previouslySwitchedNode = null;
                this.previouslyPressedNodeStatus = node.status;
                target.className = this.pressedNodeStatus;
                node.status = this.pressedNodeStatus;
            }
        }
        else if (node.status !== this.pressedNodeStatus) {
            if (this.previouslySwitchedNode) {
                this.previouslySwitchedNode.status = this.pressedNodeStatus;
                previousElement.className = this.pressedNodeStatus;
            }
        }
        else if (node.status === this.pressedNodeStatus) {
            this.previouslySwitchedNode = node;
            target.className = this.previouslyPressedNodeStatus;
            node.status = this.previouslyPressedNodeStatus;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);


/***/ }),

/***/ "./src/components/data.ts":
/*!********************************!*\
  !*** ./src/components/data.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATA: () => (/* binding */ DATA)
/* harmony export */ });
const DATA = {
    "DFS": "Depth-first Search is <strong>&nbsp; unweighted &nbsp;</strong> and <strong>&nbsp; does not guarantee &nbsp;</strong> the shortest path!",
    "BFS": "Breath-first Search is <strong>&nbsp; unweighted &nbsp;</strong> and <strong>&nbsp; does not guarantee &nbsp;</strong> the shortest path!"
};


/***/ }),

/***/ "./src/components/node.ts":
/*!********************************!*\
  !*** ./src/components/node.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
    constructor(row, column, status) {
        this.row = row;
        this.column = column;
        this.status = status;
        this.id = `${row}-${column}`;
        this.distance = 0;
        this.previousNode = null;
    }
}



/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/board */ "./src/components/board.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/style.scss */ "./src/style.scss");
var _a, _b, _c;


// Get Height of other elements in body
const HEADER_HEIGHT = Number((_a = document.querySelector(".header")) === null || _a === void 0 ? void 0 : _a.clientHeight);
const CONTENT_HEIGHT = Number((_b = document.querySelector(".description")) === null || _b === void 0 ? void 0 : _b.clientHeight) + Number((_c = document.querySelector(".intro")) === null || _c === void 0 ? void 0 : _c.clientHeight);
// Obtain height and width of board
const BOARD_HEIGHT = Math.floor((Number(document.documentElement.scrollHeight) - HEADER_HEIGHT - CONTENT_HEIGHT) / 28);
const BOARD_WIDTH = Math.floor(Number(document.documentElement.clientWidth) / 25);
const BOARD = new _components_board__WEBPACK_IMPORTED_MODULE_0__["default"](BOARD_HEIGHT, BOARD_WIDTH);
BOARD.initialize();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map