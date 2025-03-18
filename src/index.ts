const row1 = [1, 2, 3];
const row2 = [4, 5, 6];
const row3 = [7, 8, 9];

const simpleBoard = [row1, row2, row3];

simpleBoard.forEach((row) => {
  row.forEach((cell) => console.log(cell));
});

/* const board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]; */

/* board.forEach((row) => {
  row.forEach((cell) => {
    console.log(cell);
  });
}); */

export const multiplyNumbers = (numberA: number, numberB: number): number =>
  numberA * numberB;
