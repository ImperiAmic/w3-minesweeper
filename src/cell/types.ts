export type Cell = {
  hasMine: boolean;
  adjacentMinesTotal: number;
  isOpen: boolean;
  rowPosition?: number;
  columnPosition?: number;
};
