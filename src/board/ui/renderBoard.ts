import { Board } from "../types";

export const renderBoard = (board: Board): void => {
  const containerElement = document.querySelector(".container");

  if (!containerElement) {
    throw new Error("Missing container element");
  }

  const boardElement = document.createElement("ul");
  boardElement.className = "board";

  board.forEach((row) => {
    row.forEach((cell) => {
      const cellElement = document.createElement("button");
      cellElement.className = "cell";
      cellElement.textContent = String(cell.adjacentMinesTotal);

      const cellItemElement = document.createElement("li");
      cellItemElement.className = "cell-item";
      cellItemElement.appendChild(cellElement);

      boardElement.appendChild(cellItemElement);
    });
  });

  containerElement.appendChild(boardElement);
};
