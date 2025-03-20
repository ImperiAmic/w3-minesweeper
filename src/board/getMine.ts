import { Cell } from "./data/types";
import { getRandomNumber } from "./getRandomNumber.js";

export const getMine = (cell: Cell, mineProportion = 15): Cell => {
  if (getRandomNumber(1, 100) < mineProportion) {
    cell.hasMine = true;
  }

  return cell;
};
