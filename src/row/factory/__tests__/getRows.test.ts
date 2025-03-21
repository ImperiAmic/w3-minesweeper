import { getRow } from "../getRow";

describe("Given the function getRow", () => {
  describe("When it receives 3", () => {
    test("Then it should return a row of 3 cells", () => {
      const cellsNumber = 3;
      const expectedCellsNumber = 3;

      const actualRow = getRow(cellsNumber);

      expect(expectedCellsNumber).toBe(actualRow.length);
    });
  });

  describe("When it receives 4", () => {
    test("Then it should return a row of 6 cells", () => {
      const cellsNumber = 4;
      const expectedCellsNumber = 4;

      const actualRow = getRow(cellsNumber);

      expect(expectedCellsNumber).toBe(actualRow.length);
    });
  });

  describe("When it receives 5.9", () => {
    test("Then it should return a row of 6 cells", () => {
      const cellsNumber = 5.9;
      const expectedCellsNumber = 6;

      const actualRow = getRow(cellsNumber);

      expect(expectedCellsNumber).toBe(actualRow.length);
    });
  });

  describe("When it receives 6.1", () => {
    test("Then it should return a row of 6 cells", () => {
      const cellsNumber = 6.1;
      const expectedCellsNumber = 6;

      const actualRow = getRow(cellsNumber);

      expect(expectedCellsNumber).toBe(actualRow.length);
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
