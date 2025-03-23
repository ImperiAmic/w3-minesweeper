import { setAdjacentMinesTotal } from "./board/adjacent-mines/setAdjacentMinesTotal.js";
import { getBoard } from "./board/factory/getBoard.js";
import { renderBoard } from "./board/ui/renderBoard.js";

renderBoard(setAdjacentMinesTotal(getBoard(6)));
