import { Board } from "./data/types.js";
import { getMine } from "./getMine.js";

export const getMinedBoard = (board: Board): void => {
  board.forEach((row) => {
    row.forEach((cell) => {
      getMine(cell);
    });
  });
};
