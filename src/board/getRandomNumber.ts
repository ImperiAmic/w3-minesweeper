export const getRandomNumber = (
  minimumNumber: number,
  maximumNumber: number
): number => {
  return Math.floor(
    Math.random() * (maximumNumber - minimumNumber + 1) + minimumNumber
  );
};
