import { getRow } from "../getRow";
import { Cell } from "../data/types";

const cell: Cell = {
  hasMine: false,
  adjacentMinesTotal: 0,
  isOpen: false,
};

describe("Given the function getRow", () => {
  describe("When it receives 3", () => {
    test("Then it should return a row of 3 cells", () => {
      const cellsNumber = 3;
      const expectedRow = [cell, cell, cell];

      const actualRow = getRow(cellsNumber);

      expect(expectedRow).toStrictEqual(actualRow);
    });
  });

  describe("When it receives 4", () => {
    test("Then it should return a row of 6 cells", () => {
      const cellsNumber = 4;
      const expectedRow = [cell, cell, cell, cell];

      const actualRow = getRow(cellsNumber);

      expect(expectedRow).toStrictEqual(actualRow);
    });
  });

  describe("When it receives 5.9", () => {
    test("Then it should return a row of 6 cells", () => {
      const cellsNumber = 5.9;
      const expectedRow = [cell, cell, cell, cell, cell, cell];

      const actualRow = getRow(cellsNumber);

      expect(expectedRow).toStrictEqual(actualRow);
    });
  });

  describe("When it receives 6.1", () => {
    test("Then it should return a row of 6 cells", () => {
      const cellsNumber = 6.1;
      const expectedRow = [cell, cell, cell, cell, cell, cell];

      const actualRow = getRow(cellsNumber);

      expect(expectedRow).toStrictEqual(actualRow);
    });
  });

  describe("When it receives 2", () => {
    test("Then it should throw an error", () => {
      const cellsNumber = 2;

      expect(() => {
        getRow(cellsNumber);
      }).toThrow();
    });
  });

  describe("When it receives 0", () => {
    test("Then it should throw an error", () => {
      const cellsNumber = 0;

      expect(() => {
        getRow(cellsNumber);
      }).toThrow();
    });
  });
});
