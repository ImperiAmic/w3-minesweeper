import { Board } from "../types.js";
import { getRow } from "../row/factory/getRow.js";

export const getBoard = (boardDimension: number): Board => {
  const boardDimensionInteger = Math.round(boardDimension);

  const board: Board = [];

  if (boardDimensionInteger < 3) {
    throw new Error("Board minimum dimension must be 3");
  }

  for (
    let rowPosition = 0;
    rowPosition < boardDimensionInteger;
    rowPosition++
  ) {
    const row = getRow(boardDimensionInteger);

    row.forEach((cell) => {
      cell.rowPosition = rowPosition;
    });

    board[rowPosition] = row;
  }
  return board;
};
