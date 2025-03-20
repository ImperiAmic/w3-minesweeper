import { Cell, Row } from "./data/types";

export const getRow = (cellsNumber: number): Row => {
  const cellsNumberInteger = Math.round(cellsNumber);

  const row: Row = [];
  const cell: Cell = {
    hasMine: false,
    adjacentMinesTotal: 0,
    isOpen: false,
  };

  if (cellsNumberInteger < 3) {
    throw new Error("Columns minimum number must be 3");
  }

  for (let column = 0; column < cellsNumberInteger; column++) {
    row[column] = cell;
  }

  return row;
};
