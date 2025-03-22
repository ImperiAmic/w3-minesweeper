import { Cell } from "../types.js";

const getCell = (mineRandomness = 15): Cell => {
  const randomnessFactor = Math.random() * 100;

  if (randomnessFactor < mineRandomness) {
    const cell: Cell = {
      hasMine: true,
      isOpen: false,
      adjacentMinesTotal: 0,
    };

    return cell;
  }

  const cell: Cell = {
    hasMine: false,
    isOpen: false,
    adjacentMinesTotal: 0,
  };

  return cell;
};

export default getCell;
