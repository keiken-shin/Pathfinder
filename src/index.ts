import Board from './components/board';
import "./style.scss"

// Get Height of other elements in body
const headerHeight: number = Number(document.querySelector(".header")?.clientHeight);
const contentHeight: number = Number(document.querySelector(".description")?.clientHeight) + Number(document.querySelector(".intro")?.clientHeight);

// Obtain height and width of board
let height: number = Math.floor((Number(document.documentElement.scrollHeight) - headerHeight - contentHeight) / 28);
let width: number = Math.floor(Number(document.documentElement.clientWidth) / 25);

const board = new Board(height, width);
board.initialize();