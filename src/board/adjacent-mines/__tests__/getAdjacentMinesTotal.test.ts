import { Cell } from "../../../cell/types";
import { getBoard } from "../../factory/getBoard";
import { getAdjacentMinesTotal } from "../getAdjacentMinesTotal";

describe("Given the function getAdjacentMinesTotal", () => {
  describe("When it receives a cell at 0,0 with one adjacent mine and a board of 3x3 with a mine in its center", () => {
    test("Then it should return 1", () => {
      const cell: Cell = {
        hasMine: false,
        isOpen: false,
        adjacentMinesTotal: 1,
        rowPosition: 0,
        columnPosition: 0,
      };
      const board = getBoard(3);
      board[0][0].hasMine = false;
      board[0][1].hasMine = false;
      board[0][2].hasMine = false;
      board[1][0].hasMine = false;
      board[1][1].hasMine = true;
      board[1][2].hasMine = false;
      board[2][0].hasMine = false;
      board[2][1].hasMine = false;
      board[2][2].hasMine = false;

      const actualAdjacentMinesTotal = getAdjacentMinesTotal(cell, board);

      expect(actualAdjacentMinesTotal).toBe(cell.adjacentMinesTotal);
    });
  });
  describe("When it receives a cell at 0,0 without adjacent mines and a board of 3x3 without mines", () => {
    test("Then it should return 0", () => {
      const cell: Cell = {
        hasMine: false,
        isOpen: false,
        adjacentMinesTotal: 0,
        rowPosition: 0,
        columnPosition: 0,
      };
      const board = getBoard(3);
      board[0][0].hasMine = false;
      board[0][1].hasMine = false;
      board[0][2].hasMine = false;
      board[1][0].hasMine = false;
      board[1][1].hasMine = false;
      board[1][2].hasMine = false;
      board[2][0].hasMine = false;
      board[2][1].hasMine = false;
      board[2][2].hasMine = false;

      const actualAdjacentMinesTotal = getAdjacentMinesTotal(cell, board);

      expect(actualAdjacentMinesTotal).toBe(cell.adjacentMinesTotal);
    });
  });
});
