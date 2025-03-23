import { Cell } from "../../cell/types";
import { Board } from "../types";

export const getAdjacentMinesTotal = (cell: Cell, board: Board): number => {
  const rowPosition = cell.rowPosition;
  const columnPosition = cell.columnPosition;

  let adjacentMinesTotal = 0;

  const neighborPositions = [
    { row: -1, column: -1 },
    { row: -1, column: 0 },
    { row: -1, column: +1 },
    { row: 0, column: -1 },
    { row: 0, column: +1 },
    { row: +1, column: -1 },
    { row: +1, column: 0 },
    { row: +1, column: +1 },
  ];

  neighborPositions.forEach((position) => {
    const neighborRow = rowPosition + position.row;
    const neighborColumn = columnPosition + position.column;

    const limitPositions =
      neighborRow >= 0 &&
      neighborRow < board.length &&
      neighborColumn >= 0 &&
      neighborColumn < board[neighborRow].length;

    if (limitPositions) {
      const hasCellMine = board[neighborRow][neighborColumn].hasMine;

      if (hasCellMine) {
        adjacentMinesTotal++;
      }
    }
  });

  return adjacentMinesTotal;
};
