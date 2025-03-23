import { Board } from "../types.js";
import { getAdjacentMinesTotal } from "./getAdjacentMinesTotal.js";

export const setAdjacentMinesTotal = (board: Board): Board => {
  board.forEach((row) => {
    row.forEach((cell) => {
      cell.adjacentMinesTotal = getAdjacentMinesTotal(cell, board);
    });
  });

  return board;
};
