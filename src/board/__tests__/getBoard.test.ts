import { getBoard } from "../getBoard";
import { Cell } from "../data/types";

const cell: Cell = {
  hasMine: false,
  adjacentMinesTotal: 0,
  isOpen: false,
};

describe("Given the function getBoard", () => {
  describe("When it receives 3", () => {
    test("Then it should return a board of 3 rows with 3 cells each row", () => {
      const boardDimension = 3;
      const expectedBoard = [
        [cell, cell, cell],
        [cell, cell, cell],
        [cell, cell, cell],
      ];

      const actualBoard = getBoard(boardDimension);

      expect(expectedBoard).toStrictEqual(actualBoard);
    });
  });

  describe("hen it receives 4", () => {
    test("Then it should return a board of 4 rows with 4 cells each row", () => {
      const boardDimension = 4;
      const expectedBoard = [
        [cell, cell, cell, cell],
        [cell, cell, cell, cell],
        [cell, cell, cell, cell],
        [cell, cell, cell, cell],
      ];

      const actualBoard = getBoard(boardDimension);

      expect(expectedBoard).toStrictEqual(actualBoard);
    });
  });

  describe("hen it receives 5.9", () => {
    test("Then it should return a board of 6 rows with 6 cells each row", () => {
      const boardDimension = 5.9;
      const expectedBoard = [
        [cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell],
      ];

      const actualBoard = getBoard(boardDimension);

      expect(expectedBoard).toStrictEqual(actualBoard);
    });
  });

  describe("hen it receives 6.1", () => {
    test("Then it should return a board of 6 rows with 6 cells each row", () => {
      const boardDimension = 6.1;
      const expectedBoard = [
        [cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell],
      ];

      const actualBoard = getBoard(boardDimension);

      expect(expectedBoard).toStrictEqual(actualBoard);
    });
  });

  describe("When it receives 2", () => {
    test("Then it should return an error", () => {
      const boardDimension = 2;

      expect(() => {
        getBoard(boardDimension);
      }).toThrow();
    });
  });

  describe("When it receives 0", () => {
    test("Then it should return an error", () => {
      const boardDimension = 0;

      expect(() => {
        getBoard(boardDimension);
      }).toThrow();
    });
  });
});
