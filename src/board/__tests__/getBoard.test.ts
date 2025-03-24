import { getBoard } from "../factory/getBoard";

describe("Given the function getBoard", () => {
  describe("When it receives 3 as number of rows", () => {
    test("Then it should return a board of 3 rows with 3 cells each row", () => {
      const boardDimension = 3;

      const actualBoard = getBoard(boardDimension);

      expect(actualBoard.length).toBe(boardDimension);
    });
  });

  describe("When it receives 4 as number of rows", () => {
    test("Then it should return a board of 4 rows with 4 cells each row", () => {
      const boardDimension = 4;

      const actualBoard = getBoard(boardDimension);

      expect(actualBoard.length).toBe(boardDimension);
    });
  });

  describe("When it receives 5.9 as number of rows", () => {
    test("Then it should return a board of 6 rows with 6 cells each row", () => {
      const boardDimension = 5.9;
      const expectedBoardDimension = 6;

      const actualBoard = getBoard(boardDimension);

      expect(actualBoard.length).toBe(expectedBoardDimension);
    });
  });

  describe("When it receives 6.1 as number of rows", () => {
    test("Then it should return a board of 6 rows with 6 cells each row", () => {
      const boardDimension = 6.1;
      const expectedBoardDimension = 6;

      const actualBoard = getBoard(boardDimension);

      expect(actualBoard.length).toBe(expectedBoardDimension);
    });
  });

  describe("When it receives 2 as number of rows", () => {
    test("Then it should return an error", () => {
      const boardDimension = 2;

      expect(() => {
        getBoard(boardDimension);
      }).toThrow();
    });
  });
});
