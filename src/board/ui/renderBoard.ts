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
      cellElement.ariaLabel = "Cell";

      const cellItemElement = document.createElement("li");
      cellItemElement.appendChild(cellElement);

      boardElement.appendChild(cellItemElement);

      if (cell.hasMine) {
        const mineImageElement = document.createElement("img");
        mineImageElement.className = "hidden";
        mineImageElement.src = "/images/land-mine.png";
        mineImageElement.alt = "Land mine";
        mineImageElement.width = 40;
        mineImageElement.height = 40;
        cellElement.appendChild(mineImageElement);
      }
    });
  });

  containerElement.appendChild(boardElement);
};
