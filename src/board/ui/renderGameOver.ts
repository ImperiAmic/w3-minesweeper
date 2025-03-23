export const renderGameOver = (): void => {
  const containerElement = document.querySelector(".container");
  const buttonElements = document.querySelectorAll(".cell-button");
  const mineButtonElements = document.querySelectorAll(".mine-button");
  const mineImageElements = document.querySelectorAll(".image-mine");

  if (!containerElement) {
    throw new Error("test");
  }

  const gameOverElement = document.createElement("div");
  gameOverElement.classList.add("game-over", "hidden");

  mineButtonElements.forEach((button) => {
    button.addEventListener("click", () => {
      mineImageElements.forEach((img) => {
        img.classList.remove("hidden");
        gameOverElement.textContent = "Game over, you fu***ng donkey!";
        gameOverElement.classList.remove("hidden");
        buttonElements.forEach((button) => {
          button.setAttribute("disabled", "");
        });
      });
    });
  });

  containerElement.appendChild(gameOverElement);
};
