import { getBoard } from "../../factory/getBoard";
import { setAdjacentMinesTotal } from "../setAdjacentMinesTotal";

describe("Given the function setAdjacentMinesTotal", () => {
  describe("When it receives a board of 3x3", () => {
    test("Then it should return the same board", () => {
      const board = getBoard(3);

      const actualSettedAdjacentMinesTotal = setAdjacentMinesTotal(board);

      expect(actualSettedAdjacentMinesTotal).toStrictEqual(board);
    });
  });
});
