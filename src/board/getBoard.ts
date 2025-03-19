import { Board } from "./data/types";
import { getRow } from "./getRow";

export const getBoard = (boardDimension: number): Board => {
  const boardDimensionInteger = Math.round(boardDimension);

  const board: Board = [];

  if (boardDimensionInteger < 3) {
    throw new Error("Board minimum dimension must be 3");
  }

  for (let row = 0; row < boardDimensionInteger; row++) {
    board[row] = getRow(boardDimensionInteger);
  }

  return board;
};
