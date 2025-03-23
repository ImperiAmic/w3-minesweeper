import { setAdjacentMinesTotal } from "./board/adjacent-mines/setAdjacentMinesTotal.js";
import { getBoard } from "./board/factory/getBoard.js";
import { renderGameOver } from "./board/ui/renderGameOver.js";
import { renderBoard } from "./board/ui/renderBoard.js";

const board = getBoard(6);
const adjacentMinesTotalBoard = setAdjacentMinesTotal(board);
renderBoard(adjacentMinesTotalBoard);
renderGameOver();
