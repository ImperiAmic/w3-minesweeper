import getCell from "../factory/getCell";
import { Cell } from "../types";

describe("Given the function getCell", () => {
  describe("When it receives a randomness factor of 100", () => {
    test("Then it should return a cell that has a mine", () => {
      const expectedCell: Cell = {
        hasMine: true,
        isOpen: false,
        adjacentMinesTotal: 0,
      };

      const actualCell = getCell(100);

      expect(actualCell).toStrictEqual(expectedCell);
    });
  });

  describe("When it receives a randomness factor of 0", () => {
    test("Then it should return a cell that does not have a mine", () => {
      const expectedCell: Cell = {
        hasMine: false,
        isOpen: false,
        adjacentMinesTotal: 0,
      };

      const actualCell = getCell(0);

      expect(actualCell).toStrictEqual(expectedCell);
    });
  });
});
