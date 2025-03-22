import { getRow } from "../getRow";

describe("Given the function getRow", () => {
  describe("When it receives 3 as number of cells", () => {
    test("Then it should return a row of 3 cells", () => {
      const cellsNumber = 3;

      const actualRow = getRow(cellsNumber);

      expect(actualRow.length).toBe(cellsNumber);
    });
  });

  describe("When it receives 4 as number of cells", () => {
    test("Then it should return a row of 6 cells", () => {
      const cellsNumber = 4;

      const actualRow = getRow(cellsNumber);

      expect(actualRow.length).toBe(cellsNumber);
    });
  });

  describe("When it receives 5.9 as number of cells", () => {
    test("Then it should return a row of 6 cells", () => {
      const cellsNumber = 5.9;
      const expectedCellsNumber = 6;

      const actualRow = getRow(cellsNumber);

      expect(actualRow.length).toBe(expectedCellsNumber);
    });
  });

  describe("When it receives 6.1 as number of cells", () => {
    test("Then it should return a row of 6 cells", () => {
      const cellsNumber = 6.1;
      const expectedCellsNumber = 6;

      const actualRow = getRow(cellsNumber);

      expect(actualRow.length).toBe(expectedCellsNumber);
    });
  });

  describe("When it receives 2 as number of cells", () => {
    test("Then it should throw an error", () => {
      const cellsNumber = 2;

      expect(() => {
        getRow(cellsNumber);
      }).toThrow();
    });
  });
});
