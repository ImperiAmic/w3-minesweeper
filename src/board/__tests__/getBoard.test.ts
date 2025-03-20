import { getBoard } from "../factory/getBoard";

describe("Given the function getBoard", () => {
  describe("When it receives 3", () => {
    test("Then it should return a board of 3 rows with 3 cells each row", () => {
      const boardDimension = 3;
      const expectedBoardDimension = 3;

      const actualBoard = getBoard(boardDimension);

      expect(expectedBoardDimension).toBe(actualBoard.length);
    });
  });

  describe("hen it receives 4", () => {
    test("Then it should return a board of 4 rows with 4 cells each row", () => {
      const boardDimension = 4;
      const expectedBoardDimension = 4;

      const actualBoard = getBoard(boardDimension);

      expect(expectedBoardDimension).toBe(actualBoard.length);
    });
  });

  describe("hen it receives 5.9", () => {
    test("Then it should return a board of 6 rows with 6 cells each row", () => {
      const boardDimension = 5.9;
      const expectedBoardDimension = 6;

      const actualBoard = getBoard(boardDimension);

      expect(expectedBoardDimension).toBe(actualBoard.length);
    });
  });

  describe("hen it receives 6.1", () => {
    test("Then it should return a board of 6 rows with 6 cells each row", () => {
      const boardDimension = 6.1;
      const expectedBoardDimension = 6;

      const actualBoard = getBoard(boardDimension);

      expect(expectedBoardDimension).toBe(actualBoard.length);
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
