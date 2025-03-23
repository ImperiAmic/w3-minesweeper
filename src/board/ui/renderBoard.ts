import { Board } from "../types";

export const renderBoard = (board: Board): void => {
  const containerElement = document.querySelector(".container");

  if (!containerElement) {
    throw new Error("Missing container element");
  }

  const flattenedBoard = board.flat();

  const boardElement = document.createElement("ul");
  boardElement.className = "board";

  flattenedBoard.forEach((cell) => {
    const cellElement = document.createElement("button");
    cellElement.className = "cell-button";
    cellElement.ariaLabel = "Cell";

    const cellItemElement = document.createElement("li");
    cellItemElement.appendChild(cellElement);

    boardElement.appendChild(cellItemElement);

    if (cell.hasMine) {
      const mineImageElement = document.createElement("img");
      mineImageElement.classList.add("hidden", "image-mine");
      mineImageElement.src = "/images/land-mine.png";
      mineImageElement.alt = "Land mine";
      mineImageElement.width = 40;
      mineImageElement.height = 40;
      cellElement.appendChild(mineImageElement);
      cellElement.classList.add("mine-button");

      cellElement.addEventListener("click", () => {
        mineImageElement.classList.remove("hidden");
        cell.isOpen = true;
      });
    }

    if (!cell.hasMine) {
      const adjacentMinesTotalElement = document.createElement("span");
      adjacentMinesTotalElement.textContent = String(cell.adjacentMinesTotal);
      adjacentMinesTotalElement.className = "hidden";
      cellElement.appendChild(adjacentMinesTotalElement);

      cellElement.addEventListener("click", () => {
        adjacentMinesTotalElement.classList.remove("hidden");
        cell.isOpen = true;
      });
    }
  });

  containerElement.appendChild(boardElement);
};
