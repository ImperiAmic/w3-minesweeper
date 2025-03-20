import { Cell } from "../types.js";

const getCell = (mineRandomness = 15): Cell => {
  const randomness = Math.random() * 100;

  const cell: Cell = {
    hasMine: false,
    isOpen: false,
    adjacentMinesTotal: 0,
  };

  if (randomness < mineRandomness) {
    cell.hasMine = true;
  }

  return cell;
};

export default getCell;
