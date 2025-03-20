import { Row } from "../types.js";
import getCell from "../../cell/factory/getCell.js";

export const getRow = (cellsNumber: number): Row => {
  const cellsNumberInteger = Math.round(cellsNumber);

  const row: Row = [];

  if (cellsNumberInteger < 3) {
    throw new Error("Columns minimum number must be 3");
  }

  for (let column = 0; column < cellsNumberInteger; column++) {
    row[column] = getCell();
  }

  return row;
};
