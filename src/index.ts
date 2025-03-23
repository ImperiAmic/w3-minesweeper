import { setAdjacentMinesTotal } from "./board/adjacent-mines/setAdjacentMinesTotal.js";
import { getBoard } from "./board/factory/getBoard.js";
import { renderAllMines } from "./board/ui/renderAllMines.js";
import { renderBoard } from "./board/ui/renderBoard.js";

const board = getBoard(6);

renderBoard(setAdjacentMinesTotal(board));
renderAllMines();
