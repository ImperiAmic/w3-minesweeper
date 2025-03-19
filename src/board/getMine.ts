import { Cell } from "./data/types";
import { getRandomNumber } from "./getRandomNumber.js";

const cell: Cell = {
  hasMine: false,
  adjacentMinesTotal: 0,
  isOpen: false,
};

export const getMine = (cell: Cell, mineProportion = 15): Cell => {
  if (getRandomNumber(1, 100) < mineProportion) {
    cell.hasMine = true;
  }

  return cell;
};
