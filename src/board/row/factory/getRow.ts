import getCell from "../../../cell/factory/getCell.js";
import { Row } from "../types.js";

export const getRow = (cellsNumber: number): Row => {
  const cellsNumberInteger = Math.round(cellsNumber);

  const row: Row = [];

  if (cellsNumberInteger < 3) {
    throw new Error("Columns minimum number must be 3");
  }

  for (
    let columnPosition = 0;
    columnPosition < cellsNumberInteger;
    columnPosition++
  ) {
    const cell = getCell();
    cell.columnPosition = columnPosition;
    row[columnPosition] = cell;
  }

  return row;
};
