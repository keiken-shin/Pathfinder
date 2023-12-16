import Board from '@/components/board';
import "@/style.scss";

// Get Height of other elements in body
const HEADER_HEIGHT: number = Number(document.querySelector(".header")?.clientHeight);
const CONTENT_HEIGHT: number = Number(document.querySelector(".description")?.clientHeight) + Number(document.querySelector(".intro")?.clientHeight);

// Obtain height and width of board
const BOARD_HEIGHT: number = Math.floor((Number(document.documentElement.scrollHeight) - HEADER_HEIGHT - CONTENT_HEIGHT) / 28);
const BOARD_WIDTH: number = Math.floor(Number(document.documentElement.clientWidth) / 25);

const BOARD = new Board(BOARD_HEIGHT, BOARD_WIDTH);
BOARD.initialize();