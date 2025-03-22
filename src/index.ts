import { getBoard } from "./board/factory/getBoard.js";
import { renderBoard } from "./board/ui/renderBoard.js";

renderBoard(getBoard(6));
