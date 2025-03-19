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

/*
export const getHardBoard = (boardDimension: number): Board => {
  const board: Board = [];

  if (boardDimension < 3) {
    throw new Error("Board minimum dimension should be 3");
  }

  for (let row = 0; row < boardDimension; row++) {
    board[row] = [];
    for (let column = 0; column < boardDimension; column++) {
      const cell: Cell = {
        hasMine: false,
        adjacentMinesTotal: 0,
        isOpen: false,
      };
      board[row][column] = cell;
    }
  }

  return board;
};
*/
