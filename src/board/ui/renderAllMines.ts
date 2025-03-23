export const renderAllMines = (): void => {
  const buttonElements = document.querySelectorAll(".button-mine");
  const mineImageElements = document.querySelectorAll(".image-mine");

  buttonElements.forEach((button) => {
    button.addEventListener("click", () => {
      mineImageElements.forEach((img) => {
        img.classList.remove("hidden");
      });
    });
  });
};
